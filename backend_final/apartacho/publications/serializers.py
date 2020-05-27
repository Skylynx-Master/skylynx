"""Publications serializers."""

# Django REST Framework
from rest_framework import serializers

# Models
from apartacho.publications.models import Publication


class PublicationSerializer(serializers.ModelSerializer):
    """Publications serializers."""

    description = serializers.CharField(
        required=True,
        max_length=150,
        trim_whitespace=True
    )

    is_published = serializers.BooleanField(default=False)

    class Meta:
        model = Publication
        fields = '__all__'
