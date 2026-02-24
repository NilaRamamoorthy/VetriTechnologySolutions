import uuid
from django.utils import timezone
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404

from .models import Enrollment, Payment
from .serializers import EnrollmentCreateSerializer, EnrollmentSerializer
from .invoice import build_invoice_pdf


class EnrollmentCreateAPIView(APIView):
    # POST /api/enrollments/
    def post(self, request):
        ser = EnrollmentCreateSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        enrollment = ser.save(status="draft")
        return Response(EnrollmentSerializer(enrollment).data, status=status.HTTP_201_CREATED)


class EnrollmentConfirmAPIView(APIView):
    # POST /api/enrollments/<id>/confirm/
    def post(self, request, pk):
        enrollment = get_object_or_404(Enrollment, pk=pk)
        enrollment.status = "confirmed"
        enrollment.save(update_fields=["status"])
        return Response(EnrollmentSerializer(enrollment).data)


class PaymentCreateAPIView(APIView):
    """
    For now: simulate payment (no gateway). Later plug Razorpay/Stripe here.
    POST /api/enrollments/<id>/pay/  body: { "method": "upi" }
    """
    def post(self, request, pk):
        enrollment = get_object_or_404(Enrollment, pk=pk)

        method = request.data.get("method", "")
        payment, _ = Payment.objects.get_or_create(enrollment=enrollment)
        payment.method = method
        payment.status = "paid"
        payment.transaction_id = f"TXN-{uuid.uuid4().hex[:12].upper()}"
        payment.paid_at = timezone.now()

        # mark enrollment paid
        enrollment.status = "paid"
        enrollment.save(update_fields=["status"])

        # generate invoice PDF and attach
        filename, content = build_invoice_pdf(enrollment, payment)
        payment.invoice_pdf.save(filename, content, save=False)

        payment.save()
        return Response({
            "enrollment": EnrollmentSerializer(enrollment).data,
            "payment": {
                "status": payment.status,
                "method": payment.method,
                "transaction_id": payment.transaction_id,
                "paid_at": payment.paid_at.isoformat(),
                "invoice_url": request.build_absolute_uri(payment.invoice_pdf.url) if payment.invoice_pdf else None,
            }
        })