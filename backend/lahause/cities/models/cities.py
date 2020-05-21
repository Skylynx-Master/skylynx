"""City model."""

# Django
from django.db import models

# Utilities
from lahause.utils.models import LaHauseModel


class City(LaHauseModel):
    """City model.

    A city is the table that holds the relationship with
    a user and a circle.
    """

    name = models.CharField(
        verbose_name='city name',
        max_length=50
    )

    is_active = models.BooleanField(
        verbose_name='active',
        default=True
    )

    country = models.ForeignKey(
        'countries.Country',
        on_delete=models.SET_NULL,
        null=True
    )

    def __str__(self):
        """Return city name."""
        return self.name
