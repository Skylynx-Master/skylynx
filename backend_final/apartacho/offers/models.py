"""Offers model."""

# Django
from django.db import models
from model_utils import Choices

# Utilities
from apartacho.utils.models import ApartachoModel

# Models
from apartacho.properties.models import Property
from apartacho.publications.models import Publication
from apartacho.users.models import User


class Offer(ApartachoModel):
    """Offers model."""

    OFFERS_TYPES = [
        ('Venta', 'Venta'),
        ('Alquiler-Arriendo', 'Alquiler-Arriendo'),
        ('Ninguna','Ninguna'),
    ]

    offer_type = models.CharField(
        max_length=100,
        choices=OFFERS_TYPES,
        default=OFFERS_TYPES,
        help_text='It presents the types of offers for the property to be offered'
    )

    offer_description = models.CharField(
        max_length=120,
        blank=True,
        null=True,
        help_text='describes details of the offer generated'
    )

    is_active = models.BooleanField(
        verbose_name='active',
        default=True,
        help_text='Set to true when the offer is active'
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

REQUIRED_FIELDS = ['offer_type', 'offer_description',]