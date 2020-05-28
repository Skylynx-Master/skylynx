"""Countries serializers."""

# Django REST Framework
from rest_framework import serializers
from rest_framework.validators import UniqueValidator

# Models
from apartacho.countries.models import Country


class CountrySerializer(serializers.ModelSerializer):
    """Countries serializers."""

    name = serializers.CharField(
        required=True,
        max_length=50,
        trim_whitespace=True,
        validators=[UniqueValidator(queryset=Country.objects.all())]
    )

    iso_2 = serializers.CharField(
        max_length=2,
        validators=[UniqueValidator(queryset=Country.objects.all())]
    )

    iso_3 = serializers.CharField(
        max_length=3,
        validators=[UniqueValidator(queryset=Country.objects.all())]
    )

    phone_code = serializers.CharField(
        max_length=3,
        validators=[UniqueValidator(queryset=Country.objects.all())]
    )

    class Meta:
        model = Country
        fields = '__all__'
