# Generated by Django 5.0 on 2024-01-05 12:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('contacts', '0004_rename_info_appeal_text_data'),
    ]

    operations = [
        migrations.RenameField(
            model_name='appeal',
            old_name='text_data',
            new_name='info',
        ),
    ]
