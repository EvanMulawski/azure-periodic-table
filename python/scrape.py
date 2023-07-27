import requests
from bs4 import BeautifulSoup
import json
import re

url = "https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/resource-name-rules"
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

tables = soup.find_all('table')

data = {}

for table in tables:
    service_name = table.find_previous('h2').text.strip()
    data[service_name] = []
    rows = table.find_all('tr')
    for row in rows[1:]:
        cols = row.find_all('td')
        entity = cols[0].text.strip()
        scope = cols[1].text.strip()
        length = cols[2].text.strip()
        valid_characters = cols[3].text.strip().replace('.', '. ').strip()
        data[service_name].append({
            'entity': entity,
            'scope': scope,
            'length': length,
            'valid_characters': valid_characters
        })

# Convert the service names into a valid format for TypeScript enum keys
def format_service_name(service_name):
    return re.sub(r'\W+', '', service_name).upper()

# Write json
with open('naming-restrictions.json', 'w') as f:
    json.dump(data, f, indent=4)

# Generate the TypeScript interfaces
ts_interfaces = ''
for service_name, entities in data.items():
    ts_interfaces += f'export interface {format_service_name(service_name)} {{\n'
    for entity in entities:
        ts_interfaces += f'  {format_service_name(entity["entity"])}: {{\n'
        ts_interfaces += f'    scope: "{entity["scope"]}",\n'
        ts_interfaces += f'    length: "{entity["length"]}",\n'
        ts_interfaces += f'    validCharacters: `{entity["valid_characters"]}`,\n'
        ts_interfaces += '  },\n'
    ts_interfaces += '}\n\n'

with open('naming-restrictions.ts', 'w') as f:
    f.write(ts_interfaces)
