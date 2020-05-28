"""favorites serializers."""

# Django REST Framework
from rest_framework import serializers

# Models
from apartacho.favorites.models import Favorite


class FavoriteSerializer(serializers.ModelSerializer):
    """favorites serializers."""

    is_favorite = serializers.BooleanField(
        verbose_name='favorite',
        default=True,
        help_text='Set to true when the property is favorite'
    )

    class Meta:
        model = Favorite
        fields = '__all__'
