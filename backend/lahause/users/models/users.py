"""User model."""

# Django
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator

# Utilities
from lahause.utils.models import LaHauseModel


class User(LaHauseModel, AbstractUser):
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

    username = models.CharField(
        verbose_name='username',
        max_length=50,
        blank=True,
        null=True
    )

    phone_regex = RegexValidator(
        regex=r'\+?1?\d{9,15}$',
        message="Phone number must be entered in the format: +9999999999. Up to 15 digits allowed."
    )

    phone_number = models.CharField(validators=[phone_regex], max_length=15, blank=True)

    is_verified = models.BooleanField(
        verbose_name='verified',
        default=False,
        help_text='Set to true when the user have verified its email address.'
    )

    date_of_birth = models.DateField(
        verbose_name='date of birth',
        blank=True,
        null=True
    )

    avatar = models.ImageField(
        verbose_name='avatar',
        upload_to='users/avatars/',
        blank=True,
        null=True
    )

    is_real_estate = models.BooleanField(
        verbose_name='real estate',
        default=False,
        help_text='Set to true when the user is real estate'
    )

    country = models.ForeignKey(
        'countries.Country',
        on_delete=models.SET_NULL,
        null=True,
    )

    city = models.ForeignKey(
        'cities.City',
        on_delete=models.SET_NULL,
        null=True,
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
