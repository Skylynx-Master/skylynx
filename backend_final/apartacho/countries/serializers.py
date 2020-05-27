"""Countries serializers."""

# Django REST Framework
from rest_framework import serializers

# Models
from apartacho.countries.models import Country


class CountrySerializer(serializers.ModelSerializer):
    """Countries serializers."""

    name = serializers.CharField(
        required=True,
        max_length=50,
        trim_whitespace=True
    )

    class Meta:
        model = Country
        fields = '__all__'
