"""Publications views."""

# Django REST Framework
from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import (CreateModelMixin,
                                   ListModelMixin,
                                   RetrieveModelMixin,
                                   UpdateModelMixin)

# Serializers
from apartacho.publications.serializers import PublicationSerializer

# Filters
from rest_framework.filters import SearchFilter, OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend

# Models
from apartacho.publications.models import Publication


class PublicationViewSet(GenericViewSet,
                         CreateModelMixin,
                         RetrieveModelMixin,
                         UpdateModelMixin,
                         ListModelMixin):
    """Publications views."""

    queryset = Publication.objects.filter(is_active=True)
    serializer_class = PublicationSerializer

    # Filters
    filter_backends = (SearchFilter, OrderingFilter, DjangoFilterBackend)
    search_fields = 'description'
    filter_fields = ('is_published', 'property')

