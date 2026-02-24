from django.urls import path
from .api_views import HomePageAPIView

urlpatterns = [
    path("home/", HomePageAPIView.as_view()),
]
