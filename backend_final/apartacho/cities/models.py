"""City model."""

# Django
from django.db import models

# Utilities
from apartacho.utils.models import ApartachoModel
from apartacho.countries.models import Country


class City(ApartachoModel):
    """City model.

    A city is the table that holds the relationship with
    a user and a circle.
    """

    name = models.CharField(
        verbose_name='city name',
        max_length=50
    )

    latitude = models.DecimalField(
        verbose_name='latitude',
        max_digits=22,
        decimal_places=16,
        blank=True,
        null=True
    )

    longitude = models.DecimalField(
        verbose_name='longitude',
        max_digits=22,
        decimal_places=16,
        blank=True,
        null=True
    )

    is_active = models.BooleanField(
        verbose_name='active',
        default=True
    )

    country = models.ForeignKey(
        Country,
        on_delete=models.SET_NULL,
        null=True
    )

    def __str__(self):
        """Return city name."""
        return self.name