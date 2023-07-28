from services import services
from icons import icons

import json

for service in services:
    for item in service["items"]:
        # Map the item's name to the key used in the icon map
        name = item["name"]
        # Update the icon url if the name exists in the icon map
        if name in icons:
            item["icon"] = icons[name]
        else:
            print(f"No icon found for {name}")
            
open("services.json", "w").write(json.dumps(services, indent=4))
