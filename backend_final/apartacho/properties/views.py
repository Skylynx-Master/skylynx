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
