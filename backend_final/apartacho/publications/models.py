"""Publication model."""

# Django
from django.db import models

# Utilities
from apartacho.utils.models import ApartachoModel
from apartacho.properties.models import Property
from apartacho.users.models import User


class Publication(ApartachoModel):
    """Publication model."""

    is_published = models.BooleanField(
        verbose_name='published',
        default=False,
        help_text='Set to true when the publication is published'
    )

    is_active = models.BooleanField(
        verbose_name='active',
        default=True,
        help_text='Set to true when the publication is active'
    )

    description = models.CharField(
        verbose_name='description',
        max_length=150,
        help_text='Set to description of publication'
    )

    property = models.ForeignKey(
        Property,
        on_delete=models.CASCADE,
        help_text='Set relationship with property'
    )

    user_admin = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        help_text='Set relationship with user admin'
    )

    def __str__(self):
        """Return addresses name."""
        return self.description
