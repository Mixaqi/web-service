# Generated by Django 5.0.1 on 2024-01-05 14:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('report', '0002_report_latitude_report_longitude_delete_location'),
    ]

    operations = [
        migrations.RenameField(
            model_name='report',
            old_name='description',
            new_name='text_data',
        ),
        migrations.RemoveField(
            model_name='report',
            name='latitude',
        ),
        migrations.RemoveField(
            model_name='report',
            name='longitude',
        ),
        migrations.AddField(
            model_name='report',
            name='markers',
            field=models.JSONField(default=list),
        ),
    ]
