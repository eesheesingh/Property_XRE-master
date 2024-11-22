# Generated by Django 5.0.2 on 2024-07-24 09:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('properties', '0007_alter_floor_floor_plan'),
    ]

    operations = [
        migrations.AlterField(
            model_name='properties',
            name='zone',
            field=models.CharField(choices=[('North', 'North'), ('South', 'South'), ('East', 'East'), ('West', 'West'), ('Central', 'Central'), ('North-East', 'North-East'), ('North-West', 'North-West'), ('South-East', 'South-East'), ('South-West', 'South-West'), ('Other', 'Other')], max_length=100),
        ),
    ]
