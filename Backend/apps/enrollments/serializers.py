from rest_framework import serializers
from .models import Enrollment, Payment


class EnrollmentCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enrollment
        fields = "__all__"

    def validate(self, attrs):
        # snapshot amount from course fee if not passed
        course = attrs.get("course")
        if course and (not attrs.get("amount") or attrs["amount"] == 0):
            attrs["amount"] = course.course_fee or 0
        return attrs


class EnrollmentSerializer(serializers.ModelSerializer):
    course_title = serializers.CharField(source="course.title", read_only=True)

    class Meta:
        model = Enrollment
        fields = "__all__"


class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = "__all__"