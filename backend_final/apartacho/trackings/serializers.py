"""Trackings serializers."""

# Django REST Framework
from rest_framework import serializers

# Models
from apartacho.trackings.models import Tracking


class TrackingSerializer(serializers.ModelSerializer):
    """Trackings serializers."""

    class Meta:
        model = Tracking
        fields = '__all__'
