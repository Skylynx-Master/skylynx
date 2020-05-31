"""Offers serializers."""

# Django REST Framework
from rest_framework import serializers

# Models
from apartacho.offers.models import Offer, OFFERS_TYPES


class OfferSerializer(serializers.ModelSerializer):
    """Offers serializers."""

    offer_description = serializers.CharField(max_length=120)

    class Meta:
        model = Offer
        fields = '__all__'
