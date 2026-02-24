from django.db import models
from django.core.exceptions import ValidationError

class CourseCategory(models.Model):
    name = models.CharField(max_length=80, unique=True)  # Development, Design, Data...
    slug = models.SlugField(unique=True)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Course(models.Model):
    category = models.ForeignKey(
        CourseCategory, on_delete=models.SET_NULL, null=True, related_name="courses"
    )

    title = models.CharField(max_length=150)
    slug = models.SlugField(unique=True)

    short_description = models.CharField(max_length=220, blank=True)
    overview = models.TextField(blank=True)

    duration_text = models.CharField(max_length=60, blank=True)  # "6 Months"
    level_text = models.CharField(max_length=60, blank=True)     # "Beginner to Advanced"
    mode_text = models.CharField(max_length=60, blank=True)      # "Online & Offline"

    course_fee = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    certification = models.BooleanField(default=True)

    thumbnail = models.ImageField(upload_to="courses/thumbnails/", blank=True, null=True)

    brochure = models.FileField(upload_to="courses/brochures/", blank=True, null=True)
    def clean(self):
        super().clean()
        if self.brochure and not str(self.brochure.name).lower().endswith(".pdf"):
           raise ValidationError({"brochure": "Only PDF files are allowed for brochure."})
    promo_video = models.FileField(upload_to="courses/videos/", blank=True, null=True)

    enroll_url = models.URLField(blank=True)

    is_featured = models.BooleanField(default=True)
    is_active = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.title


class CourseTool(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="tools")
    name = models.CharField(max_length=60)  # Python, Django, React, MySQL, APIs
    icon = models.ImageField(upload_to="courses/tools/", blank=True, null=True)
    order = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"{self.course.title} - {self.name}"


class CourseLearningPoint(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="learning_points")
    text = models.CharField(max_length=220)
    order = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"{self.course.title} - {self.text[:30]}"