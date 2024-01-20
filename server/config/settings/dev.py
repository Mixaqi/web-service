from __future__ import annotations

#Override base.py settings
# from config.settings.base import *
import os

DEBUG=True

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.posgresql",
        "NAME": os.environ.get("DB_NAME"),
        "PORT": os.environ.get("DB_PORT"),
        "HOST": os.environ.get("DB_HOST"),
        "USER": os.environ.get("DB_USER"),
        "PASSWORD": os.environ.get("DB_PASSWORD"),
    },
}

# ALLOWED_HOSTS=["*"]
