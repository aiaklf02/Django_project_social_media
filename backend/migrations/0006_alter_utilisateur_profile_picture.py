# Generated by Django 5.0.2 on 2024-03-17 13:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0005_alter_utilisateur_profile_picture'),
    ]

    operations = [
        migrations.AlterField(
            model_name='utilisateur',
            name='profile_picture',
            field=models.ImageField(blank=True, upload_to='profile_pictures/'),
        ),
    ]
