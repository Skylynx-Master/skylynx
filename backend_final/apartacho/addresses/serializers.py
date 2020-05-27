"""Addresses serializers."""

# Django REST Framework
from rest_framework import serializers

# Models
from apartacho.addresses.models import Address


class AddressSerializer(serializers.ModelSerializer):
    """Addresses serializers."""

    number_building = serializers.CharField(
        required=True,
        max_length=10
    )

    number_street = serializers.CharField(
        required=True,
        max_length=5
    )

    area_locality = serializers.CharField(
        required=True,
        max_length=50
    )

    class Meta:
        model = Address
        fields = '__all__'
