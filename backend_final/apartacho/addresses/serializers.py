"""addresses serializers."""

# Django REST Framework
from rest_framework import serializers

# Models
from apartacho.addresses.models import Address



class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = '__all__'