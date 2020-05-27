"""Addresses model."""

# Django
from django.db import models

# Utilities
from apartacho.utils.models import ApartachoModel
from apartacho.cities.models import City


class Address(ApartachoModel):
    """Addresses model.
    Entity that relates the addresses where the properties are
    """

    number_building = models.CharField(
        verbose_name='number building',
        max_length=10
    )

    number_street = models.CharField(
        verbose_name='number street',
        max_length=5
    )

    area_locality = models.CharField(
        verbose_name='area locality',
        max_length=50
    )

    zip_postcode = models.CharField(
        verbose_name='zip postcode',
        max_length=10,
        null=True,
        help_text='Zone Improvement Plan Code'
    )

    other_address_details = models.CharField(
        verbose_name='other address details',
        max_length=50,
        null=True,
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

    city = models.ForeignKey(
        City,
        on_delete=models.CASCADE,
        help_text='Set relationship with city'
    )

    def __str__(self):
        """Return addresses name."""
        return self.number_building

    REQUIRED_FIELDS = ['number_building', 'number_street', 'area_locality', 'city']
