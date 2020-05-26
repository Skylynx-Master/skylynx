"""addresses serializers."""

# Django REST Framework
from rest_framework import serializers

# Models
from apartacho.cities.models import City


class CitiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = '__all__'
