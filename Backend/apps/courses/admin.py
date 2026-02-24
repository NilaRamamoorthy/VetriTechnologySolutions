from django.contrib import admin
from .models import CourseCategory, Course, CourseTool, CourseLearningPoint


@admin.register(CourseCategory)
class CourseCategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "order", "is_active")
    list_editable = ("order", "is_active")
    prepopulated_fields = {"slug": ("name",)}
    ordering = ("order",)


class CourseToolInline(admin.TabularInline):
    model = CourseTool
    extra = 1


class CourseLearningPointInline(admin.TabularInline):
    model = CourseLearningPoint
    extra = 2


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ("title", "category", "order", "is_active", "is_featured")
    list_editable = ("order", "is_active", "is_featured")
    prepopulated_fields = {"slug": ("title",)}
    search_fields = ("title",)
    ordering = ("order",)
    inlines = [CourseToolInline, CourseLearningPointInline]