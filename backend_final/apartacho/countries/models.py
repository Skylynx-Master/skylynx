"""Country model."""

# Django
from django.db import models

# Utilities
from apartacho.utils.models import ApartachoModel


class Country(ApartachoModel):
    """Country model.

    A country is the table that holds the relationship with
    a user and an address.
    """

    name = models.CharField( #Colombia
        verbose_name='country name',
        max_length=50
    )

    iso_tres = models.CharField( #COL
        verbose_name="iso_tres",
        max_length=4,
        blank=True,
        null=True
    )

    iso_dos = models.CharField( #CO
        verbose_name="iso_dos",
        max_length=3,
        blank=True,
        null=True
    )

    phone_code = models.CharField( #57
        verbose_name="phone_code",
        max_length=3,
        blank=True,
        null=True
    )

    def __str__(self):
        """Return country name."""
        return self.name