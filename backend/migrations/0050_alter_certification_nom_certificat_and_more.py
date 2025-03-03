# Generated by Django 5.0.3 on 2024-03-24 23:29

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0049_merge_20240324_0552'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AlterField(
            model_name='certification',
            name='Nom_Certificat',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='certification',
            name='date_obtention',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='certification',
            name='description',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='group',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='admin_groups', to=settings.AUTH_USER_MODEL),
        ),
        migrations.CreateModel(
            name='UserGroup',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_admin', models.BooleanField(default=False)),
                ('invitation_on', models.BooleanField(default=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('group', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.group')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.utilisateur')),
            ],
        ),
    ]
