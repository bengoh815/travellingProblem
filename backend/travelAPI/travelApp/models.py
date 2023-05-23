from django.db import models

# Create your models here.
class Alias(models.Model):
    AliasId = models.AutoField(primary_key=True)
    PhoneNumber = models.CharField(max_length=32, unique=True)
    Name = models.CharField(max_length=32)

class Users(models.Model):
    UsersId = models.AutoField(primary_key=True)
    PhoneNumber = models.CharField(max_length=32, unique=True)
    Name = models.CharField(max_length=32)
    Address = models.CharField(max_length=64)
    Date = models.DateField(auto_now_add=True)
    Longitude = models.FloatField(max_length=8)
    Latitude = models.FloatField(max_length=8)