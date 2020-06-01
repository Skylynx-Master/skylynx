"""Cities serializers."""

# Django REST Framework
from rest_framework import serializers

# Models
from apartacho.cities.models import City


class CitiesSerializer(serializers.ModelSerializer):
    """Cities serializers."""

    name = serializers.CharField(
        required=True,
        max_length=50,
        trim_whitespace=True
    )

    class Meta:
        model = City
        fields = '__all__'
