from __future__ import annotations

from .base import *
from .dev import *

live = False
try:
    from .dev import *
except ImportError:
    live = True

if live:
    from .prod import *
