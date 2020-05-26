""" Favorite model """

#Django

from django.db import models


#Utilities
from lahause.utils.models import LaHauseModel



class Favorite(LaHauseModel):
    """Favorite model.

    A country is the table that holds the relationship with
    a user and an address.
    """

    name_property_favorite = models.CharField(
        verbose_name='name_property_favorite',
        max_length=50
    )

    user_property = models.CharField(
        verbose_name='user_property',
        max_length=50,
        blank=True,
        null=True
    )

    def __str__(self):
        """Return country name."""
        return self.name_property_favorite
