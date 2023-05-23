from rest_framework import serializers
from travelApp.models import Alias, Users

class AliasSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Alias
        fields = ('AliasId', 'PhoneNumber', 'Name')

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ('UsersId', 'PhoneNumber', 'Name', 'Address', 'Date', 'Longitude', 'Latitude')