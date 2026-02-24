from django.db import models


class HomeHero(models.Model):
    title = models.CharField(max_length=200)
    subtitle = models.TextField(blank=True)

    background_image = models.ImageField(upload_to="home/hero/", blank=True, null=True)

    primary_cta_text = models.CharField(max_length=50, default="Get Started")
    primary_cta_url = models.CharField(max_length=200, default="/contact")

    secondary_cta_text = models.CharField(max_length=50, default="Learn More")
    secondary_cta_url = models.CharField(max_length=200, default="/about")

    is_active = models.BooleanField(default=True)

    def __str__(self):
        return "Home Hero"


class Stat(models.Model):
    label = models.CharField(max_length=80)
    value = models.CharField(max_length=30)  # keep string for 10K+, 99%, etc.
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.label} - {self.value}"


class AboutSection(models.Model):
    heading = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to="home/about/", blank=True, null=True)

    is_active = models.BooleanField(default=True)

    def __str__(self):
        return "About Section"


class HowItWorksStep(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField(blank=True)
    icon = models.ImageField(upload_to="home/steps/", blank=True, null=True)

    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title


class WhyChooseUsSection(models.Model):
    heading = models.CharField(max_length=120, default="Why Choose Us")
    left_image = models.ImageField(upload_to="home/why_choose_us/", blank=True, null=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return "Why Choose Us Section"


class WhyChooseUsItem(models.Model):
    section = models.ForeignKey(
        WhyChooseUsSection,
        on_delete=models.CASCADE,
        related_name="items",
    )
    title = models.CharField(max_length=120)
    description = models.CharField(max_length=220, blank=True)

    icon_class = models.CharField(
        max_length=50,
        blank=True,
        help_text="Example: bi-people, bi-award, bi-graph-up"
    )

    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title
