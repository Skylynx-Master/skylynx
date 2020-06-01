from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class CitiesConfig(AppConfig):
    name = 'apartacho.cities'
    verbose_name = _("Cities")
