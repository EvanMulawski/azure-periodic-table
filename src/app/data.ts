/* src/app/data.ts */

import { Categories } from './constants';

export type Item = {
  text: string;
  subText: string;
  range: string;
  category: Categories;
  icon?: string | null;
  terraformUrl?: string;
  azureUrl?: string | null;
  learnUrl?: string | null;
  terraformSnippet?: string | null;
  formattedName?: string | null;
};

type ColumnType = {
  items: Item[];
};

export const columns: ColumnType[] = [
  {
    items: [
      {
        text: 'apim',
        subText: 'api management service instance',
        formattedName: 'API Management server instance',
        range: '1-50',
        category: Categories.GENERAL,
        icon: '/icons/integration/api-management.png',
        learnUrl: 'https://learn.microsoft.com/en-us/azure/api-management/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/api_management',
        terraformSnippet: `resource "azurerm_api_management" "example" {
  name                = "example-apim"
  location            = azurerm_resource_group.example.location
  resource_group_name = azurerm_resource_group.example.name
  publisher_name      = "My Company"
  publisher_email     = "company@terraform.io"
  sku_name = "Developer_1"
}`,
      },
      {
        text: 'id-',
        subText: 'managed identity',
        formattedName: 'Managed Identity',
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/guides/managed_service_identity.html',
        terraformSnippet: `data "azurerm_subscription" "current" {}

resource "azurerm_virtual_machine" "example" {
  # ...

  identity {
    type = "SystemAssigned"
  }
}

data "azurerm_role_definition" "contributor" {
  name = "Contributor"
}

resource "azurerm_role_assignment" "example" {
  scope              = data.azurerm_subscription.current.id
  role_definition_id = "\${data.azurerm_subscription.current.id}\${data.azurerm_role_definition.contributor.id}"
  principal_id       = azurerm_virtual_machine.example.identity[0].principal_id
}`,
        range: '3-128',
        category: Categories.GENERAL,
        icon: '/icons/identity/managed-identities.png',
      },
      {
        text: 'mg-',
        subText: 'management group',
        range: '?',
        category: Categories.GENERAL,
        icon: '/icons/general/managementgroups.png',
      },
      {
        text: 'policy-',
        subText: 'policy definition',
        range: '1-64',
        category: Categories.GENERAL,
        // icon: null,
      },
      {
        text: 'rg-',
        subText: 'resource group',
        range: '1-90',
        category: Categories.GENERAL,
        icon: '/icons/general/resourcegroups.png',
      },
    ],
  },
  {
    items: [
      {
        text: 'agw-',
        subText: 'application gateway',
        range: '1-80',
        category: Categories.NETWORKING,
        icon: '/icons/network/application-gateway.png',
      },
      {
        text: 'asg-',
        subText: 'application security group (asg)',
        range: '1-80',
        category: Categories.NETWORKING,
        icon: '/icons/network/application-security-groups.png',
      },
      {
        text: 'bas-',
        subText: 'bastion',
        range: '1-80',
        category: Categories.NETWORKING,
        icon: '/icons/network/bastion.png',
      },
      {
        text: 'cdnp-',
        subText: 'cdn profile',
        range: '1-260',
        category: Categories.NETWORKING,
        icon: '/icons/network/cdn-profiles.png',
      },
      {
        text: 'cdne-',
        subText: 'cdn endpoint',
        range: '1-50',
        category: Categories.NETWORKING,
        icon: '/icons/network/cdn-profiles.png',
      },
      {
        text: 'con-',
        subText: 'connections',
        range: '1-80',
        category: Categories.NETWORKING,
        icon: '/icons/network/connections.png',
      },
      {
        text: 'dnsz-',
        subText: 'dns',
        range: '1-63',
        category: Categories.NETWORKING,
        icon: '/icons/network/dns-zones.png',
      },
      {
        text: 'pdnsz-',
        subText: 'dns zone',
        range: '1-63',
        category: Categories.NETWORKING,
        icon: '/icons/network/dns-zones.png',
      },
      {
        text: 'afw-',
        subText: 'azure firewall',
        range: '1-80',
        category: Categories.NETWORKING,
        icon: '/icons/network/firewall.png',
      },
      {
        text: 'afwp-',
        subText: 'azure firewall policy',
        range: '1-80',
        category: Categories.NETWORKING,
        icon: null,
      } /* ... */,
    ],
  },
  {
    items: [
      {
        text: 'erc-',
        subText: 'expressroute circuit',
        range: '1-80',
        category: Categories.NETWORKING,
        icon: '/icons/network/expressroute-circuits.png',
      },
      {
        text: 'fd-',
        subText: 'front door instance',
        range: '5-64',
        category: Categories.NETWORKING,
        icon: '/icons/network/front-doors.png',
      },
      {
        text: 'fdfp-',
        subText: 'front door firewall policy',
        range: '1-128',
        category: Categories.NETWORKING,
        icon: null,
      },
      {
        text: 'lbi-',
        subText: 'load balancer (internal)',
        range: '1-80',
        category: Categories.NETWORKING,
        icon: '/icons/network/load-balancers.png',
      },
      {
        text: 'lbe-',
        subText: 'load balancer (external)',
        range: '1-80',
        category: Categories.NETWORKING,
        icon: '/icons/network/load-balancers.png',
      },
      {
        text: 'rule-',
        subText: 'load balancer rule',
        range: '1-80',
        category: Categories.NETWORKING,
        icon: null,
      },
      {
        text: 'lgw-',
        subText: 'local network gateway',
        range: '1-80',
        category: Categories.NETWORKING,
        icon: '/icons/network/local-network-gateways.png',
      },
      {
        text: 'ng-',
        subText: 'nat gateway',
        range: '1-80',
        category: Categories.NETWORKING,
        icon: null,
      },
      {
        text: 'nic-',
        subText: 'network interface (nic)',
        range: '1-80',
        category: Categories.NETWORKING,
        icon: '/icons/network/network-interfaces.png',
      },
      {
        text: 'nsg-',
        subText: 'network security group (nsg)',
        range: '1-80',
        category: Categories.NETWORKING,
        icon: '/icons/network/network-security-groups-classic.png',
      },
    ],
  },
  {
    items: [
      {
        text: 'nsgsr-',
        subText: 'nsg security rules',
        range: '1-80',
        category: Categories.NETWORKING,
      },
      {
        text: 'nw-',
        subText: 'network watcher',
        range: '1-80',
        category: Categories.NETWORKING,
      },
      {
        text: 'pl-',
        subText: 'public link',
        range: '1-80',
        category: Categories.NETWORKING,
      },
      {
        text: 'pip-',
        subText: 'public ip address',
        range: '1-80',
        category: Categories.NETWORKING,
      },
      {
        text: 'ippre-',
        subText: 'public ip prefix',
        range: '1-80',
        category: Categories.NETWORKING,
      },
      {
        text: 'rf-',
        subText: 'route filter',
        range: '1-80',
        category: Categories.NETWORKING,
      },
      {
        text: 'rt-',
        subText: 'route table',
        range: '1-80',
        category: Categories.NETWORKING,
      },
      {
        text: 'se-',
        subText: 'service endpoint',
        range: '1-80',
        category: Categories.NETWORKING,
      },
      {
        text: 'traf-',
        subText: 'traffic manager profile',
        range: '1-63',
        category: Categories.NETWORKING,
      },
      {
        text: 'udr-',
        subText: 'user defined route (udr)',
        range: '1-80',
        category: Categories.NETWORKING,
      },
    ],
  },
  {
    items: [
      {
        text: 'vnet-',
        subText: 'virtual network',
        range: '2-64',
        category: Categories.NETWORKING,
      },
      {
        text: 'snet-',
        subText: 'virtual network subnet',
        range: '1-80',
        category: Categories.NETWORKING,
      },
      {
        text: 'peer-',
        subText: 'virtual network peering',
        range: '1-80',
        category: Categories.NETWORKING,
      },
      {
        text: 'vwan-',
        subText: 'virtual wide-area-network',
        range: '1-80',
        category: Categories.NETWORKING,
      },
      {
        text: 'vpng-',
        subText: 'vpn gateway',
        range: '1-80',
        category: Categories.NETWORKING,
      },
      {
        text: 'vcn-',
        subText: 'vpn connection',
        range: '1-80',
        category: Categories.NETWORKING,
      },
      {
        text: 'vst-',
        subText: 'vpn site',
        range: '1-80',
        category: Categories.NETWORKING,
      },
      {
        text: 'vgw-',
        subText: 'virtual network gateway',
        range: '1-80',
        category: Categories.NETWORKING,
      },
      {
        text: 'waf',
        subText: 'web application firewall (waf) policy',
        range: '1-80',
        category: Categories.NETWORKING,
      },
      {
        text: 'wafrg',
        subText: '(waf) policy rule group',
        range: '1-80',
        category: Categories.NETWORKING,
      },
    ],
  },
  {
    items: [
      {
        text: 'ase-',
        subText: 'app service environment',
        range: '2-60',
        category: Categories.COMPUTEANDWEB,
      },
      {
        text: 'plan-',
        subText: 'app service plan',
        range: '1-40',
        category: Categories.COMPUTEANDWEB,
      },
      {
        text: 'avail-',
        subText: 'availability set',
        range: '1-80',
        category: Categories.COMPUTEANDWEB,
      },
      {
        text: 'arcs-',
        subText: 'azure arc enabled server',
        range: '1-15',
        category: Categories.COMPUTEANDWEB,
      },
      {
        text: 'arck',
        subText: 'azure arc enabled kubernetes cluster',
        range: '1-15',
        category: Categories.COMPUTEANDWEB,
      },
      {
        text: 'cld-',
        subText: 'cloud service',
        range: '1-15',
        category: Categories.COMPUTEANDWEB,
      },
      {
        text: 'des',
        subText: 'disk encryption set',
        range: '1-80',
        category: Categories.COMPUTEANDWEB,
      },
      {
        text: 'func-',

        subText: 'function app',
        range: '2-60',
        category: Categories.COMPUTEANDWEB,
      },
      {
        text: 'gal',
        subText: 'gallery',
        range: '1-80',
        category: Categories.COMPUTEANDWEB,
      },
      {
        text: 'osdisk',
        subText: 'managed disk (os)',
        range: '1-80',
        category: Categories.COMPUTEANDWEB,
      },
    ],
  },
  {
    items: [
      {
        text: 'disk',
        subText: 'managed disk (data)',
        range: '1-80',
        category: Categories.COMPUTEANDWEB,
      },
      {
        text: 'ntf-',
        subText: 'notification hubs',
        range: '1-260',
        category: Categories.COMPUTEANDWEB,
      },
      {
        text: 'ntfns-',
        subText: 'notification hubs namespace',
        range: '1-260',
        category: Categories.COMPUTEANDWEB,
      },
      {
        text: 'snap-',
        subText: 'snapshot',
        range: '1-80',
        category: Categories.COMPUTEANDWEB,
      },
      {
        text: 'stapp',
        subText: 'static web app',
        range: '1-80',
        category: Categories.COMPUTEANDWEB,
      },
      {
        text: 'vm',
        subText: 'virtual machine',
        range: '1-15/1-64',
        category: Categories.COMPUTEANDWEB,
      },
      {
        text: 'vmss-',
        subText: 'virtual machine scale set',
        range: '1-15/1-64',
        category: Categories.COMPUTEANDWEB,
      },
      {
        text: 'stvm',
        subText: 'vm storage account',
        range: '3-24',
        category: Categories.COMPUTEANDWEB,
      },
      {
        text: 'app-',
        subText: 'web app',
        range: '2-60',
        category: Categories.COMPUTEANDWEB,
      },
    ],
  },
  {
    items: [
      {
        text: 'aks-',
        subText: 'aks cluster',
        range: '1-63',
        category: Categories.CONTAINERS,
      },
      {
        text: 'cr',
        subText: 'container registry',
        range: '5-50',
        category: Categories.CONTAINERS,
      },
      {
        text: 'ci',
        subText: 'container instance',
        range: '1-63',
        category: Categories.CONTAINERS,
      },
      {
        text: 'sf-',
        subText: 'service fabric cluster',
        range: '4-23',
        category: Categories.CONTAINERS,
      },
    ],
  },
  {
    items: [
      {
        text: 'cdb-',
        subText: 'azure cosmos db database',
        range: '3-44',
        category: Categories.DATABASES,
      },
      {
        text: 'redis-',
        subText: 'azure cache for redis instance',
        range: '1-63',
        category: Categories.DATABASES,
      },
      {
        text: 'sql-',
        subText: 'azure sql database server',
        range: '1-128',
        category: Categories.DATABASES,
      },
      {
        text: 'sqldb-',
        subText: 'azure sql database',
        range: '1-128',
        category: Categories.DATABASES,
      },
      {
        text: 'syn',
        subText: 'synapse analytics',
        range: '1-50',
        category: Categories.DATABASES,
      },
      {
        text: 'synw',
        subText: 'synapse analytics workspace',
        range: '1-50',
        category: Categories.DATABASES,
      },
      {
        text: 'syndp',
        subText: 'synapse analytics sql dedicated pool',
        range: '1-60',
        category: Categories.DATABASES,
      },
      {
        text: 'synsp',
        subText: 'synapse analytics spark pool',
        range: '1-60',
        category: Categories.DATABASES,
      },
    ],
  },
  {
    items: [
      {
        text: 'mysql-',
        subText: 'mysql database',
        range: '1-63',
        category: Categories.DATABASES,
      },
      {
        text: 'psql-',
        subText: 'postgresql database',
        range: '1-63',
        category: Categories.DATABASES,
      },
      {
        text: 'sqlsdb-',
        subText: 'sql server stretch database',
        range: '1-128',
        category: Categories.DATABASES,
      },
      {
        text: 'sqlmi-',
        subText: 'sql managed instance',
        range: '1-63',
        category: Categories.DATABASES,
      },
      {
        text: 'st',
        subText: 'storage account',
        range: '3-24',
        category: Categories.STORAGE,
      },
      {
        text: 'ssimp',
        subText: 'azure storsimple',
        range: '2-50',
        category: Categories.STORAGE,
      },
      {
        text: 'srch-',
        subText: 'azure congnitive search',
        range: '2-64',
        category: Categories.AIANDML,
      },
      {
        text: 'cog-',
        subText: 'azure congnitive services',
        range: '2-64',
        category: Categories.AIANDML,
      },
      {
        text: 'mlw-',
        subText: 'azure machine learning workspace',
        range: '2-16',
        category: Categories.AIANDML,
      },
    ],
  },
  {
    items: [
      {
        text: 'as',
        subText: 'azure analysis services server',
        range: '3-63',
        category: Categories.ANALYTICSANDIOT,
      },
      {
        text: 'dbw-',
        subText: 'azure databricks workspace',
        range: '3-64',
        category: Categories.ANALYTICSANDIOT,
      },
      {
        text: 'asa-',
        subText: 'azure stream analytics',
        range: '3-63',
        category: Categories.ANALYTICSANDIOT,
      },
      {
        text: 'dec',
        subText: 'azure data explorer cluster',
        range: '4-22',
        category: Categories.ANALYTICSANDIOT,
      },
      {
        text: 'dedb',
        subText: 'azure data explorer cluster database',
        range: '1-260',
        category: Categories.ANALYTICSANDIOT,
      },
      {
        text: 'adf-',
        subText: 'azure data factory',
        range: '3-63',
        category: Categories.ANALYTICSANDIOT,
      },
      {
        text: 'dls',
        subText: 'data lake store account',
        range: '3-24',
        category: Categories.ANALYTICSANDIOT,
      },
      {
        text: 'dla',
        subText: 'data lake analytics account',
        range: '3-24',
        category: Categories.ANALYTICSANDIOT,
      },
      {
        text: 'evhns-',
        subText: 'event hub namespace',
        range: '6-50',
        category: Categories.ANALYTICSANDIOT,
      },
      {
        text: 'evh-',
        subText: 'event hub',
        range: '6-50',
        category: Categories.ANALYTICSANDIOT,
      } /* ... */,
    ],
  },
  {
    items: [
      {
        text: 'evgd-',
        subText: 'event grid',
        range: '3-50',
        category: Categories.ANALYTICSANDIOT,
      },
      {
        text: 'evgs-',
        subText: 'event grid subscription',
        range: '3-64',
        category: Categories.ANALYTICSANDIOT,
      },
      {
        text: 'evgt-',
        subText: 'event grid topic',
        range: '3-50',
        category: Categories.ANALYTICSANDIOT,
      },
      {
        text: 'hadp-',
        subText: 'hdinsight - hadoop cluster',
        range: '3-59',
        category: Categories.ANALYTICSANDIOT,
      },
      {
        text: 'hbase-',
        subText: 'hdinsight - hbase cluster',
        range: '3-59',
        category: Categories.ANALYTICSANDIOT,
      },
      {
        text: 'kafka-',
        subText: 'hdinsight - kafka cluster',
        range: '3-59',
        category: Categories.ANALYTICSANDIOT,
      },
      {
        text: 'spark-',
        subText: 'hdinsight - spark cluster',
        range: '3-59',
        category: Categories.ANALYTICSANDIOT,
      },
      {
        text: 'storm-',

        subText: 'hdinsight - storm cluster',
        range: '3-59',
        category: Categories.ANALYTICSANDIOT,
      },
      {
        text: 'mls-',
        subText: 'hdinsight - ml services cluster',
        range: '3-59',
        category: Categories.ANALYTICSANDIOT,
      },
      {
        text: 'iot-',
        subText: 'iot hub',
        range: '3-50',
        category: Categories.ANALYTICSANDIOT,
      } /* ... */,
    ],
  },
  {
    items: [
      {
        text: 'provs-',
        subText: 'provisioning services',
        range: '3-64',
        category: Categories.ANALYTICSANDIOT,
      },
      {
        text: 'pcert-',
        subText: 'provisioning services certificate',
        range: '1-64',
        category: Categories.ANALYTICSANDIOT,
      },
      {
        text: 'pbi-',
        subText: 'power bi embedded',
        range: '3-63',
        category: Categories.ANALYTICSANDIOT,
      },
      {
        text: 'tsi-',
        subText: 'time series insights',
        range: '1-90',
        category: Categories.ANALYTICSANDIOT,
      },
      {
        text: 'vdp-',
        subText: 'virtual desktop host pool',
        range: '?',
        category: Categories.VIRTUALDESKTOP,
      },
      {
        text: 'vdag-',
        subText: 'virtual desktop application group',
        range: '?',
        category: Categories.VIRTUALDESKTOP,
      },
      {
        text: 'vdws-',
        subText: 'virtual desktop workspace',
        range: '?',
        category: Categories.VIRTUALDESKTOP,
      },
      {
        text: 'appcs-',
        subText: 'app configuration store',
        range: '5-50',
        category: Categories.DEVTOOLS,
      },
      {
        text: 'sigr-',
        subText: 'signalr',
        range: '3-63',
        category: Categories.DEVTOOLS,
      } /* ... */,
    ],
  },

  {
    items: [
      {
        text: 'ia-',
        subText: 'integration account',
        range: '6-50',
        category: Categories.INTEGRATION,
      },
      {
        text: 'logic-',
        subText: 'logic apps',
        range: '1-43',
        category: Categories.INTEGRATION,
      },
      {
        text: 'sb-',
        subText: 'service bus',
        range: '6-50',
        category: Categories.INTEGRATION,
      },
      {
        text: 'sbq-',
        subText: 'service bus queue',
        range: '1-260',
        category: Categories.INTEGRATION,
      },
      {
        text: 'sbt-',
        subText: 'service bus topic',
        range: '1-260',
        category: Categories.INTEGRATION,
      },
      {
        text: 'migr-',
        subText: 'azure migrate project',
        range: '2-57',
        category: Categories.MIGRATION,
      },
      {
        text: 'dms-',
        subText: 'database migration service instance',
        range: '2-62',
        category: Categories.MIGRATION,
      },
      {
        text: 'rsv-',
        subText: 'recovery services vault',
        range: '2-50',
        category: Categories.MIGRATION,
      },
    ],
  },

  {
    items: [
      {
        text: 'aa-',
        subText: 'automation account',
        range: '6-50',
        category: Categories.MANAGEMENT,
      },
      {
        text: 'appi-',
        subText: 'application insights',
        range: '1-260',
        category: Categories.MANAGEMENT,
      },
      {
        text: 'ag-',
        subText: 'azure monitor action group',
        range: '1-260',
        category: Categories.MANAGEMENT,
      },
      {
        text: 'pview-',
        subText: 'azure purview instances',
        range: '6-50',
        category: Categories.MANAGEMENT,
      },
      {
        text: 'bp-',
        subText: 'blueprint',
        range: '90',
        category: Categories.MANAGEMENT,
      },
      {
        text: 'bps-',
        subText: 'blueprint assignment',
        range: '90',
        category: Categories.MANAGEMENT,
      },
      {
        text: 'kv-',
        subText: 'key vault',
        range: '3-24',
        category: Categories.MANAGEMENT,
      },
      {
        text: 'log-',
        subText: 'log analytics workspace',
        range: '4-63',
        category: Categories.MANAGEMENT,
      },
    ],
  },
  // Add more groups here
];
