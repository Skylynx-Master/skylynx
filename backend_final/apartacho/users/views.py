"""Users views."""

# Django REST Framework
from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import (ListModelMixin,
                                   RetrieveModelMixin,
                                   UpdateModelMixin)
from rest_framework import status
from rest_framework.decorators import action
from rest_framework.response import Response

# Serializers
from apartacho.users.serializers import (
    AccountVerificationSerializer,
    UserLoginSerializer,
    UserModelSerializer,
    UserSignUpSerializer
)

# Models
from apartacho.users.models import User


class UserViewSet(ListModelMixin,
                  RetrieveModelMixin,
                  UpdateModelMixin,
                  GenericViewSet):
    """User view set.

    Handle sign up, login and account verification.
    """

    queryset = User.objects.filter(is_active=True)
    serializer_class = UserModelSerializer
    lookup_field = 'email'

    @action(detail=False, methods=['post'])
    def login(self, request):
        """User sign in."""
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user, token = serializer.save()
        data = {
            'user': UserModelSerializer(user).data,
            'access_token': token
        }
        return Response(data, status=status.HTTP_200_OK)

    @action(detail=False, methods=['post'])
    def signup(self, request):
        """User sign up."""
        serializer = UserSignUpSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        data = UserModelSerializer(user).data
        return Response(data, status=status.HTTP_201_CREATED)

    @action(detail=False, methods=['post'])
    def verify(self, request):
        """Account verification."""
        serializer = AccountVerificationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        data = {'message': 'Congratulation, now go find to dream!'}
        return Response(data, status=status.HTTP_200_OK)
