from django.urls import path
from .api_views import CourseMetaAPIView, CourseDetailAPIView

urlpatterns = [
    path("courses/", CourseMetaAPIView.as_view()),
    path("courses/<slug:slug>/", CourseDetailAPIView.as_view()),
]