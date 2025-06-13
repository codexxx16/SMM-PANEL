import requests

API_URL = "https://smmprovider.com/api"
API_KEY = "your_api_key"

def place_order(service, quantity):
    response = requests.post(API_URL, json={
        "key": API_KEY,
        "service": service,
        "quantity": quantity
    })
    return response.json()

print(place_order("Instagram Followers", 100))
