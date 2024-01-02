from __future__ import annotations

from django.db import models


class Appeal(models.Model):
    id = models.AutoField(primary_key=True)
    is_complete = models.BooleanField("Завершено", default=False)
    email = models.EmailField(max_length=120)
    name = models.CharField(default="")
    age = models.IntegerField(null=False)
    info = models.TextField(default="")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return f" Appeal: {self.email} {self.name}"
