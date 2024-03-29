from __future__ import annotations

import os

from config.settings.base import *

DEBUG=False

DATABASES = {
    "default" :{
        "ENGINE": "django.db.backends.postgresql",
        "NAME": os.environ.get("DB_NAME"),
        "PORT": os.environ.get("DB_PORT"),
        "HOST": os.environ.get("DB_HOST"),
        "USER": os.environ.get("DB_USER"),
        "PASSWORD": os.environ.get("DB_PASSWORD"),
    },
}



