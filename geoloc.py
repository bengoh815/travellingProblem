from googlemaps import Client as GoogleMaps
from dotenv import dotenv_values

config = dotenv_values("env/.env")
GCP_GC_API_KEY = config['GCP_GC_API_KEY']

gmaps = GoogleMaps(GCP_GC_API_KEY)
address = '344 West Dayton Street'
res = gmaps.geocode(address)
print(res)