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