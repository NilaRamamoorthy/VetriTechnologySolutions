from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import RetrieveAPIView
from django.shortcuts import get_object_or_404

from .models import CourseCategory, Course
from .serializers import CourseCategorySerializer, CourseListSerializer, CourseDetailSerializer


class CourseMetaAPIView(APIView):
    """
    Returns categories + courses (optionally filtered by category slug)
    /api/courses/?category=development
    """
    def get(self, request):
        category_slug = request.query_params.get("category")

        categories = CourseCategory.objects.filter(is_active=True).order_by("order")
        courses_qs = Course.objects.filter(is_active=True).order_by("order")

        if category_slug and category_slug != "all":
            courses_qs = courses_qs.filter(category__slug=category_slug)

        data = {
            "categories": CourseCategorySerializer(categories, many=True).data,
            "courses": CourseListSerializer(courses_qs, many=True, context={"request": request}).data,
        }
        return Response(data)


class CourseDetailAPIView(APIView):
    """
    /api/courses/<slug>/
    """
    def get(self, request, slug):
        course = get_object_or_404(Course, slug=slug, is_active=True)
        return Response(CourseDetailSerializer(course, context={"request": request}).data)