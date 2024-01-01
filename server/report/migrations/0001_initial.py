# Generated by Django 5.0 on 2024-01-01 19:35

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Report",
            fields=[
                ("id", models.AutoField(primary_key=True, serialize=False)),
                (
                    "is_complete",
                    models.BooleanField(default=False, verbose_name="Завершено"),
                ),
                ("description", models.TextField()),
                ("email", models.EmailField(max_length=100)),
                ("photo", models.ImageField(blank=True, null=True, upload_to="")),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name="Location",
            fields=[
                ("id", models.AutoField(primary_key=True, serialize=False)),
                ("latitude", models.FloatField()),
                ("longitude", models.FloatField()),
                (
                    "report",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="report.report"
                    ),
                ),
            ],
        ),
    ]
