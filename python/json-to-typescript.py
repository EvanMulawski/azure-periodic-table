import json

def json_file_to_typescript(input_file, output_file):
    with open(input_file, 'r') as json_file:
        json_data = json_file.read()

    ts_code = json_to_typescript(json_data)

    with open(output_file, 'w') as ts_file:
        ts_file.write(ts_code)


def json_to_typescript(json_data):
    data = json.loads(json_data)

    ts_code = "export const columns: ColumnType[] = [\n"
    
    for item in data:
        ts_code += "  {\n    items: [\n"
        for inner_item in item['items']:
            ts_code += "      {\n"
            for key, value in inner_item.items():
                if isinstance(value, str):
                    ts_code += f'        {key}: "{value}",\n'
                else:
                    ts_code += f'        {key}: {value},\n'
            ts_code += "      },\n"
        ts_code += "    ]\n  },\n"
    ts_code += "]"

    return ts_code

json_file_to_typescript('services.json', 'final-data.ts')
