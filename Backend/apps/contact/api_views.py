from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
from django.core.mail import send_mail

from .serializers import ContactEnquirySerializer

class ContactEnquiryCreateAPIView(APIView):
    def post(self, request):
        ser = ContactEnquirySerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        enquiry = ser.save()

        # 1) Email to USER
        user_subject = "Thanks for contacting Vetri Technology Solutions"
        user_message = (
            f"Hi {enquiry.full_name},\n\n"
            "Thanks for contacting Vetri Technology Solutions.\n"
            "We received your enquiry and our team will call you soon.\n\n"
            "Regards,\nVetri Technology Solutions"
        )
        send_mail(
            subject=user_subject,
            message=user_message,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[enquiry.email],
            fail_silently=True,
        )

        # 2) Email to ADMIN
        admin_subject = f"New Contact Enquiry - {enquiry.full_name}"
        admin_message = (
            "New enquiry received:\n\n"
            f"Name: {enquiry.full_name}\n"
            f"Email: {enquiry.email}\n"
            f"Phone: {enquiry.phone}\n"
            f"Course Interest: {enquiry.course_interest}\n\n"
            f"Message:\n{enquiry.message}\n"
        )
        send_mail(
            subject=admin_subject,
            message=admin_message,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[getattr(settings, "CONTACT_ADMIN_EMAIL", settings.DEFAULT_FROM_EMAIL)],
            fail_silently=True,
        )

        return Response({"message": "Enquiry submitted successfully!"}, status=status.HTTP_201_CREATED)