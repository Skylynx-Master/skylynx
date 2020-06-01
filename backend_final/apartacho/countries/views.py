"""Countries views."""

# Django REST Framework
from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import (CreateModelMixin,
                                   ListModelMixin,
                                   RetrieveModelMixin,
                                   UpdateModelMixin)

# Serializers
from apartacho.countries.serializers import CountrySerializer

# Models
from apartacho.countries.models import Country


class CountryViewSet(GenericViewSet,
                     CreateModelMixin,
                     RetrieveModelMixin,
                     UpdateModelMixin,
                     ListModelMixin):
    """Countries views."""

    queryset = Country.objects.filter(is_active=True)
    serializer_class = CountrySerializer
