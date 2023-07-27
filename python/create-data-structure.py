import json

columns = [
  {
    "items": [
      {
        "text": "apim",
        "subText": "api management service instance",
        "formattedName": "API Management server instance",
        "range": "1-50",
        "category": "GENERAL",
        "icon": "/icons/integration/api-management.png",
        "learnUrl": "https://learn.microsoft.com/en-us/azure/api-management/",
        "terraformUrl": "https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/api_management",
        "terraformSnippet": "",
      },
      {
        "text": "id-",
        "subText": "managed identity",
        "formattedName": "Managed Identity",
        "learnUrl":
          "https://learn.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/overview",
        "terraformUrl":
          "https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/guides/managed_service_identity.html",
        "terraformSnippet": "",
        "range": "3-128",
        "category": "GENERAL",
        "icon": "/icons/identity/managed-identities.png",
      },
      {
        "text": "mg-",
        "subText": "management group",
        "range": "?",
        "category": "GENERAL",
        "icon": "/icons/general/managementgroups.png",
      },
      {
        "text": "policy-",
        "subText": "policy definition",
        "range": "1-64",
        "category": "GENERAL",
      },
      {
        "text": "rg-",
        "subText": "resource group",
        "range": "1-90",
        "category": "GENERAL",
        "icon": "/icons/general/resourcegroups.png",
      },
    ],
  },
  {
    "items": [
      {
        "text": "agw-",
        "subText": "application gateway",
        "range": "1-80",
        "category": "NETWORKING",
        "icon": "/icons/network/application-gateway.png",
      },
      {
        "text": "asg-",
        "subText": "application security group (asg)",
        "range": "1-80",
        "category": "NETWORKING",
        "icon": "/icons/network/application-security-groups.png",
      },
      {
        "text": "bas-",
        "subText": "bastion",
        "range": "1-80",
        "category": "NETWORKING",
        "icon": "/icons/network/bastion.png",
      },
      {
        "text": "cdnp-",
        "subText": "cdn profile",
        "range": "1-260",
        "category": "NETWORKING",
        "icon": "/icons/network/cdn-profiles.png",
      },
      {
        "text": "cdne-",
        "subText": "cdn endpoint",
        "range": "1-50",
        "category": "NETWORKING",
        "icon": "/icons/network/cdn-profiles.png",
      },
      {
        "text": "con-",
        "subText": "connections",
        "range": "1-80",
        "category": "NETWORKING",
        "icon": "/icons/network/connections.png",
      },
      {
        "text": "dnsz-",
        "subText": "dns",
        "range": "1-63",
        "category": "NETWORKING",
        "icon": "/icons/network/dns-zones.png",
      },
      {
        "text": "pdnsz-",
        "subText": "dns zone",
        "range": "1-63",
        "category": "NETWORKING",
        "icon": "/icons/network/dns-zones.png",
      },
      {
        "text": "afw-",
        "subText": "azure firewall",
        "range": "1-80",
        "category": "NETWORKING",
        "icon": "/icons/network/firewall.png",
      },
      {
        "text": "afwp-",
        "subText": "azure firewall policy",
        "range": "1-80",
        "category": "NETWORKING",
        "icon": None,
      },
    ],
  },
  {
    "items": [
      {
        "text": "erc-",
        "subText": "expressroute circuit",
        "range": "1-80",
        "category": "NETWORKING",
        "icon": "/icons/network/expressroute-circuits.png",
      },
      {
        "text": "fd-",
        "subText": "front door instance",
        "range": "5-64",
        "category": "NETWORKING",
        "icon": "/icons/network/front-doors.png",
      },
      {
        "text": "fdfp-",
        "subText": "front door firewall policy",
        "range": "1-128",
        "category": "NETWORKING",
        "icon": None,
      },
      {
        "text": "lbi-",
        "subText": "load balancer (internal)",
        "range": "1-80",
        "category": "NETWORKING",
        "icon": "/icons/network/load-balancers.png",
      },
      {
        "text": "lbe-",
        "subText": "load balancer (external)",
        "range": "1-80",
        "category": "NETWORKING",
        "icon": "/icons/network/load-balancers.png",
      },
      {
        "text": "rule-",
        "subText": "load balancer rule",
        "range": "1-80",
        "category": "NETWORKING",
        "icon": None,
      },
      {
        "text": "lgw-",
        "subText": "local network gateway",
        "range": "1-80",
        "category": "NETWORKING",
        "icon": "/icons/network/local-network-gateways.png",
      },
      {
        "text": "ng-",
        "subText": "nat gateway",
        "range": "1-80",
        "category": "NETWORKING",
        "icon": None,
      },
      {
        "text": "nic-",
        "subText": "network interface (nic)",
        "range": "1-80",
        "category": "NETWORKING",
        "icon": "/icons/network/network-interfaces.png",
      },
      {
        "text": "nsg-",
        "subText": "network security group (nsg)",
        "range": "1-80",
        "category": "NETWORKING",
        "icon": "/icons/network/network-security-groups-classic.png",
      },
    ],
  },
  {
    "items": [
      {
        "text": "nsgsr-",
        "subText": "nsg security rules",
        "range": "1-80",
        "category": "NETWORKING",
      },
      {
        "text": "nw-",
        "subText": "network watcher",
        "range": "1-80",
        "category": "NETWORKING",
      },
      {
        "text": "pl-",
        "subText": "public link",
        "range": "1-80",
        "category": "NETWORKING",
      },
      {
        "text": "pip-",
        "subText": "public ip address",
        "range": "1-80",
        "category": "NETWORKING",
      },
      {
        "text": "ippre-",
        "subText": "public ip prefix",
        "range": "1-80",
        "category": "NETWORKING",
      },
      {
        "text": "rf-",
        "subText": "route filter",
        "range": "1-80",
        "category": "NETWORKING",
      },
      {
        "text": "rt-",
        "subText": "route table",
        "range": "1-80",
        "category": "NETWORKING",
      },
      {
        "text": "se-",
        "subText": "service endpoint",
        "range": "1-80",
        "category": "NETWORKING",
      },
      {
        "text": "traf-",
        "subText": "traffic manager profile",
        "range": "1-63",
        "category": "NETWORKING",
      },
      {
        "text": "udr-",
        "subText": "user defined route (udr)",
        "range": "1-80",
        "category": "NETWORKING",
      },
    ],
  },
  {
    "items": [
      {
        "text": "vnet-",
        "subText": "virtual network",
        "range": "2-64",
        "category": "NETWORKING",
      },
      {
        "text": "snet-",
        "subText": "virtual network subnet",
        "range": "1-80",
        "category": "NETWORKING",
      },
      {
        "text": "peer-",
        "subText": "virtual network peering",
        "range": "1-80",
        "category": "NETWORKING",
      },
      {
        "text": "vwan-",
        "subText": "virtual wide-area-network",
        "range": "1-80",
        "category": "NETWORKING",
      },
      {
        "text": "vpng-",
        "subText": "vpn gateway",
        "range": "1-80",
        "category": "NETWORKING",
      },
      {
        "text": "vcn-",
        "subText": "vpn connection",
        "range": "1-80",
        "category": "NETWORKING",
      },
      {
        "text": "vst-",
        "subText": "vpn site",
        "range": "1-80",
        "category": "NETWORKING",
      },
      {
        "text": "vgw-",
        "subText": "virtual network gateway",
        "range": "1-80",
        "category": "NETWORKING",
      },
      {
        "text": "waf",
        "subText": "web application firewall (waf) policy",
        "range": "1-80",
        "category": "NETWORKING",
      },
      {
        "text": "wafrg",
        "subText": "(waf) policy rule group",
        "range": "1-80",
        "category": "NETWORKING",
      },
    ],
  },
  {
    "items": [
      {
        "text": "ase-",
        "subText": "app service environment",
        "range": "2-60",
        "category": "COMPUTEANDWEB",
      },
      {
        "text": "plan-",
        "subText": "app service plan",
        "range": "1-40",
        "category": "COMPUTEANDWEB",
      },
      {
        "text": "avail-",
        "subText": "availability set",
        "range": "1-80",
        "category": "COMPUTEANDWEB",
      },
      {
        "text": "arcs-",
        "subText": "azure arc enabled server",
        "range": "1-15",
        "category": "COMPUTEANDWEB",
      },
      {
        "text": "arck",
        "subText": "azure arc enabled kubernetes cluster",
        "range": "1-15",
        "category": "COMPUTEANDWEB",
      },
      {
        "text": "cld-",
        "subText": "cloud service",
        "range": "1-15",
        "category": "COMPUTEANDWEB",
      },
      {
        "text": "des",
        "subText": "disk encryption set",
        "range": "1-80",
        "category": "COMPUTEANDWEB",
      },
      {
        "text": "func-",

        "subText": "function app",
        "range": "2-60",
        "category": "COMPUTEANDWEB",
      },
      {
        "text": "gal",
        "subText": "gallery",
        "range": "1-80",
        "category": "COMPUTEANDWEB",
      },
      {
        "text": "osdisk",
        "subText": "managed disk (os)",
        "range": "1-80",
        "category": "COMPUTEANDWEB",
      },
    ],
  },
  {
    "items": [
      {
        "text": "disk",
        "subText": "managed disk (data)",
        "range": "1-80",
        "category": "COMPUTEANDWEB",
      },
      {
        "text": "ntf-",
        "subText": "notification hubs",
        "range": "1-260",
        "category": "COMPUTEANDWEB",
      },
      {
        "text": "ntfns-",
        "subText": "notification hubs namespace",
        "range": "1-260",
        "category": "COMPUTEANDWEB",
      },
      {
        "text": "snap-",
        "subText": "snapshot",
        "range": "1-80",
        "category": "COMPUTEANDWEB",
      },
      {
        "text": "stapp",
        "subText": "static web app",
        "range": "1-80",
        "category": "COMPUTEANDWEB",
      },
      {
        "text": "vm",
        "subText": "virtual machine",
        "range": "1-15/1-64",
        "category": "COMPUTEANDWEB",
      },
      {
        "text": "vmss-",
        "subText": "virtual machine scale set",
        "range": "1-15/1-64",
        "category": "COMPUTEANDWEB",
      },
      {
        "text": "stvm",
        "subText": "vm storage account",
        "range": "3-24",
        "category": "COMPUTEANDWEB",
      },
      {
        "text": "app-",
        "subText": "web app",
        "range": "2-60",
        "category": "COMPUTEANDWEB",
      },
    ],
  },
  {
    "items": [
      {
        "text": "aks-",
        "subText": "aks cluster",
        "range": "1-63",
        "category": "CONTAINERS",
      },
      {
        "text": "cr",
        "subText": "container registry",
        "range": "5-50",
        "category": "CONTAINERS",
      },
      {
        "text": "ci",
        "subText": "container instance",
        "range": "1-63",
        "category": "CONTAINERS",
      },
      {
        "text": "sf-",
        "subText": "service fabric cluster",
        "range": "4-23",
        "category": "CONTAINERS",
      },
    ],
  },
  {
    "items": [
      {
        "text": "cdb-",
        "subText": "azure cosmos db database",
        "range": "3-44",
        "category": "DATABASES",
      },
      {
        "text": "redis-",
        "subText": "azure cache for redis instance",
        "range": "1-63",
        "category": "DATABASES",
      },
      {
        "text": "sql-",
        "subText": "azure sql database server",
        "range": "1-128",
        "category": "DATABASES",
      },
      {
        "text": "sqldb-",
        "subText": "azure sql database",
        "range": "1-128",
        "category": "DATABASES",
      },
      {
        "text": "syn",
        "subText": "synapse analytics",
        "range": "1-50",
        "category": "DATABASES",
      },
      {
        "text": "synw",
        "subText": "synapse analytics workspace",
        "range": "1-50",
        "category": "DATABASES",
      },
      {
        "text": "syndp",
        "subText": "synapse analytics sql dedicated pool",
        "range": "1-60",
        "category": "DATABASES",
      },
      {
        "text": "synsp",
        "subText": "synapse analytics spark pool",
        "range": "1-60",
        "category": "DATABASES",
      },
    ],
  },
  {
    "items": [
      {
        "text": "mysql-",
        "subText": "mysql database",
        "range": "1-63",
        "category": "DATABASES",
      },
      {
        "text": "psql-",
        "subText": "postgresql database",
        "range": "1-63",
        "category": "DATABASES",
      },
      {
        "text": "sqlsdb-",
        "subText": "sql server stretch database",
        "range": "1-128",
        "category": "DATABASES",
      },
      {
        "text": "sqlmi-",
        "subText": "sql managed instance",
        "range": "1-63",
        "category": "DATABASES",
      },
      {
        "text": "st",
        "subText": "storage account",
        "range": "3-24",
        "category": "STORAGE",
      },
      {
        "text": "ssimp",
        "subText": "azure storsimple",
        "range": "2-50",
        "category": "STORAGE",
      },
      {
        "text": "srch-",
        "subText": "azure congnitive search",
        "range": "2-64",
        "category": "AIANDML",
      },
      {
        "text": "cog-",
        "subText": "azure congnitive services",
        "range": "2-64",
        "category": "AIANDML",
      },
      {
        "text": "mlw-",
        "subText": "azure machine learning workspace",
        "range": "2-16",
        "category": "AIANDML",
      },
    ],
  },
  {
    "items": [
      {
        "text": "as",
        "subText": "azure analysis services server",
        "range": "3-63",
        "category": "ANALYTICSANDIOT",
      },
      {
        "text": "dbw-",
        "subText": "azure databricks workspace",
        "range": "3-64",
        "category": "ANALYTICSANDIOT",
      },
      {
        "text": "asa-",
        "subText": "azure stream analytics",
        "range": "3-63",
        "category": "ANALYTICSANDIOT",
      },
      {
        "text": "dec",
        "subText": "azure data explorer cluster",
        "range": "4-22",
        "category": "ANALYTICSANDIOT",
      },
      {
        "text": "dedb",
        "subText": "azure data explorer cluster database",
        "range": "1-260",
        "category": "ANALYTICSANDIOT",
      },
      {
        "text": "adf-",
        "subText": "azure data factory",
        "range": "3-63",
        "category": "ANALYTICSANDIOT",
      },
      {
        "text": "dls",
        "subText": "data lake store account",
        "range": "3-24",
        "category": "ANALYTICSANDIOT",
      },
      {
        "text": "dla",
        "subText": "data lake analytics account",
        "range": "3-24",
        "category": "ANALYTICSANDIOT",
      },
      {
        "text": "evhns-",
        "subText": "event hub namespace",
        "range": "6-50",
        "category": "ANALYTICSANDIOT",
      },
      {
        "text": "evh-",
        "subText": "event hub",
        "range": "6-50",
        "category": "ANALYTICSANDIOT",
      },
    ],
  },
  {
    "items": [
      {
        "text": "evgd-",
        "subText": "event grid",
        "range": "3-50",
        "category": "ANALYTICSANDIOT",
      },
      {
        "text": "evgs-",
        "subText": "event grid subscription",
        "range": "3-64",
        "category": "ANALYTICSANDIOT",
      },
      {
        "text": "evgt-",
        "subText": "event grid topic",
        "range": "3-50",
        "category": "ANALYTICSANDIOT",
      },
      {
        "text": "hadp-",
        "subText": "hdinsight - hadoop cluster",
        "range": "3-59",
        "category": "ANALYTICSANDIOT",
      },
      {
        "text": "hbase-",
        "subText": "hdinsight - hbase cluster",
        "range": "3-59",
        "category": "ANALYTICSANDIOT",
      },
      {
        "text": "kafka-",
        "subText": "hdinsight - kafka cluster",
        "range": "3-59",
        "category": "ANALYTICSANDIOT",
      },
      {
        "text": "spark-",
        "subText": "hdinsight - spark cluster",
        "range": "3-59",
        "category": "ANALYTICSANDIOT",
      },
      {
        "text": "storm-",

        "subText": "hdinsight - storm cluster",
        "range": "3-59",
        "category": "ANALYTICSANDIOT",
      },
      {
        "text": "mls-",
        "subText": "hdinsight - ml services cluster",
        "range": "3-59",
        "category": "ANALYTICSANDIOT",
      },
      {
        "text": "iot-",
        "subText": "iot hub",
        "range": "3-50",
        "category": "ANALYTICSANDIOT",
      },
    ],
  },
  {
    "items": [
      {
        "text": "provs-",
        "subText": "provisioning services",
        "range": "3-64",
        "category": "ANALYTICSANDIOT",
      },
      {
        "text": "pcert-",
        "subText": "provisioning services certificate",
        "range": "1-64",
        "category": "ANALYTICSANDIOT",
      },
      {
        "text": "pbi-",
        "subText": "power bi embedded",
        "range": "3-63",
        "category": "ANALYTICSANDIOT",
      },
      {
        "text": "tsi-",
        "subText": "time series insights",
        "range": "1-90",
        "category": "ANALYTICSANDIOT",
      },
      {
        "text": "vdp-",
        "subText": "virtual desktop host pool",
        "range": "?",
        "category": "VIRTUALDESKTOP",
      },
      {
        "text": "vdag-",
        "subText": "virtual desktop application group",
        "range": "?",
        "category": "VIRTUALDESKTOP",
      },
      {
        "text": "vdws-",
        "subText": "virtual desktop workspace",
        "range": "?",
        "category": "VIRTUALDESKTOP",
      },
      {
        "text": "appcs-",
        "subText": "app configuration store",
        "range": "5-50",
        "category": "DEVTOOLS",
      },
      {
        "text": "sigr-",
        "subText": "signalr",
        "range": "3-63",
        "category": "DEVTOOLS",
      },
    ],
  },

  {
    "items": [
      {
        "text": "ia-",
        "subText": "integration account",
        "range": "6-50",
        "category": "INTEGRATION",
      },
      {
        "text": "logic-",
        "subText": "logic apps",
        "range": "1-43",
        "category": "INTEGRATION",
      },
      {
        "text": "sb-",
        "subText": "service bus",
        "range": "6-50",
        "category": "INTEGRATION",
      },
      {
        "text": "sbq-",
        "subText": "service bus queue",
        "range": "1-260",
        "category": "INTEGRATION",
      },
      {
        "text": "sbt-",
        "subText": "service bus topic",
        "range": "1-260",
        "category": "INTEGRATION",
      },
      {
        "text": "migr-",
        "subText": "azure migrate project",
        "range": "2-57",
        "category": "MIGRATION",
      },
      {
        "text": "dms-",
        "subText": "database migration service instance",
        "range": "2-62",
        "category": "MIGRATION",
      },
      {
        "text": "rsv-",
        "subText": "recovery services vault",
        "range": "2-50",
        "category": "MIGRATION",
      },
    ],
  },

  {
    "items": [
      {
        "text": "aa-",
        "subText": "automation account",
        "range": "6-50",
        "category": "MANAGEMENT",
      },
      {
        "text": "appi-",
        "subText": "application insights",
        "range": "1-260",
        "category": "MANAGEMENT",
      },
      {
        "text": "ag-",
        "subText": "azure monitor action group",
        "range": "1-260",
        "category": "MANAGEMENT",
      },
      {
        "text": "pview-",
        "subText": "azure purview instances",
        "range": "6-50",
        "category": "MANAGEMENT",
      },
      {
        "text": "bp-",
        "subText": "blueprint",
        "range": "90",
        "category": "MANAGEMENT",
      },
      {
        "text": "bps-",
        "subText": "blueprint assignment",
        "range": "90",
        "category": "MANAGEMENT",
      },
      {
        "text": "kv-",
        "subText": "key vault",
        "range": "3-24",
        "category": "MANAGEMENT",
      },
      {
        "text": "log-",
        "subText": "log analytics workspace",
        "range": "4-63",
        "category": "MANAGEMENT",
      },
    ],
  },
]

def modify_data(columns):
    modified_columns = []
    for column in columns:
        modified_items = []
        for item in column["items"]:
            modified_item = {
                "name": item.get("subText", ""),
                "slug": item.get("text", ""),
                "category": item.get("category", ""),
                "resource": "",
                "entity": "",
                "description": "",
                "length": item.get("range", ""),
                "restrictions": "",
                "scope": "",
                "learnUrl": item.get("learnUrl", ""),
                "terraformUrl": item.get("terraformUrl", ""),
                "code": item.get("terraformSnippet", "")
            }
            modified_items.append(modified_item)
        modified_columns.append({"items": modified_items})
    return modified_columns


with open('data.json', 'w') as outfile:
    json.dump(modify_data(columns), outfile, indent=4)