from django.contrib import admin
from .models import HomeHero, Stat, AboutSection, HowItWorksStep
from .models import WhyChooseUsSection, WhyChooseUsItem


@admin.register(HomeHero)
class HomeHeroAdmin(admin.ModelAdmin):
    list_display = ("title", "is_active")


@admin.register(Stat)
class StatAdmin(admin.ModelAdmin):
    list_display = ("label", "value", "order", "is_active")
    list_editable = ("order", "is_active")
    ordering = ("order",)


@admin.register(AboutSection)
class AboutSectionAdmin(admin.ModelAdmin):
    list_display = ("heading", "is_active")


@admin.register(HowItWorksStep)
class HowItWorksStepAdmin(admin.ModelAdmin):
    list_display = ("title", "order", "is_active")
    list_editable = ("order", "is_active")
    ordering = ("order",)


@admin.register(WhyChooseUsSection)
class WhyChooseUsSectionAdmin(admin.ModelAdmin):
    list_display = ("heading", "is_active")


@admin.register(WhyChooseUsItem)
class WhyChooseUsItemAdmin(admin.ModelAdmin):
    list_display = ("title", "order", "is_active", "section")
    list_editable = ("order", "is_active")
    ordering = ("order",)
