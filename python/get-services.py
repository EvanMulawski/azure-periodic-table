import json

dict = json.load(open('merged.json'))

for item in dict:
    items = item['items']
    for service in items:
        print(service['name'])