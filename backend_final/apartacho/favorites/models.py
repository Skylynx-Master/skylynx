"""Favorite model."""

# Django
from django.db import models

# Utilities
from apartacho.utils.models import ApartachoModel

# Models
from apartacho.properties.models import Property
from apartacho.publications.models import Publication
from apartacho.users.models import User


class Favorite(ApartachoModel):
    """Favorite model."""

    is_favorite = models.BooleanField(
        verbose_name='favorite',
        default=True,
        help_text='Set to true when the property is favorite'
    )

    property = models.ForeignKey(
        Property,
        on_delete=models.CASCADE,
        help_text='Set relationship with property'
    )

    is_published = models.ForeignKey(
        Publication,
        on_delete=models.CASCADE,
        help_text='Set relationship with publication',
    )

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        help_text='Set relationship with user',
    )
