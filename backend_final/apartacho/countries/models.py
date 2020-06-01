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

    name = models.CharField(
        # Colombia
        verbose_name='country name',
        max_length=50,
        unique=True
    )

    iso_3 = models.CharField(
        # COL
        verbose_name="iso three",
        max_length=3,
        blank=True,
        null=True,
        unique=True
    )

    iso_2 = models.CharField(
        # CO
        verbose_name="iso two",
        max_length=2,
        blank=True,
        null=True,
        unique=True
    )

    phone_code = models.CharField(
        # 57
        verbose_name="phone_code",
        max_length=3,
        blank=True,
        null=True
    )

    is_active = models.BooleanField(
        verbose_name='active',
        default=True,
        help_text='Set to true when the address is active'
    )

    def __str__(self):
        """Return country name."""
        return self.name

    class Meta:
        ordering = ['name']
