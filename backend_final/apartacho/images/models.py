"""Image model."""

# Django
from django.db import models

# Utilities
from apartacho.utils.models import ApartachoModel
from apartacho.properties.models import Property


class Image(ApartachoModel):
    """Image model.

    An image is the table that holds the relationship with
    a property.
    """

    url = models.ImageField(
        verbose_name='url',
        upload_to='properties/pictures/',
    )

    property = models.ForeignKey(
        Property,
        on_delete=models.CASCADE,
        help_text='Set relationship with property'
    )

    def __str__(self):
        """Return city name."""
        return self.url
