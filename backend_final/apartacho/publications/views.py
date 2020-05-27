"""Publications views."""

# Django REST Framework
from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import (CreateModelMixin,
                                   ListModelMixin,
                                   RetrieveModelMixin,
                                   UpdateModelMixin)

# Serializers
from apartacho.publications.serializers import PublicationSerializer

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
