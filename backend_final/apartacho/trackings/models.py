"""Tracking model."""

# Django
from django.db import models

# Utilities
from apartacho.utils.models import ApartachoModel

# Models
from apartacho.properties.models import Property
from apartacho.users.models import User


class Tracking(ApartachoModel):
    """Tracking model."""

    property = models.ForeignKey(
        Property,
        on_delete=models.CASCADE,
        help_text='Set relationship with property'
    )

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        help_text='Set relationship with user',
    )

    is_active = models.BooleanField(
        verbose_name='active',
        default=True,
        help_text='Set to true when the offer is active'
    )
