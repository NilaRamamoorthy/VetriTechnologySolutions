from rest_framework import serializers
from .models import VideoTestimonial


class VideoTestimonialSerializer(serializers.ModelSerializer):
    video_file_url = serializers.SerializerMethodField()
    thumbnail_url = serializers.SerializerMethodField()

    class Meta:
        model = VideoTestimonial
        fields = "__all__"

    def get_video_file_url(self, obj):
        request = self.context.get("request")
        if obj.video_file and request:
            return request.build_absolute_uri(obj.video_file.url)
        return None

    def get_thumbnail_url(self, obj):
        request = self.context.get("request")
        if obj.thumbnail and request:
            return request.build_absolute_uri(obj.thumbnail.url)
        return None
