# Generated by Django 5.0.2 on 2024-08-30 10:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('properties', '0013_remove_owner_cam_charges_remove_owner_vacating_area_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='properties',
            old_name='zone',
            new_name='sub_location',
        ),
    ]