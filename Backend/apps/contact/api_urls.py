from django.urls import path
from .api_views import ContactEnquiryCreateAPIView

urlpatterns = [
    path("contact-enquiries/", ContactEnquiryCreateAPIView.as_view()),
]