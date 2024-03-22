# Generated by Django 5.0.2 on 2024-03-22 08:52

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0023_experience_entreprise'),
    ]

    operations = [
        migrations.CreateModel(
            name='Certification',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Nom_Certificat', models.CharField(default='Nom de Certification', max_length=100)),
                ('date_obtention', models.DateField(auto_now_add=True, null=True)),
                ('picture', models.ImageField(blank=True, default='profile_pictures/jobs.png', upload_to='Certificates_images/')),
                ('description', models.TextField(blank=True, null=True)),
                ('utilisateur', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.utilisateur')),
            ],
        ),
    ]
