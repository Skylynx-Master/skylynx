"""Offers views."""

# Django REST Framework
from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import (CreateModelMixin,
                                   ListModelMixin,
                                   RetrieveModelMixin,
                                   UpdateModelMixin)

# Serializers
from apartacho.offers.serializers import OfferSerializer

# Models
from apartacho.offers.models import Offer


class OfferViewSet(GenericViewSet,
                   CreateModelMixin,
                   RetrieveModelMixin,
                   UpdateModelMixin,
                   ListModelMixin):
    """Offers views."""

    queryset = Offer.objects.filter(is_active=True)
    serializer_class = OfferSerializer
