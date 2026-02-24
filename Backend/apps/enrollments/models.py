from django.db import models
from django.utils import timezone
from apps.courses.models import Course


class Enrollment(models.Model):
    STATUS_CHOICES = [
        ("draft", "Draft"),
        ("confirmed", "Confirmed"),
        ("paid", "Paid"),
        ("cancelled", "Cancelled"),
    ]

    # Student details
    first_name = models.CharField(max_length=60)
    last_name = models.CharField(max_length=60, blank=True)
    phone = models.CharField(max_length=20)
    email = models.EmailField()

    gender = models.CharField(max_length=20)  # keep simple now
    dob = models.DateField(null=True, blank=True)

    address = models.CharField(max_length=220)
    city = models.CharField(max_length=80)
    state = models.CharField(max_length=80)
    pincode = models.CharField(max_length=12)

    message = models.TextField(blank=True)

    # Course
    course = models.ForeignKey(Course, on_delete=models.PROTECT, related_name="enrollments")
    mode = models.CharField(max_length=60, blank=True)  # Online / Offline / Both

    # Pricing snapshot
    amount = models.DecimalField(max_digits=10, decimal_places=2, default=0)

    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="draft")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.first_name} - {self.course.title} ({self.status})"


class Payment(models.Model):
    STATUS_CHOICES = [
        ("created", "Created"),
        ("paid", "Paid"),
        ("failed", "Failed"),
    ]

    enrollment = models.OneToOneField(Enrollment, on_delete=models.CASCADE, related_name="payment")
    method = models.CharField(max_length=30, blank=True)  # card / upi / netbanking / cash...
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="created")

    transaction_id = models.CharField(max_length=80, blank=True)
    paid_at = models.DateTimeField(null=True, blank=True)

    invoice_pdf = models.FileField(upload_to="invoices/", blank=True, null=True)

    def __str__(self):
        return f"Payment {self.enrollment_id} - {self.status}"