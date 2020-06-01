"""Property views."""

# Django REST Framework
from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import (CreateModelMixin,
                                   ListModelMixin,
                                   RetrieveModelMixin,
                                   UpdateModelMixin)

# Filters
from rest_framework.filters import SearchFilter, OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend

# Serializers
from apartacho.properties.serializers import PropertyModelSerializer

# Models
from apartacho.properties.models import Property


class PropertyViewSet(GenericViewSet,
                      CreateModelMixin,
                      RetrieveModelMixin,
                      UpdateModelMixin,
                      ListModelMixin):
    """Property view set."""

    queryset = Property.objects.filter(is_active=True)
    serializer_class = PropertyModelSerializer

    # Filters
    filter_backends = (SearchFilter, OrderingFilter, DjangoFilterBackend)
    search_fields = ('price', 'overview')
    ordering_fields = (
        'price',
        'area',
        'price_mts',
        'created',
        'bathroom_count',
        'room_count'
    )
    ordering = (
        '-price',
        '-area',
        '-price_mts',
        '-created',
        '-bathroom_count',
        '-room_count')
    filter_fields = (
        'has_furnished',
        'has_heated',
        'has_pool',
        'has_parking',
        'has_security',
        'has_warehouse',
        'has_elevator',
        'room_count',
        'bathroom_count',
        'offer_type',
        'service_type',
    )
