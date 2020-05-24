"""Countries views."""

# Django REST Framework
from rest_framework import generics

# Permissions
from rest_framework.decorators import permission_classes
from rest_framework.permissions import AllowAny

# Serializers
from apartacho.countries.serializers import CountrySerializer

# Models
from apartacho.countries.models import Country


@permission_classes([AllowAny])
class CountryAPIView(generics.ListCreateAPIView, generics.UpdateAPIView):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer
