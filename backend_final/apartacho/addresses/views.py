"""Addresses views."""

# Django REST Framework
from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import (CreateModelMixin,
                                   ListModelMixin,
                                   RetrieveModelMixin,
                                   UpdateModelMixin)

# Serializers
from apartacho.addresses.serializers import AddressSerializer

# Models
from apartacho.addresses.models import Address


class AddressViewSet(GenericViewSet,
                     CreateModelMixin,
                     RetrieveModelMixin,
                     UpdateModelMixin,
                     ListModelMixin):
    """Addresses views."""

    queryset = Address.objects.filter(is_active=True)
    serializer_class = AddressSerializer
