"""User models admin."""

# Django
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

# Models
from lahause.users.models import User


class CustomUserAdmin(UserAdmin):
    """User model admin."""

    list_display = ('email', 'username', 'first_name', 'last_name', 'is_staff', 'is_superuser', 'is_real_estate')
    list_filter = ('is_verified', 'is_staff', 'created', 'modified')


admin.site.register(User, CustomUserAdmin)
