# Generated by Django 5.0.2 on 2024-03-22 07:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0019_alter_professor_poste_administratif'),
    ]

    operations = [
        migrations.AlterField(
            model_name='professor',
            name='date_integration',
            field=models.DateField(null=True),
        ),
    ]
