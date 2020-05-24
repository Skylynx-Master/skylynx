"""Addresses serializers """

# Django REST Framework
from rest_framework import serializers

# Models
from lahause.addresses.models import Address

class AddressSerializer(serializers.ModelSerializer):
    """address serializer."""

    class Meta:
        """Meta class."""
        model = Address
        fields =(
            'number_building', 'number_street',
            'area_locality', 'zip_postcode',
            'other_address_details','city'
        )
