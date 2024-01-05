from __future__ import annotations

from django.db import models


class Report(models.Model):
    id = models.AutoField(primary_key=True)
    is_complete = models.BooleanField("Завершено", default=False)
    text_data = models.TextField()
    markers = models.JSONField(default=list)
    email = models.EmailField(max_length=100)
    photo = models.ImageField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return f" Report: {self.is_complete} {self.text_data} {self.email} {self.photo} {self.created_at} {self.updated_at}"

