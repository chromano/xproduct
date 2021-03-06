# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-10-11 13:41
from __future__ import unicode_literals

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CrossProductResult',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('vector1', django.contrib.postgres.fields.ArrayField(base_field=models.IntegerField(), size=3)),
                ('vector2', django.contrib.postgres.fields.ArrayField(base_field=models.IntegerField(), size=3)),
                ('result', django.contrib.postgres.fields.ArrayField(base_field=models.IntegerField(), size=3)),
            ],
        ),
    ]
