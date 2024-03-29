# Generated by Django 5.0.1 on 2024-01-05 21:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Appeal',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('is_complete', models.BooleanField(default=False, verbose_name='Завершено')),
                ('email', models.EmailField(max_length=120)),
                ('name', models.CharField(default='')),
                ('age', models.IntegerField()),
                ('info', models.TextField(default='')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
