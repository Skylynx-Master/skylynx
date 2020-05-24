"""Addresses views."""

# Django REST Framework
from rest_framework import generics

# Permissions
from rest_framework.decorators import permission_classes
from rest_framework.permissions import AllowAny

# Serializers
from apartacho.addresses.serializers import AddressSerializer

# Models
from apartacho.addresses.models import Address


@permission_classes([AllowAny])
class AddressAPIView(generics.ListCreateAPIView, generics.UpdateAPIView):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer

