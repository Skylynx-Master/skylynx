"""Property views."""

# Django REST Framework
from rest_framework import generics

# Filters
from rest_framework.filters import SearchFilter, OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend

# Permissions
from rest_framework.decorators import permission_classes
from rest_framework.permissions import AllowAny

# Serializers
from apartacho.properties.serializers import PropertyModelSerializer

# Models
from apartacho.properties.models import Property


@permission_classes([AllowAny])
class PropertyViewSet(generics.ListCreateAPIView, generics.UpdateAPIView):
    """Property view set."""
    queryset = Property.objects.filter(is_active=True)
    serializer_class = PropertyModelSerializer

    # Filters
    filter_backends = (SearchFilter, OrderingFilter, DjangoFilterBackend)
    search_fields = ('price', 'overview')
    ordering_fields = ('price',
                       'area',
                       'construction_year',
                       'price_mts',
                       'created',
                       'room_count')
    ordering = ('-price',
                '-area',
                '-construction_year',
                '-price_mts',
                '-created',
                '-room_count')
