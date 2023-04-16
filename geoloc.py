from googlemaps import Client
from dotenv import dotenv_values

def strToCoord(address):
    config = dotenv_values("env/.env")
    GCP_GC_API_KEY = config['GCP_GC_API_KEY']
    gmaps = Client(GCP_GC_API_KEY)
    res = gmaps.geocode(address)
    if (len(res) != 1):
        raise Exception("This address has 0 or more than 1 result results")
    else:
        lng = res[0]['geometry']['location']['lng']
        lat = res[0]['geometry']['location']['lat']
        lng = round(lng, 5)
        lat = round(lat, 5)
        return (lng, lat)
