"""Countries serializers."""

# Django REST Framework
from rest_framework import serializers

# Models
from apartacho.countries.models import Country


class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = '__all__'
