"""Offers serializers."""

# Django REST Framework
from rest_framework import serializers

# Models
from apartacho.offers.models import Offer, OFFERS_TYPES


class OfferSerializer(serializers.ModelSerializer):
    """Offers serializers."""

    offer_type = serializers.ChoiceField(
        required=True,
        choices=OFFERS_TYPES,
    )

    offer_description = serializers.CharField(
        required=True,
        max_length=150,
    )

    class Meta:
        model = Offer
        fields = '__all__'
