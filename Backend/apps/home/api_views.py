from rest_framework.views import APIView
from rest_framework.response import Response

from apps.core.models import SiteSettings
from apps.core.models import SiteSettings
from apps.home.models import (
    HomeHero,
    Stat,
    AboutSection,
    HowItWorksStep,
    WhyChooseUsSection,
)

from apps.core.models import SiteSettings
from apps.home.serializers import (
    HomeHeroSerializer,
    StatSerializer,
    AboutSectionSerializer,
    HowItWorksStepSerializer,
    WhyChooseUsSectionSerializer,
)
from apps.testimonials.models import VideoTestimonial
from apps.testimonials.serializers import VideoTestimonialSerializer

from rest_framework import serializers


class SiteSettingsSerializer(serializers.ModelSerializer):
    logo_url = serializers.SerializerMethodField()

    class Meta:
        model = SiteSettings
        fields = "__all__"

    def get_logo_url(self, obj):
        request = self.context.get("request")
        if obj.logo and request:
            return request.build_absolute_uri(obj.logo.url)
        return None


class HomePageAPIView(APIView):
    def get(self, request):
        site_settings = SiteSettings.objects.filter(is_active=True).first()
        hero = HomeHero.objects.filter(is_active=True).first()
        about = AboutSection.objects.filter(is_active=True).first()
        why_section = WhyChooseUsSection.objects.filter(is_active=True).first()

        stats = Stat.objects.filter(is_active=True).order_by("order")
        steps = HowItWorksStep.objects.filter(is_active=True).order_by("order")
        video_testimonials = VideoTestimonial.objects.filter(is_active=True).order_by("order")[:12]

        data = {
            "site_settings": SiteSettingsSerializer(site_settings, context={"request": request}).data if site_settings else None,
            "hero": HomeHeroSerializer(hero, context={"request": request}).data if hero else None,
            "stats": StatSerializer(stats, many=True).data,
            "about": AboutSectionSerializer(about, context={"request": request}).data if about else None,
            "steps": HowItWorksStepSerializer(steps, many=True, context={"request": request}).data,
            "why_choose_us": WhyChooseUsSectionSerializer(why_section, context={"request": request}).data if why_section else None,
            "video_testimonials": VideoTestimonialSerializer(video_testimonials, many=True, context={"request": request}).data,

        }

        return Response(data)
