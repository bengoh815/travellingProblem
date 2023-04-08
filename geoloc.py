from geopy.geocoders import Nominatim

geolocator = Nominatim()
location = geolocator.geocode("344 West Dayton Street Madison")
print(location)