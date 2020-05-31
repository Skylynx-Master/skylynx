"""Property serializers."""

# Django REST Framework
from rest_framework import serializers

# Model
from apartacho.properties.models import Property, OFFERS_TYPES, SERVICE_TYPES

import datetime
now = datetime.datetime.now()


class PropertyModelSerializer(serializers.ModelSerializer):
    """Property serializers."""

    price = serializers.DecimalField(
        required=True,
        max_digits=12,
        decimal_places=2,
        min_value=0,
    )

    area = serializers.DecimalField(
        required=True,
        max_digits=7,
        decimal_places=2,
        min_value=1,
    )

    bathroom_count = serializers.IntegerField(
        required=True,
        min_value=0,
        max_value=1000,
    )

    room_count = serializers.IntegerField(
        required=True,
        min_value=0,
        max_value=1000,
    )

    door_count = serializers.IntegerField(
        min_value=0,
        max_value=2000,
    )

    construction_year = serializers.IntegerField(
        max_value=now.year,
    )

    property_condition = serializers.FloatField(
        min_value=1,
        max_value=5.0,
    )

    overview = serializers.CharField(
        required=True,
        min_length=50,
        max_length=1000,
        trim_whitespace=True,
    )

    offer_type = serializers.ChoiceField(
        required=True,
        choices=OFFERS_TYPES,
    )

    service_type = serializers.ChoiceField(
        required=True,
        choices=SERVICE_TYPES,
    )

    has_furnished = serializers.BooleanField(default=False)

    has_heated = serializers.BooleanField(default=False)

    has_pool = serializers.BooleanField(default=False)

    has_parking = serializers.BooleanField(default=False)

    has_security = serializers.BooleanField(default=False)

    has_warehouse = serializers.BooleanField(default=False)

    has_elevator = serializers.BooleanField(default=False)

    is_active = serializers.BooleanField(default=False)

    class Meta:
        """Meta class."""

        model = Property
        fields = '__all__'
