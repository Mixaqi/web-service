from __future__ import annotations

from django.db import models


class Appeal(models.Model):
    id = models.AutoField(primary_key=True)
    is_complete = models.BooleanField("Завершено", default=False)
    email = models.EmailField(max_length=100)
    age = models.IntegerField()
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return f" Appeal: {self.id} {self.is_complete} {self.email}{ self.age}{self.description} {self.created_at} {self.updated_at}"