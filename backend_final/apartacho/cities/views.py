"""Cities views."""

# Django REST Framework
from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import (CreateModelMixin,
                                   ListModelMixin,
                                   RetrieveModelMixin,
                                   UpdateModelMixin)

# Serializers
from apartacho.cities.serializers import CitiesSerializer

# Models
from apartacho.cities.models import City


class CitiesViewSet(GenericViewSet,
                    CreateModelMixin,
                    RetrieveModelMixin,
                    UpdateModelMixin,
                    ListModelMixin):
    """Cities views."""

    queryset = City.objects.filter(is_active=True)
    serializer_class = CitiesSerializer
