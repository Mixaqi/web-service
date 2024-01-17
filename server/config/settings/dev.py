from __future__ import annotations

from ..settings.common import *

# print(sys.path)
DEBUG = True
SECRET_KEY="&tm8k8$esp&tfr8(v*m75hz-8nh624n2bks2k6+1v+4^m1usr_"
CORS_ORIGIN_WHITELIST = (
    "http://localhost:3000",
    "http://127.0.0.1:8000",
)

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": os.environ.get("DB_NAME"),
        "USER": os.environ.get("DB_USER"),
        "PASSWORD": os.environ.get("DB_PASSWORD"),
        "HOST": os.environ.get("DB_HOST"),
        "PORT": os.environ.get("DB_PORT"),
    },
}
ALLOWED_HOSTS = ["http://localhost:3000", "http://127.0.0.1:8000"]
