"""City model."""

# Django
from django.db import models

# Utilities
from apartacho.utils.models import ApartachoModel
from apartacho.countries.models import Country


class City(ApartachoModel):
    """City model.

    A city is the table that holds the relationship with
    a user and a country.
    """

    name = models.CharField(
        verbose_name='city name',
        max_length=50
    )

    latitude = models.DecimalField(
        verbose_name='latitude',
        max_digits=12,
        decimal_places=9,
        blank=True,
        null=True,
        help_text='A point on Earth is surface is the angle between the equatorial plane'
    )

    longitude = models.DecimalField(
        verbose_name='longitude',
        max_digits=12,
        decimal_places=9,
        blank=True,
        null=True,
        help_text='A point on Earth is surface is the angle east or west of a reference meridian'
    )

    is_active = models.BooleanField(
        verbose_name='active',
        default=True,
        help_text='Set to true when the address is active'
    )

    country = models.ForeignKey(
        Country,
        on_delete=models.CASCADE,
        help_text='Set relationship with country'
    )

    def __str__(self):
        """Return city name."""
        return self.name
