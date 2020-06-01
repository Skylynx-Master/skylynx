from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path, re_path
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken.views import obtain_auth_token
from apartacho.countries.views import CountryViewSet
from apartacho.addresses.views import AddressViewSet
from apartacho.properties.views import PropertyViewSet
from apartacho.cities.views import CitiesViewSet
from apartacho.users.views import UserViewSet
from apartacho.publications.views import PublicationViewSet
from apartacho.favorites.views import FavoriteViewSet
from apartacho.offers.views import OfferViewSet
from apartacho.trackings.views import TrackingViewSet
from apartacho.images.views import ImagesViewSet


router = DefaultRouter()
router.register('addresses', AddressViewSet, basename='address')
router.register('countries', CountryViewSet, basename='country')
router.register('cities', CitiesViewSet, basename='city')
router.register('properties', PropertyViewSet, basename='property')
router.register('publications', PublicationViewSet, basename='publication')
router.register('favorites', FavoriteViewSet, basename='favorite')
router.register('users', UserViewSet, basename='user')
router.register('offers', OfferViewSet, basename='offer')
router.register('trackings', TrackingViewSet, basename='tracking')
router.register('images', ImagesViewSet, basename='image')

urlpatterns = [
    # Django Admin, use {% url 'admin:index' %}
    path(settings.ADMIN_URL, admin.site.urls),
    # User management
    # path("accounts/", include("allauth.urls")),
    # Your stuff: custom urls includes go here
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# API URLS
urlpatterns += [
    # API base url
    re_path('api/v1/', include(router.urls)),
    # DRF auth token
    # path("auth-token/", obtain_auth_token),
]
