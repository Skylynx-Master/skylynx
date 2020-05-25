"""User model."""
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse
from django.core.validators import RegexValidator

# Utilities
from apartacho.utils.models import ApartachoModel
from apartacho.countries.models import Country
from apartacho.cities.models import City


class User(ApartachoModel, AbstractUser):
    """User model.
    Extend from Django's Abstract User, change the username field
    to email and add some extra fields.
    """

    email = models.EmailField(
        verbose_name='email address',
        max_length=50,
        unique=True,
        error_messages={
            'unique': 'A user with that email already exists.'
        }
    )

    phone_regex = RegexValidator(
        regex=r'\+?1?\d{9,15}$',
        message="Phone number must be entered in the format: +9999999999. Up to 15 digits allowed."
    )

    phone_number = models.CharField(
        validators=[phone_regex],
        max_length=15,
        blank=True
    )

    is_verified = models.BooleanField(
        verbose_name='verified',
        default=False,
        help_text='Set to true when the user have verified its email address.'
    )

    date_of_birth = models.DateField(
        verbose_name='date of birth',
        blank=True,
        null=True,
        help_text='Set date of birth'
    )

    avatar = models.ImageField(
        verbose_name='avatar',
        upload_to='users/avatars/',
        blank=True,
        null=True,
        help_text='Set image to avatar'
    )

    is_real_estate = models.BooleanField(
        verbose_name='real estate',
        default=False,
        help_text='Set to true when the user is real estate'
    )

    country = models.ForeignKey(
        Country,
        on_delete=models.SET_NULL,
        null=True,
        help_text='Set relationship with country'
    )

    city = models.ForeignKey(
        City,
        on_delete=models.SET_NULL,
        null=True,
        help_text='Set relationship with city'
    )

    name = models.CharField(
        verbose_name='name organization',
        blank=True,
        max_length=255,
        help_text='Set name the organization'
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"username": self.username})

    def __str__(self):
        """Return username."""
        return self.username
