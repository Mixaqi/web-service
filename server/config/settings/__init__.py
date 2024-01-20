from __future__ import annotations

from glob import glob
from os import environ

from split_settings.tools import include, optional

ENV=environ.get("DJANGO_ENV") or "dev"

base_settings = [
    *glob("settings/*.py"),
    "{0}.py".format(ENV),
]

include(*base_settings)
