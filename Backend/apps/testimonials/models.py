from django.db import models


class VideoTestimonial(models.Model):
    name = models.CharField(max_length=100, blank=True)
    role = models.CharField(max_length=120, blank=True)

    # Option A: upload video in admin (stored in MEDIA)
    video_file = models.FileField(upload_to="testimonials/videos/", blank=True, null=True)

    # Option B: external link (YouTube/Vimeo/Drive direct link, etc.)
    video_url = models.URLField(blank=True)

    # Thumbnail shown in carousel
    thumbnail = models.ImageField(upload_to="testimonials/thumbnails/", blank=True, null=True)

    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name or f"Video Testimonial #{self.pk}"
