from io import BytesIO
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from django.core.files.base import ContentFile


def build_invoice_pdf(enrollment, payment):
    buffer = BytesIO()
    c = canvas.Canvas(buffer, pagesize=A4)
    width, height = A4

    y = height - 60
    c.setFont("Helvetica-Bold", 16)
    c.drawString(50, y, "Invoice")
    y -= 30

    c.setFont("Helvetica", 10)
    c.drawString(50, y, f"Transaction ID: {payment.transaction_id}")
    y -= 16
    c.drawString(50, y, f"Date: {payment.paid_at.strftime('%Y-%m-%d %H:%M')}")
    y -= 22

    c.setFont("Helvetica-Bold", 12)
    c.drawString(50, y, "Customer Details")
    y -= 16
    c.setFont("Helvetica", 10)
    c.drawString(50, y, f"Name: {enrollment.first_name} {enrollment.last_name}".strip()); y -= 14
    c.drawString(50, y, f"Email: {enrollment.email}"); y -= 14
    c.drawString(50, y, f"Phone: {enrollment.phone}"); y -= 22

    c.setFont("Helvetica-Bold", 12)
    c.drawString(50, y, "Course")
    y -= 16
    c.setFont("Helvetica", 10)
    c.drawString(50, y, f"Course: {enrollment.course.title}"); y -= 14
    c.drawString(50, y, f"Mode: {enrollment.mode}"); y -= 14
    c.drawString(50, y, f"Amount Paid: ₹ {enrollment.amount}"); y -= 30

    c.setFont("Helvetica", 9)
    c.drawString(50, 40, "Thank you for enrolling.")
    c.showPage()
    c.save()

    pdf_bytes = buffer.getvalue()
    buffer.close()
    filename = f"invoice_enrollment_{enrollment.id}.pdf"
    return filename, ContentFile(pdf_bytes)