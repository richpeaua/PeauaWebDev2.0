# Generated by Django 2.2.1 on 2019-06-01 03:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_auto_20190601_0309'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='image_path',
            field=models.CharField(max_length=120),
        ),
        migrations.AlterField(
            model_name='project',
            name='page_path',
            field=models.CharField(max_length=120),
        ),
    ]
