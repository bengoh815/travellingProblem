from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from travelApp.models import Alias, Users

from travelApp.serializers import AliasSerializer, UsersSerializer
# Create your views here.

@csrf_exempt
def aliasApi(req, id=0):
    if req.method == 'GET':
        alias = Alias.objects.all()
        alias_serializer = AliasSerializer(alias, many=True)
        return JsonResponse(alias_serializer.data, safe=False)
    elif req.method == 'POST':
        alias_data = JSONParser().parse(req)
        alias_serializer = AliasSerializer(data=alias_data)
        if alias_serializer.is_valid():
            alias_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    elif req.method == 'PUT':
        alias_data = JSONParser().parse(req)
        alias = Alias.objects.get(AliasId=alias_data['AliasId'])

        alias_serializer = AliasSerializer(alias, data=alias_data)
        if alias_serializer.is_valid():
            alias_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    elif req.method == 'DELETE':
        alias = Alias.objects.get(AliasId=id)
        alias.delete()
        return JsonResponse("Deleted Successfully", safe=False)
    

@csrf_exempt
def usersApi(req, id=0):
    if req.method == 'GET':
        users = Users.objects.all()
        users_serializer = UsersSerializer(users, many=True)
        return JsonResponse(users_serializer.data, safe=False)
    elif req.method == 'POST':
        users_data = JSONParser().parse(req)
        users_serializer = UsersSerializer(data=users_data)
        if users_serializer.is_valid():
            users_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    elif req.method == 'PUT':
        users_data = JSONParser().parse(req)
        users = Users.objects.get(UsersId=users_data['UsersId'])

        users_serializer = UsersSerializer(users, data=users_data)
        if users_serializer.is_valid():
            users_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    elif req.method == 'DELETE':
        users = Users.objects.get(UsersId=id)
        users.delete()
        return JsonResponse("Deleted Successfully", safe=False)