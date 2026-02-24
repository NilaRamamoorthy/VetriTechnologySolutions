from django.db import models


class SiteSettings(models.Model):
    site_name = models.CharField(max_length=120, default="VIS Service Website")
    logo = models.ImageField(upload_to="site/", blank=True, null=True)

    phone = models.CharField(max_length=30, blank=True)
    email = models.EmailField(blank=True)
    address = models.CharField(max_length=255, blank=True)

    facebook = models.URLField(blank=True)
    instagram = models.URLField(blank=True)
    linkedin = models.URLField(blank=True)
    youtube = models.URLField(blank=True)

    header_cta_text = models.CharField(max_length=50, default="Contact Us")
    header_cta_url = models.CharField(max_length=200, default="/contact")

    footer_note = models.CharField(max_length=200, blank=True, default="© All rights reserved.")

    is_active = models.BooleanField(default=True)

    def __str__(self):
        return "Site Settings"

    class Meta:
        verbose_name_plural = "Site Settings"
