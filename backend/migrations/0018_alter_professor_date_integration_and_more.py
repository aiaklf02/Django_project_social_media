# Generated by Django 5.0.2 on 2024-03-22 07:27

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0017_alter_etudiant_date_inscription'),
    ]

    operations = [
        migrations.AlterField(
            model_name='professor',
            name='date_integration',
            field=models.DateField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='professor',
            name='poste_administratif',
            field=models.DateField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
