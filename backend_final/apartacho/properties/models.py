"""Property model."""
from django.db import models

# Utilities
from apartacho.utils.models import ApartachoModel
from apartacho.users.models import User
from apartacho.addresses.models import Address

OFFERS_TYPES = [
    (1, 'Alquiler-Arriendo'),
    (2, 'Venta'),
]

SERVICE_TYPES = [
    (1, 'Apartamento'),
    (2, 'Casa'),
]


class Property(ApartachoModel):

    has_furnished = models.BooleanField(
        verbose_name='furnished',
        default=False,
        help_text='Set to true when the property have furnished.',
    )

    price = models.DecimalField(
        verbose_name='price',
        max_digits=12,
        decimal_places=2,
        help_text='Set to price total the real estate.',
    )

    price_mts = models.DecimalField(
        verbose_name='price mt',
        max_digits=12,
        decimal_places=2,
        null=True,
        help_text='Set to price for square meter the real estate.',
    )

    area = models.DecimalField(
        verbose_name='area mt',
        max_digits=7,
        decimal_places=2,
        help_text='Set to area for square meter the real estate.',
    )

    bathroom_count = models.PositiveSmallIntegerField(
        verbose_name='bathroom count',
        default=0,
        help_text='Set to bathroom count for the real estate.',
    )

    room_count = models.PositiveSmallIntegerField(
        verbose_name='room count',
        default=0,
        help_text='Set to room count for the real estate.',
    )

    door_count = models.PositiveSmallIntegerField(
        verbose_name='door count',
        default=0,
        null=True,
        help_text='Set to door count for the real estate.',
    )

    offer_type = models.IntegerField(
        choices=OFFERS_TYPES,
        default=1,
        help_text='It presents the types of offers for the property to be offered'
    )

    service_type = models.IntegerField(
        choices=SERVICE_TYPES,
        default=1,
        help_text='It presents the types of property for the property to be offered'
    )

    has_heated = models.BooleanField(
        verbose_name='heated',
        default=False,
        help_text='Set to true when the property have heated.',
    )

    has_pool = models.BooleanField(
        verbose_name='pool',
        default=False,
        help_text='Set to true when the property have pool.',
    )

    has_parking = models.BooleanField(
        verbose_name='parking',
        default=False,
        help_text='Set to true when the property have parking.',
    )

    has_security = models.BooleanField(
        verbose_name='security',
        default=False,
        help_text='Set to true when the property have security.',
    )

    has_warehouse = models.BooleanField(
        verbose_name='warehouse',
        default=False,
        help_text='Set to true when the property have warehouse.',
    )

    has_elevator = models.BooleanField(
        verbose_name='elevator',
        default=False,
        help_text='Set to true when the property have elevator.',
    )

    construction_year = models.PositiveSmallIntegerField(
        verbose_name='construction year',
        null=True,
        help_text='Set to construction year the real estate.',
    )

    property_condition = models.FloatField(
        verbose_name='construction year',
        default=5.0,
        null=True,
        help_text='Set to construction year the real estate.',
    )

    overview = models.CharField(
        verbose_name='overview',
        max_length=1000,
        help_text='Set to overview the real estate.',
    )

    is_active = models.BooleanField(
        verbose_name='active',
        default=True,
        help_text='Set to true when the user have active its real estate.',
    )

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        help_text='Set relationship with user',
    )

    address = models.ForeignKey(
        Address,
        on_delete=models.CASCADE,
        null=True,
        help_text='Set relationship with address',
    )
