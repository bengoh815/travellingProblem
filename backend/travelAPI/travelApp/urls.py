from django.urls import re_path as url
from travelApp import views

urlpatterns = [
    url(r'^alias$', views.aliasApi),
    url(r'^alias/([0-9+])$', views.aliasApi)
]