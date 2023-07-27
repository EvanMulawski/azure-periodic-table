import json

def generate_ts_code(data):
    ts_code = "export const columns: ColumnType[] = [\n"

    for data_group in data:
        ts_code += "  {\n    items: [\n"
        for item in data_group["items"]:
            ts_code += '      {\n'
            ts_code += '        name: "{0}",\n'.format(item["name"])
            ts_code += '        slug: "{0}",\n'.format(item["slug"])
            ts_code += '        description: "{0}",\n'.format(item["description"])
            ts_code += '        length: "{0}",\n'.format(item["length"])
            ts_code += '        category: Categories.{0},\n'.format(item["category"].upper())
            ts_code += '        learnUrl: "{0}",\n'.format(item["learnUrl"])
            ts_code += '        terraformUrl: "{0}",\n'.format(item["terraformUrl"])
            ts_code += '        restrictions: "{0}",\n'.format(item["restrictions"])
            ts_code += '        resource: "{0}",\n'.format(item["resource"])
            ts_code += '        entity: "{0}",\n'.format(item["entity"])
            ts_code += '        scope: "{0}",\n'.format(item["scope"])
            ts_code += '        icon: "",\n'  # Default to empty string
            ts_code += '        code: ""\n'
            ts_code += '      },\n'
        ts_code += "    ]\n  },\n"
    ts_code += "];"

    return ts_code

# Load the data from merged.json
with open('merged.json') as f:
  data = json.load(f)

ts_code = generate_ts_code(data)

# Save the TypeScript code to a new file
with open('data.ts', 'w') as f:
  f.write(ts_code)
