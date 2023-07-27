import json

# Load the data from naming-restrictions.json
with open('naming-restrictions.json') as f:
  data1 = json.load(f)

# Convert data1 into a dictionary for easy lookup
data1_dict = {}
for resource, entries in data1.items():
    for entry in entries:
        data1_dict[(resource, entry['entity'])] = entry

# Load the entire list from app-data.json
with open('app-data.json') as f:
  data2_lists = json.load(f)

# Merge data from data1 into each item in each list in data2
for data2 in data2_lists:
  for item in data2['items']:
    key = (item['resource'], item['entity'])
    if key in data1_dict:
        matching_item = data1_dict[key].copy()  # Make a copy to avoid modifying data1
        matching_item['restrictions'] = matching_item.pop('valid_characters', None)  # Rename valid_characters to restrictions
        item.update(matching_item)

# Save the result to a new json file
with open('merged.json', 'w') as f:
  json.dump(data2_lists, f, indent=4)
