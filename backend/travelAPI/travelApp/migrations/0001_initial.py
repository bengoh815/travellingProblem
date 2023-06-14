# Generated by Django 4.2.1 on 2023-06-14 18:08

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Alias',
            fields=[
                ('AliasId', models.AutoField(primary_key=True, serialize=False)),
                ('PhoneNumber', models.CharField(max_length=32, unique=True)),
                ('Name', models.CharField(max_length=32)),
            ],
        ),
        migrations.CreateModel(
            name='Users',
            fields=[
                ('UserId', models.AutoField(primary_key=True, serialize=False)),
                ('PhoneNumber', models.CharField(max_length=32, unique=True)),
                ('Name', models.CharField(max_length=32)),
                ('Address', models.CharField(max_length=64)),
                ('Date', models.DateField(auto_now_add=True)),
                ('Longitude', models.FloatField(max_length=8)),
                ('Latitude', models.FloatField(max_length=8)),
            ],
        ),
    ]
