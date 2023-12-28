from __future__ import annotations

from django.db import models


class Appeal(models.Model):
    id = models.AutoField(primary_key=True)
    is_complete = models.BooleanField("Завершено", default=False)
    email = models.EmailField(max_length=100)
    username = models.CharField("Имя", max_length=500)
    age = models.IntegerField()
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return f" Appeal: {self.id} {self.is_complete} {self.email} {self.username} {self.age} {self.description} {self.created_at} {self.updated_at}"


class Report(models.Model):
    id = models.AutoField(primary_key=True)
    is_complete = models.BooleanField("Завершено", default=False)
    description = models.TextField()
    email = models.EmailField(max_length=100)
    photo = models.ImageField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return f" Report: {self.id} {self.is_complete} {self.description} {self.email} {self.photo} {self.created_at} {self.updated_at}"


class Location(models.Model):
    id = models.AutoField(primary_key=True)
    latitude = models.FloatField()
    longitude = models.FloatField()
    report = models.ForeignKey(Report, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f"Location: {self.id} {self.latitude} {self.longitude} {self.report}"
