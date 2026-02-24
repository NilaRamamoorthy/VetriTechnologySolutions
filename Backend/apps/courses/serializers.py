from rest_framework import serializers
from .models import CourseCategory, Course, CourseTool, CourseLearningPoint


class CourseCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseCategory
        fields = "__all__"


class CourseToolSerializer(serializers.ModelSerializer):
    icon_url = serializers.SerializerMethodField()

    class Meta:
        model = CourseTool
        fields = "__all__"

    def get_icon_url(self, obj):
        request = self.context.get("request")
        if obj.icon and request:
            return request.build_absolute_uri(obj.icon.url)
        return None


class CourseLearningPointSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseLearningPoint
        fields = "__all__"


class CourseListSerializer(serializers.ModelSerializer):
    thumbnail_url = serializers.SerializerMethodField()
    category = CourseCategorySerializer()

    class Meta:
        model = Course
        fields = [
            "id", "title", "slug", "short_description",
            "duration_text", "level_text",
            "thumbnail_url", "category",
        ]

    def get_thumbnail_url(self, obj):
        request = self.context.get("request")
        if obj.thumbnail and request:
            return request.build_absolute_uri(obj.thumbnail.url)
        return None


class CourseDetailSerializer(serializers.ModelSerializer):
    thumbnail_url = serializers.SerializerMethodField()
    brochure_url = serializers.SerializerMethodField()
    promo_video_url = serializers.SerializerMethodField()
    category = CourseCategorySerializer()
    tools = CourseToolSerializer(many=True)
    learning_points = CourseLearningPointSerializer(many=True)

    class Meta:
        model = Course
        fields = "__all__"

    def get_thumbnail_url(self, obj):
        request = self.context.get("request")
        if obj.thumbnail and request:
            return request.build_absolute_uri(obj.thumbnail.url)
        return None

    def get_brochure_url(self, obj):
        request = self.context.get("request")
        if obj.brochure and request:
            return request.build_absolute_uri(obj.brochure.url)
        return None

    def get_promo_video_url(self, obj):
        request = self.context.get("request")
        if obj.promo_video and request:
            return request.build_absolute_uri(obj.promo_video.url)
        return None