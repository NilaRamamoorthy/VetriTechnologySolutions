from rest_framework import serializers
from .models import (
    HomeHero,
    Stat,
    AboutSection,
    HowItWorksStep,
    WhyChooseUsSection,
    WhyChooseUsItem,
)


class HomeHeroSerializer(serializers.ModelSerializer):
    background_image_url = serializers.SerializerMethodField()

    class Meta:
        model = HomeHero
        fields = "__all__"

    def get_background_image_url(self, obj):
        request = self.context.get("request")
        if obj.background_image and request:
            return request.build_absolute_uri(obj.background_image.url)
        return None


class StatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stat
        fields = "__all__"


class AboutSectionSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = AboutSection
        fields = "__all__"

    def get_image_url(self, obj):
        request = self.context.get("request")
        if obj.image and request:
            return request.build_absolute_uri(obj.image.url)
        return None


class HowItWorksStepSerializer(serializers.ModelSerializer):
    icon_url = serializers.SerializerMethodField()

    class Meta:
        model = HowItWorksStep
        fields = "__all__"

    def get_icon_url(self, obj):
        request = self.context.get("request")
        if obj.icon and request:
            return request.build_absolute_uri(obj.icon.url)
        return None



class WhyChooseUsItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = WhyChooseUsItem
        fields = "__all__"


class WhyChooseUsSectionSerializer(serializers.ModelSerializer):
    left_image_url = serializers.SerializerMethodField()
    items = serializers.SerializerMethodField()

    class Meta:
        model = WhyChooseUsSection
        fields = "__all__"

    def get_left_image_url(self, obj):
        request = self.context.get("request")
        if obj.left_image and request:
            return request.build_absolute_uri(obj.left_image.url)
        return None

    def get_items(self, obj):
        items = obj.items.filter(is_active=True).order_by("order")
        return WhyChooseUsItemSerializer(items, many=True).data

