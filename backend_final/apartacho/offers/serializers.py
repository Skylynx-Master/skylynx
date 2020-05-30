"""Offers serializers."""

# Django REST Framework
from rest_framework import serializers

# Models
from apartacho.offers.models import Offer

class ChoicesField(serializers.Field):
    def __init__(self, choices, **kwargs):
        self._choices = choices
        super(ChoicesField, self).__init__(**kwargs)

    def to_representation(self, obj):
        return self._choices[obj]

    def to_internal_value(self, data):
        return getattr(self._choices, data)


class OfferSerializer(serializers.ModelSerializer):
    """Offers serializers."""

    offer_description = serializers.CharField(max_length=120)

    class Meta:
        model = Offer
        fields = '__all__'
