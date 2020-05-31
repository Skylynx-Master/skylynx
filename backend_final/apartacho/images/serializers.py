"""Images serializers."""

# Django REST Framework
from rest_framework import serializers

# Models
from apartacho.images.models import Image


class ImagesSerializer(serializers.ModelSerializer):
    """Images serializers."""

    url = serializers.ImageField(
        required=True,
    )

    class Meta:
        model = Image
        fields = '__all__'
