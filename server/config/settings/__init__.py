from __future__ import annotations

import os

from split_settings.tools import include

include("base.py")

if os.environ.get("DJANGO_ENV") == "dev":
    include("dev.py")
elif os.environ.get("DJANGO_ENV") == "prod":
    include("prod.py")
