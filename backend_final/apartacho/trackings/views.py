"""Tracking views."""

# Django REST Framework
from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import (CreateModelMixin,
                                   ListModelMixin,
                                   RetrieveModelMixin,
                                   UpdateModelMixin)

# Serializers
from apartacho.trackings.serializers import TrackingSerializer

# Models
from apartacho.trackings.models import Tracking


class TrackingViewSet(GenericViewSet,
                      CreateModelMixin,
                      RetrieveModelMixin,
                      UpdateModelMixin,
                      ListModelMixin):
    """Tracking views."""

    queryset = Tracking.objects.filter(is_active=True)
    serializer_class = TrackingSerializer
