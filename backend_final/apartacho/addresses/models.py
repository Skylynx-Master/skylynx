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
        verbose_name='number_building',
        max_length=10
    )

    number_street = models.CharField(
        verbose_name='number_street',
        max_length=5
    )

    area_locality = models.CharField(
        verbose_name='area_locality',
        max_length=50
    )

    zip_postcode = models.CharField(
        verbose_name='zip_postcode',
        max_length=10
    )

    other_address_details = models.CharField(
        verbose_name='other_address_details',
        max_length=50
    )

    city = models.ForeignKey(
        City,
        on_delete=models.SET_NULL,
        null=True,
    )

    def __str__(self):
        """Return addresses name."""
        return self.number_building

    REQUIRED_FIELDS = ['number_building', 'number_street', 'area_locality', 'city']
