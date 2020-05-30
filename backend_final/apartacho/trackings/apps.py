from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class TrackingsConfig(AppConfig):
    name = 'apartacho.trackings'
    verbose_name = _("Trackings")
