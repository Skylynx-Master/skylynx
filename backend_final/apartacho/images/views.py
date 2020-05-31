"""Images views."""

# Django REST Framework
from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import (CreateModelMixin,
                                   ListModelMixin,
                                   RetrieveModelMixin,
                                   UpdateModelMixin,
                                   DestroyModelMixin)

# Serializers
from apartacho.images.serializers import ImagesSerializer

# Models
from apartacho.images.models import Image


class ImagesViewSet(GenericViewSet,
                    CreateModelMixin,
                    RetrieveModelMixin,
                    UpdateModelMixin,
                    ListModelMixin,
                    DestroyModelMixin):
    """Images views."""

    queryset = Image.objects.all()
    serializer_class = ImagesSerializer
