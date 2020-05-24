from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path
from rest_framework.authtoken.views import obtain_auth_token
from apartacho.countries.views import CountryAPIView
from apartacho.addresses.views import AddressAPIView

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
    path("api/v1/", include("config.api_router")),
    # DRF auth token
    # path("auth-token/", obtain_auth_token),
    path(r'api/v1/countries/', CountryAPIView.as_view(), name='country-list'),
    path(r'api/v1/addresses/', AddressAPIView.as_view(), name='address-list')
]
