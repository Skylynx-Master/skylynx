"""Favorite views."""

# Django REST Framework
from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import (CreateModelMixin,
                                   ListModelMixin,
                                   RetrieveModelMixin,
                                   UpdateModelMixin)

# Serializers
from apartacho.favorites.serializers import FavoriteSerializer

# Models
from apartacho.favorites.models import Favorite


class FavoriteViewSet(GenericViewSet,
                      CreateModelMixin,
                      RetrieveModelMixin,
                      UpdateModelMixin,
                      ListModelMixin):
    """Favorite views."""

    queryset = Favorite.objects.filter(is_favorite=True)
    serializer_class = FavoriteSerializer
