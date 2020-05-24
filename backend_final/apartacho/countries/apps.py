from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class CountriesConfig(AppConfig):
    name = 'apartacho.countries'
    verbose_name = _("Countries")
