from __future__ import annotations

from django.db import models


class Appeal(models.Model):
    id = models.AutoField(primary_key=True)
    is_complete = models.BooleanField("Завершено", default=False)
    email = models.EmailField(max_length=100)
    username = models.CharField("Имя", max_length=500)
    age = models.IntegerField()
    description = models.TextField()

    def __str__(self) -> str:
        return f"Report {self.id} - {self.username}"

class Report(models.Model):
    id = models.AutoField(primary_key=True)
    is_complete = models.BooleanField("Завершено", default=False)
    #geodata
    description = models.TextField()