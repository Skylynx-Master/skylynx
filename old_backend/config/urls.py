"""Main URLs module."""

from django.conf import settings
from django.urls import path, include
from django.conf.urls.static import static
from django.contrib import admin
from rest_framework import routers
from lahause.users.views import users
from lahause.addresses.views import addresses

router = routers.DefaultRouter()
router.register(r'users', users.UserViewSet, basename='users'),
router.register(r'addresses', addresses.AddressViewSet, basename='addresses')

urlpatterns = [
    # Django Admin
    path(settings.ADMIN_URL, admin.site.urls),
    path('api/v1/', include(router.urls)),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
