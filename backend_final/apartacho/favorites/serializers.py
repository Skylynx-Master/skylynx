"""favorites serializers."""

# Django REST Framework
from rest_framework import serializers

# Models
from apartacho.favorites.models import Favorite


class FavoriteSerializer(serializers.ModelSerializer):
    """favorites serializers."""

    is_favorite = serializers.BooleanField(default=True)

    class Meta:
        model = Favorite
        fields = '__all__'
