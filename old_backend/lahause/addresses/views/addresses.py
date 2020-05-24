"""Addresses view """

# Django REST Framework
from rest_framework import mixins, status, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

# Serializers
from lahause.addresses.Serializers import AddressModelSerializer

# Models
from lahause.addresses.models import Address

class AddressViewSet(viewsets.ModelViewSet):
    """Addresses view Set"""

    queryset = Address.objects.all()
    serializer_class =AddressModelSerializer