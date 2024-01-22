from __future__ import annotations

import logging
import time

from django.core.management.base import BaseCommand
from django.db import connections
from django.db.utils import OperationalError
from psycopg2 import OperationalError as Psycopg20pError

logger = logging.getLogger(__name__)


class Command(BaseCommand):
    def handle(self, *args, **options) -> None:
        self.stdout.write("Waiting for database...")
        max_retries = 30
        retries = 0
        db_up = False

        while not db_up and retries < max_retries:
            try:
                connections["default"].ensure_connection()
                db_up = True
            except (Psycopg20pError, OperationalError):
                retries += 1
                logger.warning(f"Database unavailable, waiting 1 second... Retry {retries}/{max_retries}")
                time.sleep(1)

        if db_up:
            self.stdout.write(self.style.SUCCESS("Database ready"))
        else:
            self.stdout.write(self.style.ERROR(f"Failed to connect to the database after {max_retries} retries"))
