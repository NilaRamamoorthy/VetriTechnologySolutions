from django.urls import path
from .api_views import EnrollmentCreateAPIView, EnrollmentConfirmAPIView, PaymentCreateAPIView

urlpatterns = [
    path("enrollments/", EnrollmentCreateAPIView.as_view()),
    path("enrollments/<int:pk>/confirm/", EnrollmentConfirmAPIView.as_view()),
    path("enrollments/<int:pk>/pay/", PaymentCreateAPIView.as_view()),
]