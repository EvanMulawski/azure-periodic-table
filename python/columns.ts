import { Categories } from '@/app/constants';
import { ColumnType } from '@/app/data';

export const columns: ColumnType[] = [
  {
    items: [
      {
        name: 'managed identity',
        slug: 'id-',
        description:
          'Azure Managed Identities for Azure resources provides Azure services with an automatically managed identity in Azure Active Directory. You can use this identity to authenticate to services that support Azure AD authentication, without needing any credentials in your code.',
        length: '3-128',
        category: Categories.GENERAL,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/user_assigned_identity',
        restrictions:
          'Alphanumerics, hyphens, and underscores. Start with letter or number.',
        resource: 'Microsoft.ManagedIdentity',
        entity: 'userAssignedIdentities',
        scope: 'resource group',
        icon: '/icons/identity/managed-identities.png',
        code: '',
      },
      {
        name: 'management group',
        slug: 'mg-',
        description:
          "Azure Management Groups provide a level of scope above subscriptions. They allow you to organize subscriptions into containers called 'management groups' and apply your governance conditions to the management groups. All subscriptions within a management group automatically inherit the conditions applied to the management group.",
        length: '1-90',
        category: Categories.GENERAL,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/governance/management-groups/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/management_group',
        restrictions:
          'Alphanumerics, hyphens, and parentheses. Cannot begin or end with a hyphen. Cannot contain consecutive hyphens.',
        resource: 'Microsoft.Management',
        entity: 'managementGroups',
        scope: 'tenant',
        icon: '/icons/general/managementgroups.png',
        code: '',
      },
      {
        name: 'policy definition',
        slug: 'policy-',
        description:
          'Azure Policy Definitions enforce different rules and effects over your resources, so those resources stay compliant with your corporate standards and service level agreements. Azure Policy does this by running evaluations of your resources and scanning for those not compliant with the policies you have created.',
        length: '1-64',
        category: Categories.GENERAL,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/governance/policy/overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/policy_definition',
        restrictions:
          'Display name can contain any characters. Resource name Can not use:<>*%&:?. +/ or control characters. Can not end with period or space.',
        resource: 'Microsoft.Authorization',
        entity: 'policyDefinitions',
        scope: 'scope of definition',
        icon: '/icons/general/information.png',
        code: '',
      },
      {
        name: 'resource group',
        slug: 'rg-',
        description:
          'Azure Resource Groups are logical containers for resources deployed within an Azure subscription. This group includes those resources that you want to manage as a group. You decide how to allocate resources to resource groups based on what makes the most sense for your organization.',
        length: '1-90',
        category: Categories.GENERAL,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/resource_group',
        restrictions:
          'Underscores, hyphens, periods, parentheses, and letters or digits as defined by the Char. IsLetterOrDigit function. Valid characters are members of the following categories in UnicodeCategory:UppercaseLetter,LowercaseLetter,TitlecaseLetter,ModifierLetter,OtherLetter,DecimalDigitNumber. Can not end with period.',
        resource: 'Microsoft.Resources',
        entity: 'resourcegroups',
        scope: 'subscription',
        icon: '/icons/general/resourcegroups.png',
        code: '',
      },
    ],
  },
  {
    items: [
      {
        name: 'application gateway',
        slug: 'agw-',
        description:
          'Azure Application Gateway is a web traffic load balancer that enables management of traffic to web applications. It provides routing services and can make routing decisions based on additional attributes of an HTTP request.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/application-gateway/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/application_gateway',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric. End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'applicationGateways',
        scope: 'resource group',
        icon: '/icons/network/application-gateway.png',
        code: '',
      },
      {
        name: 'application security group (asg)',
        slug: 'asg-',
        description:
          'Application Security Groups (ASG) in Azure enable fine-grained network control over your network architecture and the ability to secure direct access to applications based on role.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/virtual-network/security-overview#application-security-groups',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/network_security_group',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric. End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'applicationSecurityGroups',
        scope: 'resource group',
        icon: '/icons/network/application-security-groups.png',
        code: '',
      },
      {
        name: 'bastion',
        slug: 'bas-',
        description:
          'Azure Bastion is a fully managed network security service that provides secure and seamless Remote Desktop Protocol (RDP) and Secure Shell (SSH) access to your virtual machines directly from the Azure portal.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/bastion/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/bastion_host',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric. End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'bastionHosts',
        scope: 'resource group',
        icon: '/icons/network/bastion.png',
        code: '',
      },
      {
        name: 'cdn profile',
        slug: 'cdnp-',
        description:
          "Azure CDN profiles allow you to manage the delivery of your content through Microsoft's global CDN network. It is designed to send audio, video, applications, images, and other files faster and more reliably to customers using servers that are closest to each user.",
        length: '1-260',
        category: Categories.NETWORKING,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/cdn/cdn-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/cdn_profile',
        restrictions:
          'Alphanumerics and hyphens. Start and end with alphanumeric.',
        resource: 'Microsoft.Cdn',
        entity: 'profiles',
        scope: 'resource group',
        icon: '/icons/network/cdn-profiles.png',
        code: '',
      },
      {
        name: 'cdn endpoint',
        slug: 'cdne-',
        description:
          'Azure CDN Endpoints are the specific points of presence (PoPs) in the CDN where your content is cached. Endpoints enable faster delivery of content to users who are in close proximity to these locations.',
        length: '1-50',
        category: Categories.NETWORKING,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/cdn/cdn-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/cdn_endpoint',
        restrictions:
          'Alphanumerics and hyphens. Start and end with alphanumeric.',
        resource: 'Microsoft.Cdn',
        entity: 'profiles / endpoints',
        scope: 'global',
        icon: '/icons/network/cdn-profiles.png',
        code: '',
      },
      {
        name: 'connections',
        slug: 'con-',
        description:
          'Azure Connections represent the peerings that exist between virtual networks. Through Azure Connections, you can create complex network topologies or chain virtual networks together for resource access.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/virtual_network_peering',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric. End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'connections',
        scope: 'resource group',
        icon: '/icons/network/connections.png',
        code: '',
      },
      {
        name: 'dns zone',
        slug: 'dnsz-',
        description:
          "Azure DNS Zone is a service that allows you to host your domain's DNS records on Azure, providing name resolution using Microsoft Azure infrastructure. By hosting your domains in Azure, you can manage your DNS records using the same credentials and billing and support contract as your other Azure services.",
        length: '1-63',
        category: Categories.NETWORKING,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/dns/dns-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/dns_zone',
        restrictions:
          'Each label can contain alphanumerics, underscores, and hyphens. Each label is separated by a period.',
        resource: 'Microsoft.Network',
        entity: 'dnsZones',
        scope: 'resource group',
        icon: '/icons/network/dns-zones.png',
        code: '',
      },
      {
        name: 'private dns zone',
        slug: 'pdnsz-',
        description:
          'Azure Private DNS Zone is a service that provides an ability to use your own custom domain names, rather than the Azure-provided names. It helps in name resolution for virtual machines (VMs) within a virtual network and between virtual networks.',
        length: '1-63',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/dns/private-dns-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/private_dns_zone',
        restrictions:
          'Each label can contain alphanumerics, underscores, and hyphens. Each label is separated by a period.',
        resource: 'Microsoft.Network',
        entity: 'privateDnsZones',
        scope: 'resource group',
        icon: '/icons/network/dns-private-zones.png',
        code: '',
      },
      {
        name: 'firewall',
        slug: 'afw-',
        description:
          'Azure Firewall is a highly available and scalable firewall service in Microsoft Azure that provides inbound protection for non-HTTP/S protocols, outbound network-level protection for all ports and protocols, and application-level protection for outbound HTTP/S.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/firewall/overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/firewall',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End with alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'azureFirewalls',
        scope: 'resource group',
        icon: '/icons/network/firewall.png',
        code: '',
      },
      {
        name: 'firewall policy',
        slug: 'afwp-',
        description:
          'Azure Firewall Policy is a security policy that is associated with one or more Azure Firewall instances. It provides fully qualified domain name (FQDN) filtering for outbound HTTP/S traffic and SQL server filtering for outbound TCP traffic. Threat intelligence-based filtering can also be enabled for outbound traffic.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/firewall-manager/policy-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/firewall_policy',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'firewallPolicies',
        scope: 'resource group',
        icon: '/icons/security/defender.png',
        code: '',
      },
    ],
  },
  {
    items: [
      {
        name: 'expressroute circuit',
        slug: 'erc-',
        description:
          'Azure ExpressRoute is a service that enables establishing dedicated, private network connections between Azure datacenters and your on-premises infrastructure.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/expressroute/expressroute-introduction',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/express_route_circuit',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'expressRouteCircuits',
        scope: 'resource group',
        icon: '/icons/network/expressroute-circuits.png',
        code: '',
      },
      {
        name: 'front door instance',
        slug: 'fd-',
        description:
          'Azure Front Door offers a scalable and secure entry point for fast delivery of your global web applications.',
        length: '5-64',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/frontdoor/front-door-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/frontdoor',
        restrictions:
          'Alphanumerics and hyphens. Start and end with alphanumeric.',
        resource: 'Microsoft.Network',
        entity: 'frontDoors',
        scope: 'global',
        icon: '/icons/network/front-doors.png',
        code: '',
      },
      {
        name: 'front door firewall policy',
        slug: 'fdfp-',
        description:
          'Front Door Firewall Policies allow you to manage security policies associated with your Front Door instances, providing custom control on the handling of your web traffic.',
        length: '1-128',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/frontdoor/waf-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/frontdoor_firewall_policy',
        restrictions: 'Alphanumerics. Start with letter.',
        resource: 'Microsoft.Network',
        entity: 'frontdoorWebApplicationFirewallPolicies',
        scope: 'resource group',
        icon: '/icons/network/front-doors.png',
        code: '',
      },
      {
        name: 'load balancer (internal)',
        slug: 'lbi-',
        description:
          'Internal Load Balancer in Azure is used to provide load balancing services within a private network.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/load-balancer/load-balancer-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/lb',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'loadBalancers',
        scope: 'resource group',
        icon: '/icons/network/load-balancers.png',
        code: '',
      },
      {
        name: 'load balancer (external)',
        slug: 'lbe-',
        description:
          'External Load Balancer in Azure is used to provide load balancing services for incoming Internet traffic.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/load-balancer/load-balancer-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/lb',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'loadBalancers',
        scope: 'resource group',
        icon: '/icons/network/load-balancers.png',
        code: '',
      },
      {
        name: 'load balancer rule',
        slug: 'rule-',
        description:
          'Load Balancer rules in Azure define the inbound traffic flow to the resources in your backend pool.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/load-balancer/load-balancer-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/lb_rule',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'loadBalancers / inboundNatRules',
        scope: 'load balancer',
        icon: '/icons/network/load-balancers.png',
        code: '',
      },
      {
        name: 'local network gateway',
        slug: 'lgw-',
        description:
          'The local network gateway in Azure represents your on-premises network location to Azure for cross-premises connections.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-howto-site-to-site-resource-manager-portal',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/local_network_gateway',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'localNetworkGateways',
        scope: 'resource group',
        icon: '/icons/network/local-network-gateways.png',
        code: '',
      },
      {
        name: 'nat gateway',
        slug: 'ng-',
        description:
          'Azure NAT Gateway is a resource that provides outbound internet connectivity for virtual networks.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/virtual-network/nat-gateway/nat-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/nat_gateway',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'natGateways',
        scope: 'resource group',
        icon: '/icons/network/network-watcher.png',
        code: '',
      },
      {
        name: 'network interface (nic)',
        slug: 'nic-',
        description:
          'Network interface (NIC) is an interconnection between a virtual machine (VM) and the underlying Azure virtual network (VNet).',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-network-interface',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/network_interface',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'networkInterfaces',
        scope: 'resource group',
        icon: '/icons/network/network-interfaces.png',
        code: '',
      },
      {
        name: 'network security group (nsg)',
        slug: 'nsg-',
        description:
          'A network security group (NSG) in Azure contains a list of security rules that allow or deny inbound or outbound network traffic based on source or destination IP address, port, and protocol.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/virtual-network/security-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/network_security_group',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'networkSecurityGroups',
        scope: 'resource group',
        icon: '/icons/network/network-security-groups-classic.png',
        code: '',
      },
    ],
  },
  {
    items: [
      {
        name: 'nsg security rules',
        slug: 'nsgsr-',
        description:
          'NSG Security Rules define the allowed or denied traffic for Network Security Groups (NSGs) in Azure, enabling fine-tuned control over inbound and outbound network traffic.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/virtual-network/security-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/network_security_rule',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'networkSecurityGroups / securityRules',
        scope: 'network security group',
        icon: '/icons/network/network-security-groups-classic.png',
        code: '',
      },
      {
        name: 'network watcher',
        slug: 'nw-',
        description:
          'Azure Network Watcher provides network performance monitoring and diagnostic services. It helps to understand, diagnose, and gain insights to your network in Azure.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/network-watcher/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/network_watcher',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'networkWatchers',
        scope: 'resource group',
        icon: '/icons/network/network-watcher.png',
        code: '',
      },
      {
        name: 'private link',
        slug: 'pl-',
        description:
          'Azure Private Link provides private connectivity from a virtual network to Azure platform as a service (PaaS), customer-owned, or Microsoft partner services.',
        length: '2-64',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/private-link/private-link-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/private_link_service',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'privateEndpoints',
        scope: 'resource group',
        icon: '/icons/network/network-interfaces.png',
        code: '',
      },
      {
        name: 'public ip address',
        slug: 'pip-',
        description:
          'Public IP addresses in Azure allow inbound and outbound connectivity to the internet from Azure resources.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/virtual-network/ip-services/overview-ip-address-public',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/public_ip',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'publicIPAddresses',
        scope: 'resource group',
        icon: '/icons/network/public-ip-addresses.png',
        code: '',
      },
      {
        name: 'public ip prefix',
        slug: 'ippre-',
        description:
          'Azure Public IP Prefix is a reserved set of static IP addresses that can be used for your public-facing services.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/virtual-network/public-ip-address-prefix',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/public_ip_prefix',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'publicIPPrefixes',
        scope: 'resource group',
        icon: '/icons/network/public-ip-addresses.png',
        code: '',
      },
      {
        name: 'route filter',
        slug: 'rf-',
        description:
          'Azure Route Filters are used to control routing paths in Azure, enabling you to influence the outbound traffic path for services connected to your ExpressRoute circuit.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/expressroute/how-to-routefilter-cli',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/route_filter',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'routeFilters',
        scope: 'resource group',
        icon: '/icons/network/route-filters.png',
        code: '',
      },
      {
        name: 'route table',
        slug: 'rt-',
        description:
          'Azure Route Tables allow you to control the flow of traffic within your virtual networks. They can be associated with subnets, determining where network traffic is routed for each subnet.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/virtual-network/manage-route-table',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/route_table',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'routeTables',
        scope: 'resource group',
        icon: '/icons/network/route-tables.png',
        code: '',
      },
      {
        name: 'service endpoint policies',
        slug: 'se-',
        description:
          'Service Endpoint Policies in Azure define which services are accessible from a subnet, providing granular network security for Azure service resources.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-service-endpoint-policies-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/service_endpoint_policy',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'serviceEndpointPolicies',
        scope: 'resource group',
        icon: '/icons/network/service-endpoint-policies.png',
        code: '',
      },
      {
        name: 'traffic manager profile',
        slug: 'traf-',
        description:
          'Azure Traffic Manager allows you to control the distribution of user traffic to your service endpoints, providing a range of traffic-routing methods and endpoint monitoring options.',
        length: '1-63',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/traffic-manager/traffic-manager-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/traffic_manager_profile',
        restrictions:
          'Alphanumerics, hyphens, and periods. Start and end with alphanumeric.',
        resource: 'Microsoft.Network',
        entity: 'trafficmanagerprofiles',
        scope: 'global',
        icon: '/icons/network/traffic-manager-profiles.png',
        code: '',
      },
      {
        name: 'user defined route (udr)',
        slug: 'udr-',
        description:
          'User Defined Routes (UDRs) in Azure allow for customization of network traffic routes, providing granular control over traffic flow within your virtual network.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/virtual-network/tutorial-create-route-table-portal',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/route',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'routeTables / routes',
        scope: 'route table',
        icon: '/icons/network/route-tables.png',
        code: '',
      },
    ],
  },
  {
    items: [
      {
        name: 'virtual network',
        slug: 'vnet-',
        description:
          'Azure Virtual Network is a fundamental building block for your private network in Azure, enabling many types of Azure resources, such as Azure Virtual Machines (VM), to securely communicate with each other, the internet, and on-premises networks.',
        length: '2-64',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/virtual_network',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'virtualNetworks',
        scope: 'resource group',
        icon: '/icons/network/virtual-networks.png',
        code: '',
      },
      {
        name: 'subnet',
        slug: 'snet-',
        description:
          'Subnets in Azure represent a range within a Virtual Network that can have its own security and networking settings. Different types of Azure resources can be connected to different subnets within the same Virtual Network.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-subnet',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/subnet',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'virtualnetworks / subnets',
        scope: 'virtual network',
        icon: '/icons/network/subnets.png',
        code: '',
      },
      {
        name: 'virtual network peering',
        slug: 'peer-',
        description:
          'Virtual Network Peering in Azure allows for seamless connectivity between Azure Virtual Networks, enabling resources in either Virtual Network to communicate with each other as if they are within the same network.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-peering',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/virtual_network_peering',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'virtualNetworks / virtualNetworkPeerings',
        scope: 'virtual network',
        icon: '/icons/network/virtual-networks.png',
        code: '',
      },
      {
        name: 'virtual wide-area-network',
        slug: 'vwan-',
        description:
          'Azure Virtual WAN is a networking service that brings many networking, security, and routing functionalities together to provide a single operational interface. It enables global transit network architecture by connecting, and configuring multiple types of networks.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/virtual-wan/virtual-wan-about',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/virtual_wan',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'virtualWans',
        scope: 'resource group',
        icon: '/icons/network/virtual-wans.png',
        code: '',
      },
      {
        name: 'vpn gateway',
        slug: 'vpng-',
        description:
          'Azure VPN Gateway connects your on-premises networks to Azure through Site-to-Site VPNs in a similar way that you set up and connect to a remote branch office. It allows secure connections from on-premises networks to Azure virtual networks.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-about-vpngateways',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/vpn_gateway',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'vpnGateways',
        scope: 'resource group',
        icon: '/icons/network/virtual-network-gateways.png',
        code: '',
      },
      {
        name: 'vpn connection',
        slug: 'vcn-',
        description:
          'A VPN Connection in Azure is used to connect a virtual network gateway and a local network gateway, which is typically your on-premises network. It provides a secure, encrypted connection over the internet between your Azure virtual network and your on-premise network.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-howto-site-to-site-resource-manager-portal',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/vpn_connection',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'vpnGateways / vpnConnections',
        scope: 'VPN gateway',
        icon: '/icons/network/virtual-network-gateways.png',
        code: '',
      },
      {
        name: 'vpn site',
        slug: 'vst-',
        description:
          'A VPN Site in Azure represents your on-premises location for a Site-to-Site VPN. It holds the VPN device information, such as the public IP address and the configuration values needed to connect with the VPN device.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-about-vpn-devices',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/vpn_site',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'vpnSites',
        scope: 'resource group',
        icon: '/icons/network/virtual-network-gateways.png',
        code: '',
      },
      {
        name: 'virtual network gateway',
        slug: 'vgw-',
        description:
          'A Virtual Network Gateway in Azure provides the capability to establish IPsec/IKE VPN tunnels between your virtual network and your on-premises hardware, or from a virtual network to a virtual network within Azure.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-about-vpngateways',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/virtual_network_gateway',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'virtualNetworkGateways',
        scope: 'resource group',
        icon: '/icons/network/virtual-network-gateways.png',
        code: '',
      },
      {
        name: 'web application firewall (waf) policy',
        slug: 'waf',
        description:
          'Azure Web Application Firewall (WAF) policy provides centralized protection of your web applications from common exploits and vulnerabilities. WAF on Azure Front Door protects your applications from common threats such as SQL injection and cross-site scripting.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/web-application-firewall/afds/afds-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/web_application_firewall_policy',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'firewallPolicies',
        scope: 'resource group',
        icon: '/icons/security/firewall.png',
        code: '',
      },
      {
        name: '(waf) policy rule group',
        slug: 'wafrg',
        description:
          'A WAF Policy Rule Group in Azure represents a set of rules for a Web Application Firewall to act upon. The rules in a group are used to filter and control the incoming traffic to the web application.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/web-application-firewall/afds/waf-front-door-create-portal',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/web_application_firewall_policy',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'firewallPolicies / ruleGroups',
        scope: 'firewall policy',
        icon: '/icons/security/firewall.png',
        code: '',
      },
    ],
  },
  {
    items: [
      {
        name: 'app service environment',
        slug: 'ase-',
        description:
          'Azure App Service Environment is a fully isolated and dedicated environment for securely running App Service apps at high scale, including Web Apps, Mobile Apps, and APIs.',
        length: '2-60',
        category: Categories.COMPUTEANDWEB,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/app-service/environment/intro',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/app_service_environment',
        restrictions:
          'Alphanumeric, hyphens and Unicode characters that can be mapped to PunycodeCan not start or end with hyphen.',
        resource: 'Microsoft.Web',
        entity: 'sites',
        scope: 'global or per domain. See note below.',
        icon: '/icons/web/app-service-environments.png',
        code: '',
      },
      {
        name: 'app service plan',
        slug: 'plan-',
        description:
          'An Azure App Service Plan defines a set of compute resources for a web app to run, including the Tier, Number of Instances, and Size of the VMs.',
        length: '1-40',
        category: Categories.COMPUTEANDWEB,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/app-service/overview-hosting-plans',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/app_service_plan',
        restrictions:
          'Alphanumeric, hyphens and Unicode characters that can be mapped to Punycode',
        resource: 'Microsoft.Web',
        entity: 'serverfarms',
        scope: 'resource group',
        icon: '/icons/web/app-service-plans.png',
        code: '',
      },
      {
        name: 'availability set',
        slug: 'avail-',
        description:
          "An Availability Set is a logical grouping capability for isolating VM resources from each other when they're deployed.",
        length: '1-80',
        category: Categories.COMPUTEANDWEB,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/virtual-machines/availability',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/availability_set',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric. End with alphanumeric or underscore.',
        resource: 'Microsoft.Compute',
        entity: 'availabilitySets',
        scope: 'resource group',
        icon: '/icons/compute/availability-sets.png',
        code: '',
      },
      {
        name: 'arc enabled server',
        slug: 'arcs-',
        description:
          'Azure Arc-enabled servers allow you to manage your Windows and Linux machines hosted outside of Azure, on your corporate network, or other cloud provider, similar to how you manage native Azure virtual machines.',
        length: '1-40',
        category: Categories.COMPUTEANDWEB,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/azure-arc/servers/overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/azure_arc_enabled_server',
        restrictions:
          'Alphanumeric, hyphens and Unicode characters that can be mapped to Punycode',
        resource: 'Microsoft.Web',
        entity: 'serverfarms',
        scope: 'resource group',
        icon: '/icons/compute/vm.png',
        code: '',
      },
      {
        name: 'arc enabled kubernetes cluster',
        slug: 'arck',
        description:
          'Azure Arc-enabled Kubernetes enables you to attach and configure Kubernetes clusters anywhere using Azure. When a Kubernetes cluster is attached to Azure Arc, it will appear in the Azure portal, where you can use familiar Azure services and management capabilities.',
        length: '1-63',
        category: Categories.COMPUTEANDWEB,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/azure-arc/kubernetes/overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/azure_arc_enabled_kubernetes_cluster',
        restrictions:
          'Alphanumerics, underscores, and hyphens. Start and end with alphanumeric.',
        resource: 'Microsoft.ContainerService',
        entity: 'managedClusters',
        scope: 'resource group',
        icon: '/icons/compute/kubernetes-services.png',
        code: '',
      },
      {
        name: 'cloud service',
        slug: 'cld-',
        description:
          'Azure Cloud Services is an example of a platform as a service (PaaS). It lets developers concentrate on their application logic, while Azure takes care of the infrastructure needed to run and scale the apps.',
        length: '1-15',
        category: Categories.COMPUTEANDWEB,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/cloud-services/cloud-services-choose-me',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/cloud_service',
        restrictions:
          'Can not use spaces, control characters, or these characters:~ ! @ # $ % ^ & * ( ) = + _ [ ] { }  | ;. Can not start with underscore. Can not end with period or hyphen.',
        resource: 'Microsoft.Compute',
        entity: 'cloudservices',
        scope: 'resource group',
        icon: '/icons/compute/cloud-services.png',
        code: '',
      },
      {
        name: 'disk encryption set',
        slug: 'des',
        description:
          'Azure Disk Encryption Sets is a resource that is used to provide disk encryption keys for Azure managed disks. It uses keys from your Azure Key Vault to encrypt and decrypt the disks of your virtual machines.',
        length: '1-80',
        category: Categories.COMPUTEANDWEB,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/virtual-machines/disk-encryption-set-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/disk_encryption_set',
        restrictions: 'Alphanumerics, underscores, and hyphens.',
        resource: 'Microsoft.Compute',
        entity: 'diskEncryptionSets',
        scope: 'resource group',
        icon: '/icons/compute/disk-encryption-sets.png',
        code: '',
      },
      {
        name: 'function app',
        slug: 'func-',
        description:
          'Azure Function App is a serverless compute service that lets you run event-triggered code without having to explicitly provision or manage infrastructure.',
        length: '2-60',
        category: Categories.COMPUTEANDWEB,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/azure-functions/functions-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/function_app',
        restrictions:
          'Alphanumeric, hyphens and Unicode characters that can be mapped to PunycodeCan not start or end with hyphen.',
        resource: 'Microsoft.Web',
        entity: 'sites',
        scope: 'global or per domain. See note below.',
        icon: '/icons/compute/function-apps.png',
        code: '',
      },
      {
        name: 'gallery',
        slug: 'gal',
        description:
          "Azure Shared Image Gallery is a service that helps you build structure and organization around your images. It provides grouping of image definitions within a 'gallery' container where each can have multiple versions.",
        length: '1-80',
        category: Categories.COMPUTEANDWEB,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/virtual-machines/shared-image-galleries',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/shared_image_gallery',
        restrictions:
          'Alphanumerics and periods. Start and end with alphanumeric.',
        resource: 'Microsoft.Compute',
        entity: 'galleries',
        scope: 'resource group',
        icon: '/icons/compute/shared-image-galleries.png',
        code: '',
      },
      {
        name: 'managed disk (os)',
        slug: 'osdisk',
        description:
          'Azure Managed Disks are block-level storage volumes that are managed by Azure and used with Azure Virtual Machines. Managed Disks are like a physical disk in an on-premises server but virtualized.',
        length: '1-80',
        category: Categories.COMPUTEANDWEB,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/virtual-machines/managed-disks-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/managed_disk',
        restrictions: 'Alphanumerics, underscores, and hyphens.',
        resource: 'Microsoft.Compute',
        entity: 'disks',
        scope: 'resource group',
        icon: '/icons/compute/disks.png',
        code: '',
      },
    ],
  },
  {
    items: [
      {
        name: 'managed disk (data)',
        slug: 'disk',
        description:
          'Azure Managed Disks for data are block-level storage volumes that manage your data, used with Azure Virtual Machines. They operate like a physical disk in an on-premises server but are virtualized.',
        length: '1-80',
        category: Categories.COMPUTEANDWEB,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/virtual-machines/managed-disks-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/managed_disk',
        restrictions: 'Alphanumerics, underscores, and hyphens.',
        resource: 'Microsoft.Compute',
        entity: 'disks',
        scope: 'resource group',
        icon: '/icons/compute/disks.png',
        code: '',
      },
      {
        name: 'notification hubs',
        slug: 'ntf-',
        description:
          'Azure Notification Hubs provide a scalable, tailored notification infrastructure that enables you to push notifications from any backend (in the cloud or on-premises) to any platform (iOS, Android, Windows, etc.).',
        length: '1-260',
        category: Categories.COMPUTEANDWEB,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/notification-hubs/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/notification_hub',
        restrictions:
          'Alphanumerics, periods, hyphens, and underscores. Start alphanumeric.',
        resource: 'Microsoft.NotificationHubs',
        entity: 'namespaces / notificationHubs',
        scope: 'namespace',
        icon: '/icons/mobile/notification-hubs.png',
        code: '',
      },
      {
        name: 'notification hubs namespace',
        slug: 'ntfns-',
        description:
          'Azure Notification Hubs Namespaces provide a unique scoping container, in which you can create multiple notification hubs.',
        length: '6-50',
        category: Categories.COMPUTEANDWEB,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/notification-hubs/notification-hubs-push-notification-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/notification_hub_namespace',
        restrictions:
          'Alphanumerics and hyphens. Start with letter. End with alphanumeric.',
        resource: 'Microsoft.NotificationHubs',
        entity: 'namespaces',
        scope: 'global',
        icon: '/icons/mobile/notification-hubs.png',
        code: '',
      },
      {
        name: 'snapshot',
        slug: 'snap-',
        description:
          'Azure Snapshots are read-only, full copies of managed disks that are used to create exact replicas or to restore a disk to a previous state.',
        length: '1-80',
        category: Categories.COMPUTEANDWEB,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/virtual-machines/disks-incremental-snapshots',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/snapshot',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric. End with alphanumeric or underscore.',
        resource: 'Microsoft.Compute',
        entity: 'snapshots',
        scope: 'resource group',
        icon: '/icons/compute/disk-snapshots.png',
        code: '',
      },
      {
        name: 'static web app',
        slug: 'stapp',
        description:
          'Azure Static Web Apps is a service that automatically builds and deploys full stack web apps to Azure from a GitHub repository.',
        length: '2-60',
        category: Categories.COMPUTEANDWEB,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/static-web-apps/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/static_site',
        restrictions:
          'Alphanumeric, hyphens and Unicode characters that can be mapped to Punycode. Can not start or end with hyphen.',
        resource: 'Microsoft.Web',
        entity: 'sites',
        scope: 'global or per domain. See note below.',
        icon: '/icons/web/app-services.png',
        code: '',
      },
      {
        name: 'virtual machine',
        slug: 'vm',
        description:
          'Azure Virtual Machines (VMs) provide on-demand, high-scale, secure, virtualized infrastructure using Windows or Linux.',
        length: '1-15/1-64',
        category: Categories.COMPUTEANDWEB,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/virtual-machines/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/virtual_machine',
        restrictions:
          'Can not use spaces, control characters, or these characters: ~ ! @ # $ % ^ & * ( ) = + _ [ ] { }  | ;. Windows VMs Can not include period or end with hyphen. Linux VMs Can not end with period or hyphen.',
        resource: 'Microsoft.Compute',
        entity: 'virtualMachines',
        scope: 'resource group',
        icon: '/icons/compute/vm.png',
        code: '',
      },
      {
        name: 'virtual machine scale set',
        slug: 'vmss-',
        description:
          'Azure Virtual Machine Scale Sets allow you to create and manage a group of identical, load balanced VMs, scaling automatically in response to demand.',
        length: '1-15/1-64',
        category: Categories.COMPUTEANDWEB,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/virtual_machine_scale_set',
        restrictions:
          'Can not use spaces, control characters, or these characters: ~ ! @ # $ % ^ & * ( ) = + _ [ ] { }  | ;. Can not start with underscore. Can not end with period or hyphen.',
        resource: 'Microsoft.Compute',
        entity: 'virtualMachineScaleSets',
        scope: 'resource group',
        icon: '/icons/compute/vm-scale-set.png',
        code: '',
      },
      {
        name: 'vm storage account',
        slug: 'stvm',
        description:
          'Azure Storage Accounts offer a unique namespace to store and access your Azure Storage data objects.',
        length: '3-24',
        category: Categories.COMPUTEANDWEB,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/storage_account',
        restrictions: 'Lowercase letters and numbers.',
        resource: 'Microsoft.Storage',
        entity: 'storageAccounts',
        scope: 'global',
        icon: '/icons/storage/storage-accounts.png',
        code: '',
      },
      {
        name: 'web app',
        slug: 'app-',
        description:
          'Azure Web Apps is a fully managed platform that enables you to build, deploy, and scale enterprise-grade web applications with ease.',
        length: '2-60',
        category: Categories.COMPUTEANDWEB,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/app-service/overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/app_service',
        restrictions:
          'Alphanumeric, hyphens and Unicode characters that can be mapped to Punycode. Can not start or end with hyphen.',
        resource: 'Microsoft.Web',
        entity: 'sites',
        scope: 'global or per domain. See note below.',
        icon: '/icons/web/app-services.png',
        code: '',
      },
    ],
  },
  {
    items: [
      {
        name: 'aks cluster',
        slug: 'aks-',
        description:
          'Azure Kubernetes Service (AKS) is a managed container orchestration service provided by Azure, which simplifies Kubernetes management, deployment, and operations.',
        length: '1-63',
        category: Categories.CONTAINERS,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/aks/intro-kubernetes',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/kubernetes_cluster',
        restrictions:
          'Alphanumerics, underscores, and hyphens. Start and end with alphanumeric.',
        resource: 'Microsoft.ContainerService',
        entity: 'managedClusters',
        scope: 'resource group',
        icon: '/icons/compute/kubernetes-services.png',
        code: '',
      },
      {
        name: 'container registry',
        slug: 'cr',
        description:
          'Azure Container Registry allows you to store and manage container images across all types of Azure deployments.',
        length: '5-50',
        category: Categories.CONTAINERS,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/container-registry/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/container_registry',
        restrictions: 'Alphanumerics.',
        resource: 'Microsoft.ContainerRegistry',
        entity: 'registries',
        scope: 'global',
        icon: '/icons/compute/container-registries.png',
        code: '',
      },
      {
        name: 'container instance',
        slug: 'ci',
        description:
          'Azure Container Instances offers the fastest and simplest way to run a container in Azure, without having to manage any virtual machines or adopt a higher-level service.',
        length: '1-63',
        category: Categories.CONTAINERS,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/container-instances/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/container_group',
        restrictions:
          "Lowercase letters, numbers, and hyphens. Can not start or end with hyphen. Consecutive hyphens aren't allowed.",
        resource: 'Microsoft.ContainerInstance',
        entity: 'containerGroups',
        scope: 'resource group',
        icon: '/icons/compute/container-instances.png',
        code: '',
      },
      {
        name: 'service fabric cluster',
        slug: 'sf-',
        description:
          'Azure Service Fabric is a distributed systems platform that makes it easy to package, deploy, and manage scalable and reliable microservices and containers.',
        length: '4-23',
        category: Categories.CONTAINERS,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/service-fabric/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/service_fabric_cluster',
        restrictions:
          'Lowercase letters, numbers, and hyphens. Start with lowercase letter. End with lowercase letter or number.',
        resource: 'Microsoft.ServiceFabric',
        entity: 'clusters',
        scope: 'region',
        icon: '/icons/compute/service-fabric-clusters.png',
        code: '',
      },
    ],
  },
  {
    items: [
      {
        name: 'cosmos db database account',
        slug: 'cdb-',
        description:
          'Azure Cosmos DB is a globally distributed, multi-model database service that enables you to elastically and independently scale throughput and storage across any number of Azure regions worldwide.',
        length: '3-44',
        category: Categories.DATABASES,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/cosmos-db/introduction',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/cosmosdb_account',
        restrictions:
          'Lowercase letters, numbers, and hyphens. Start with lowercase letter or number.',
        resource: 'Microsoft.DocumentDB',
        entity: 'databaseAccounts',
        scope: 'global',
        icon: '/icons/database/cosmos-db.png',
        code: '',
      },
      {
        name: 'cache for redis instance',
        slug: 'redis-',
        description:
          'Azure Cache for Redis offers an in-memory data store based on software Redis. It gives you access to a secure, dedicated Redis cache, managed by Microsoft.',
        length: '1-63',
        category: Categories.DATABASES,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/azure-cache-for-redis/cache-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/redis_cache',
        restrictions:
          'Alphanumerics and hyphens. Start and end with alphanumeric. Consecutive hyphens not allowed.',
        resource: 'Microsoft.Cache',
        entity: 'Redis',
        scope: 'global',
        icon: '/icons/database/cache-for-redis.png',
        code: '',
      },
      {
        name: 'sql database server',
        slug: 'sql-',
        description:
          'Azure SQL Database is a general-purpose relational database service, provided as a fully managed platform by Microsoft. You can build data-driven applications and websites in the programming language of your choice without needing to manage infrastructure.',
        length: '1-63',
        category: Categories.DATABASES,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/azure-sql/database/sql-database-paas-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/sql_server',
        restrictions:
          'Lowercase letters, numbers, and hyphens. Can not start or end with hyphen.',
        resource: 'Microsoft.Sql',
        entity: 'servers',
        scope: 'global',
        icon: '/icons/database/sql-servers.png',
        code: '',
      },
      {
        name: 'sql database',
        slug: 'sqldb-',
        description:
          'Azure SQL Database is a fully managed platform as a service (PaaS) database engine that handles most of the database management functions such as upgrading, patching, backups, and monitoring without user involvement.',
        length: '1-128',
        category: Categories.DATABASES,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/azure-sql/database/sql-database-paas-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/sql_database',
        restrictions:
          'Can not use:<>%&:/? or control charactersCan not end with period or space.',
        resource: 'Microsoft.Sql',
        entity: 'servers / databases',
        scope: 'server',
        icon: '/icons/database/sql-databases.png',
        code: '',
      },
      {
        name: 'synapse analytics',
        slug: 'syn',
        description:
          'Azure Synapse Analytics is an integrated analytics service that accelerates the time it takes to get insights and to unlock the value of your data.',
        length: '1-50',
        category: Categories.DATABASES,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/synapse-analytics/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/synapse_workspace',
        restrictions:
          'Lowercase letters, hyphens, and numbers. Start and end with letter or number. Can not contain -ondemand',
        resource: 'Microsoft.Synapse',
        entity: 'workspaces',
        scope: 'global',
        icon: '/icons/database/synapse-analytics.png',
        code: '',
      },
      {
        name: 'synapse analytics workspace',
        slug: 'synw',
        description:
          'Azure Synapse Analytics Workspaces provide a single point of control for security, monitoring, and metadata management. Each workspace is tied to an Azure Data Lake Store, allowing to manage big data easily.',
        length: '1-50',
        category: Categories.DATABASES,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/synapse-analytics/overview-what-is-workspace',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/synapse_workspace',
        restrictions:
          'Lowercase letters, hyphens, and numbers. Start and end with letter or number. Can not contain -ondemand',
        resource: 'Microsoft.Synapse',
        entity: 'workspaces',
        scope: 'global',
        icon: '/icons/analytics/synapse-analytics.png',
        code: '',
      },
      {
        name: 'synapse analytics sql dedicated pool',
        slug: 'syndp',
        description:
          'Azure Synapse SQL Dedicated Pool (formerly SQL Data Warehouse) is a distributed system designed to perform analytics on large data. It supports massive parallel processing (MPP), which makes it suitable for running high-performance analytics.',
        length: '1-60',
        category: Categories.DATABASES,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/synapse-analytics/sql-data-warehouse/sql-data-warehouse-overview-what-is',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/synapse_sql_pool',
        restrictions:
          'Can not contain <>%&:/?@- or control characters. Can not end with . or space. Can not contain reserved word.',
        resource: 'Microsoft.Synapse',
        entity: 'workspaces / sqlPools',
        scope: 'workspace',
        icon: '/icons/analytics/synapse-analytics.png',
        code: '',
      },
      {
        name: 'synapse analytics spark pool',
        slug: 'synsp',
        description:
          'Spark pools in Azure Synapse Analytics are used for big data processing. It provides a computation cluster that allows you to analyze large amounts of data using Spark jobs.',
        length: '1-15',
        category: Categories.DATABASES,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/synapse-analytics/spark/apache-spark-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/synapse_spark_pool',
        restrictions:
          'Letters and numbers. Start with letter. End with letter or number. Can not contain reserved word.',
        resource: 'Microsoft.Synapse',
        entity: 'workspaces / bigDataPools',
        scope: 'workspace',
        icon: '/icons/analytics/synapse-analytics.png',
        code: '',
      },
    ],
  },
  {
    items: [
      {
        name: 'mysql database',
        slug: 'mysql-',
        description:
          'Azure Database for MySQL provides a managed database service for app development and deployment that allows you to stand up a MySQL database in minutes and scale on the fly.',
        length: '1-63',
        category: Categories.DATABASES,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/mysql/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/mysql_database',
        restrictions: 'Alphanumerics and hyphens.',
        resource: 'Microsoft.DBforMySQL',
        entity: 'servers / databases',
        scope: 'servers',
        icon: '/icons/database/database-for-mysql-servers.png',
        code: '',
      },
      {
        name: 'postgresql database',
        slug: 'psql-',
        description:
          'Azure Database for PostgreSQL provides a managed database service for app development and deployment that allows you to stand up a PostgreSQL database in minutes and scale on the fly.',
        length: '1-63',
        category: Categories.DATABASES,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/postgresql/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/postgresql_database',
        restrictions: 'Alphanumerics and hyphens.',
        resource: 'Microsoft.DBforPostgreSQL',
        entity: 'servers / databases',
        scope: 'servers',
        icon: '/icons/database/database-for-postgresql-servers.png',
        code: '',
      },
      {
        name: 'sql server stretch database',
        slug: 'sqlsdb-',
        description:
          'Azure SQL Stretch Database is a service that lets you extend your SQL Server databases into the Azure cloud. This allows you to keep more of your historical data at your fingertips.',
        length: '1-128',
        category: Categories.DATABASES,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/sql-server-stretch-database/stretch-database',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/sql_database',
        restrictions:
          'Can not use:<>%&:/? or control charactersCan not end with period or space.',
        resource: 'Microsoft.Sql',
        entity: 'servers / databases',
        scope: 'server',
        icon: '/icons/database/sql-server-stretch-databases.png',
        code: '',
      },
      {
        name: 'sql managed instance',
        slug: 'sqlmi-',
        description:
          'Azure SQL Managed Instance is a fully managed SQL Server Database Engine hosted in Azure cloud which provides most of the SQL Server database engine features.',
        length: '1-63',
        category: Categories.DATABASES,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/azure-sql/managed-instance/sql-managed-instance-paas-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/sql_managed_instance',
        restrictions:
          'Lowercase letters, numbers, and hyphens. Can not start or end with hyphen.',
        resource: 'Microsoft.Sql',
        entity: 'managedInstances',
        scope: 'global',
        icon: '/icons/database/sql-managed-instances.png',
        code: '',
      },
      {
        name: 'storage account',
        slug: 'st',
        description:
          'Azure Storage Account is a modern data storage solution that provides secure, scalable, and durable storage services. It includes Blob storage, File Storage, Queue Storage, Table Storage, and Azure Data Lake Storage.',
        length: '3-24',
        category: Categories.STORAGE,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/storage_account',
        restrictions: 'Lowercase letters and numbers.',
        resource: 'Microsoft.Storage',
        entity: 'storageAccounts',
        scope: 'global',
        icon: '/icons/storage/storage-accounts.png',
        code: '',
      },
      {
        name: 'storsimple',
        slug: 'ssimp',
        description:
          'Azure StorSimple is a hybrid cloud storage solution that integrates your on-premises IT environment with the Azure storage infrastructure. It provides primary storage, archive, backup, and disaster recovery, while reducing cost and IT workload.',
        length: '2-50',
        category: Categories.STORAGE,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/storsimple/storsimple-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/storsimple_device',
        restrictions:
          'Alphanumerics and hyphens. Start with letter. End with alphanumeric.',
        resource: 'Microsoft.StorSimple',
        entity: 'managers',
        scope: 'resource group',
        icon: '/icons/storage/storsimple-device-managers.png',
        code: '',
      },
      {
        name: 'search service',
        slug: 'srch-',
        description:
          "Azure Cognitive Search is a fully managed cloud search service that provides a rich search experience to custom applications. You can populate it with your own data and the service finds what's relevant to user queries.",
        length: '2-64',
        category: Categories.AIANDML,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/search/search-what-is-azure-search',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/search_service',
        restrictions:
          'Alphanumerics and hyphens. Start and end with alphanumeric.',
        resource: 'Microsoft.Search',
        entity: 'searchServices',
        scope: 'resource group',
        icon: '/icons/web/search.png',
        code: '',
      },
      {
        name: 'cognitive services',
        slug: 'cog-',
        description:
          'Azure Cognitive Services is a collection of APIs, SDKs, and services available to help developers build intelligent applications without having direct AI or data science skills or knowledge, by enabling them to easily add cognitive features into their applications.',
        length: '2-64',
        category: Categories.AIANDML,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/cognitive-services/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/cognitive_account',
        restrictions:
          'Alphanumerics and hyphens. Start and end with alphanumeric.',
        resource: 'Microsoft.CognitiveServices',
        entity: 'accounts',
        scope: 'resource group',
        icon: '/icons/ml/cognitive-services.png',
        code: '',
      },
      {
        name: 'machine learning workspace',
        slug: 'mlw-',
        description:
          'Azure Machine Learning workspace is a centralized place to work with all the artifacts you create when you use Azure Machine Learning. The workspace keeps a history of all training runs, including logs, metrics, output, and a snapshot of your scripts.',
        length: '1-260',
        category: Categories.AIANDML,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/machine-learning/concept-workspace',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/machine_learning_workspace',
        restrictions:
          'Can not use:<>%&:?+/ or control charactersCan not end with a space.',
        resource: 'Microsoft.MachineLearning',
        entity: 'workspaces',
        scope: 'resource group',
        icon: '/icons/ml/machine-learning-service-workspaces.png',
        code: '',
      },
    ],
  },
  {
    items: [
      {
        name: 'analysis services server',
        slug: 'as',
        description:
          "Azure Analysis Services is a fully managed platform as a service (PaaS) that provides enterprise-grade data models in the cloud. It is a part of Microsoft's business analytics stack that lets you develop semantic data models to simplify data analysis and reporting.",
        length: '3-63',
        category: Categories.ANALYTICSANDIOT,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/analysis-services/analysis-services-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/analysis_services_server',
        restrictions:
          'Lowercase letters and numbers. Start with lowercase letter.',
        resource: 'Microsoft.AnalysisServices',
        entity: 'servers',
        scope: 'resource group',
        icon: '/icons/analytics/analysis-services.png',
        code: '',
      },
      {
        name: 'databricks workspace',
        slug: 'dbw-',
        description:
          'Azure Databricks is an Apache Spark-based analytics platform optimized for the Microsoft Azure cloud services platform. It provides a workspace environment where you can create Apache Spark clusters, write notebooks, and build workflows.',
        length: '3-64',
        category: Categories.ANALYTICSANDIOT,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/databricks/scenarios/what-is-azure-databricks',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/databricks_workspace',
        restrictions: 'Alphanumerics, underscores, and hyphens',
        resource: 'Microsoft.Databricks',
        entity: 'workspaces',
        scope: 'resource group',
        icon: '/icons/analytics/databricks.png',
        code: '',
      },
      {
        name: 'stream analytics',
        slug: 'asa-',
        description:
          'Azure Stream Analytics is a real-time analytics and complex event-processing engine that is designed to analyze and visualize streaming data in real-time. It enables you to setup real-time analytic computations on streaming data from multiple sources such as devices, sensors, web sites, social media, applications, infrastructure systems, and more.',
        length: '3-63',
        category: Categories.ANALYTICSANDIOT,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/stream-analytics/stream-analytics-introduction',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/stream_analytics_job',
        restrictions: 'Alphanumerics, hyphens, and underscores.',
        resource: 'Microsoft.StreamAnalytics',
        entity: 'streamingjobs',
        scope: 'resource group',
        icon: '/icons/analytics/stream-analytics-jobs.png',
        code: '',
      },
      {
        name: 'data explorer cluster',
        slug: 'dec',
        description:
          'Azure Data Explorer (ADX) is a fast, fully managed data analytics service for real-time analysis on large volumes of data streaming from applications, websites, IoT devices, and more. You can use Azure Data Explorer to collect, store, and analyze diverse data to improve products, enhance customer experiences, monitor devices, and boost operations.',
        length: '4-22',
        category: Categories.ANALYTICSANDIOT,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/data-explorer/data-explorer-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/data_explorer_cluster',
        restrictions: 'Lowercase letters and numbers. Start with letter.',
        resource: 'Microsoft.Kusto',
        entity: 'clusters',
        scope: 'global',
        icon: '/icons/analytics/data-explorer-clusters.png',
        code: '',
      },
      {
        name: 'data explorer cluster database',
        slug: 'dedb',
        description:
          'A database in Azure Data Explorer (ADX) is a logical container for data. Each database belongs to a cluster and contains a set of tables where each table is a collection of ordered columns.',
        length: '1-260',
        category: Categories.ANALYTICSANDIOT,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/data-explorer/kusto/management/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/data_explorer_database',
        restrictions: 'Alphanumerics, hyphens, spaces, and periods.',
        resource: 'Microsoft.Kusto',
        entity: '/clusters / databases',
        scope: 'cluster',
        icon: '/icons/analytics/data-explorer-clusters.png',
        code: '',
      },
      {
        name: 'data factory',
        slug: 'adf-',
        description:
          'Azure Data Factory is a cloud-based data integration service that allows you to create data-driven workflows for orchestrating and automating data movement and data transformation.',
        length: '3-63',
        category: Categories.ANALYTICSANDIOT,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/data-factory/introduction',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/data_factory',
        restrictions:
          'Alphanumerics and hyphens. Start and end with alphanumeric.',
        resource: 'Microsoft.DataFactory',
        entity: 'factories',
        scope: 'global',
        icon: '/icons/analytics/data-factories.png',
        code: '',
      },
      {
        name: 'data lake store account',
        slug: 'dls',
        description:
          'Azure Data Lake Store is an enterprise-wide hyper-scale repository for big data analytic workloads. It enables you to capture data of any size, type, and ingestion speed in one single place for operational and exploratory analytics.',
        length: '3-24',
        category: Categories.ANALYTICSANDIOT,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/data-lake-store/data-lake-store-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/data_lake_store',
        restrictions: 'Lowercase letters and numbers.',
        resource: 'Microsoft.DataLakeAnalytics',
        entity: 'accounts / dataLakeStoreAccounts',
        scope: 'account',
        icon: '/icons/database/data-lake.png',
        code: '',
      },
      {
        name: 'data lake analytics account',
        slug: 'dla',
        description:
          'Azure Data Lake Analytics is an on-demand analytics job service that simplifies big data. Instead of deploying, configuring, and tuning hardware, you write queries to transform your data and extract valuable insights.',
        length: '3-24',
        category: Categories.ANALYTICSANDIOT,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/data-lake-analytics/data-lake-analytics-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/data_lake_analytics_account',
        restrictions: 'Lowercase letters and numbers.',
        resource: 'Microsoft.DataLakeAnalytics',
        entity: 'accounts',
        scope: 'global',
        icon: '/icons/analytics/data-lake-analytics.png',
        code: '',
      },
      {
        name: 'event hub namespace',
        slug: 'evhns-',
        description:
          'Azure Event Hubs is a big data streaming platform and event ingestion service. The Event Hubs namespace provides a unique scoping container, in which you create one or more event hubs.',
        length: '6-50',
        category: Categories.ANALYTICSANDIOT,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-about',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/eventhub_namespace',
        restrictions:
          'Alphanumerics and hyphens. Start with letter. End with letter or number.',
        resource: 'Microsoft.EventHub',
        entity: 'namespaces',
        scope: 'global',
        icon: '/icons/analytics/event-hubs.png',
        code: '',
      },
      {
        name: 'event hub',
        slug: 'evh-',
        description:
          'An Event Hub is a unique entity within an Event Hubs namespace that provides a target for applications to send event data. It can receive and process millions of events per second, so you can process and analyze the massive amounts of data produced by your connected devices and applications.',
        length: '6-50',
        category: Categories.ANALYTICSANDIOT,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-about',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/eventhub',
        restrictions:
          'Alphanumerics and hyphens. Start with letter. End with letter or number.',
        resource: 'Microsoft.EventHub',
        entity: 'clusters',
        scope: 'resource group',
        icon: '/icons/analytics/event-hubs.png',
        code: '',
      },
    ],
  },
  {
    items: [
      {
        name: 'event grid',
        slug: 'evgd-',
        description:
          'Azure Event Grid is a service that manages all the events your application needs, from a single place. It allows for uniform event consumption using a publish-subscribe model.',
        length: '3-50',
        category: Categories.ANALYTICSANDIOT,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/event-grid/overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/eventgrid_domain',
        restrictions: 'Alphanumerics and hyphens.',
        resource: 'Microsoft.EventGrid',
        entity: 'domains',
        scope: 'resource group',
        icon: '/icons/integration/event-grid-topics.png',
        code: '',
      },
      {
        name: 'event grid subscription',
        slug: 'evgs-',
        description:
          'Event Grid subscriptions represent the relationship between an event source and an endpoint. They define the events you want to track, and where to send the events.',
        length: '3-64',
        category: Categories.ANALYTICSANDIOT,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/event-grid/overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/eventgrid_event_subscription',
        restrictions: 'Alphanumerics and hyphens.',
        resource: 'Microsoft.EventGrid',
        entity: 'eventSubscriptions',
        scope: 'resource group',
        icon: '/icons/integration/event-grid-subscriptions.png',
        code: '',
      },
      {
        name: 'event grid topic',
        slug: 'evgt-',
        description:
          'Event Grid Topics provide a user-defined endpoint that you post your event data to. Subscribers decide which topics they want to subscribe to.',
        length: '3-50',
        category: Categories.ANALYTICSANDIOT,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/event-grid/overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/eventgrid_topic',
        restrictions: 'Alphanumerics and hyphens.',
        resource: 'Microsoft.EventGrid',
        entity: 'domains / topics',
        scope: 'domain',
        icon: '/icons/integration/event-grid-topics.png',
        code: '',
      },
      {
        name: 'hdinsight - hadoop cluster',
        slug: 'hadp-',
        description:
          'Azure HDInsight Hadoop cluster is a cloud distribution of Hadoop components. It provides a software framework designed for processing, analyzing and deriving insights from data.',
        length: '3-59',
        category: Categories.ANALYTICSANDIOT,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/hdinsight/hadoop/hadoop-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/hdinsight_hadoop_cluster',
        restrictions:
          'Alphanumerics and hyphens. Start and end with letter or number.',
        resource: 'Microsoft.HDInsight',
        entity: 'clusters',
        scope: 'global',
        icon: '/icons/analytics/hdinsightclusters.png',
        code: '',
      },
      {
        name: 'hdinsight - hbase cluster',
        slug: 'hbase-',
        description:
          'Azure HDInsight HBase cluster is a NoSQL database built on Hadoop that provides random access and strong consistency for large amounts of unstructured and semi-structured data.',
        length: '3-59',
        category: Categories.ANALYTICSANDIOT,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/hdinsight/hbase/hbase-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/hdinsight_hbase_cluster',
        restrictions:
          'Alphanumerics and hyphens. Start and end with letter or number.',
        resource: 'Microsoft.HDInsight',
        entity: 'clusters',
        scope: 'global',
        icon: '/icons/analytics/hdinsightclusters.png',
        code: '',
      },
      {
        name: 'hdinsight - kafka cluster',
        slug: 'kafka-',
        description:
          'Azure HDInsight Kafka cluster is a managed platform that makes it easy to process streams of real-time data. It offers an effective platform to ingest data from IoT devices and real-time applications.',
        length: '3-59',
        category: Categories.ANALYTICSANDIOT,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/hdinsight/kafka/apache-kafka-introduction',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/hdinsight_kafka_cluster',
        restrictions:
          'Alphanumerics and hyphens. Start and end with letter or number.',
        resource: 'Microsoft.HDInsight',
        entity: 'clusters',
        scope: 'global',
        icon: '/icons/analytics/hdinsightclusters.png',
        code: '',
      },
      {
        name: 'hdinsight - spark cluster',
        slug: 'spark-',
        description:
          'Azure HDInsight Spark cluster is an open-source, parallel-processing framework that supports in-memory processing to boost the performance of big-data analytic applications.',
        length: '3-59',
        category: Categories.ANALYTICSANDIOT,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/hdinsight/spark/apache-spark-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/hdinsight_spark_cluster',
        restrictions:
          'Alphanumerics and hyphens. Start and end with letter or number.',
        resource: 'Microsoft.HDInsight',
        entity: 'clusters',
        scope: 'global',
        icon: '/icons/analytics/hdinsightclusters.png',
        code: '',
      },
      {
        name: 'hdinsight - storm cluster',
        slug: 'storm-',
        description:
          "Azure HDInsight Storm cluster is a distributed real-time computation system for processing large volumes of high-velocity data. It's reliable, and you can use it with any programming language.",
        length: '3-59',
        category: Categories.ANALYTICSANDIOT,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/hdinsight/storm/apache-storm-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/hdinsight_storm_cluster',
        restrictions:
          'Alphanumerics and hyphens. Start and end with letter or number.',
        resource: 'Microsoft.HDInsight',
        entity: 'clusters',
        scope: 'global',
        icon: '/icons/analytics/hdinsightclusters.png',
        code: '',
      },
      {
        name: 'hdinsight - ml services cluster',
        slug: 'mls-',
        description:
          'Azure HDInsight ML Services cluster integrates R Server with Spark and the Apache Hadoop framework, providing an ideal environment for your machine learning workloads.',
        length: '3-59',
        category: Categories.ANALYTICSANDIOT,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/hdinsight/r-server/r-server-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/hdinsight_rserver_cluster',
        restrictions:
          'Alphanumerics and hyphens. Start and end with letter or number.',
        resource: 'Microsoft.HDInsight',
        entity: 'clusters',
        scope: 'global',
        icon: '/icons/analytics/hdinsightclusters.png',
        code: '',
      },
      {
        name: 'iot hub',
        slug: 'iot-',
        description:
          'Azure IoT Hub is a managed service that acts as a central message hub for bi-directional communication between your IoT application and the devices it manages.',
        length: '3-50',
        category: Categories.ANALYTICSANDIOT,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/iot-hub/about-iot-hub',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/iothub',
        restrictions: 'Alphanumerics and hyphens. Can not end with hyphen.',
        resource: 'Microsoft.Devices',
        entity: 'IotHubs',
        scope: 'global',
        icon: '/icons/iot/iot-hub.png',
        code: '',
      },
    ],
  },
  {
    items: [
      {
        name: 'provisioning services',
        slug: 'provs-',
        description:
          'Azure IoT Hub Device Provisioning Service is a helper service for IoT Hub that enables zero-touch, just-in-time provisioning to the right IoT hub without requiring human intervention.',
        length: '3-64',
        category: Categories.ANALYTICSANDIOT,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/iot-dps/about-iot-dps',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/iothub_dps',
        restrictions: 'Alphanumerics and hyphens. End with alphanumeric.',
        resource: 'Microsoft.Devices',
        entity: 'provisioningServices',
        scope: 'resource group',
        icon: '/icons/iot/device-provisioning-services.png',
        code: '',
      },
      {
        name: 'provisioning services certificate',
        slug: 'pcert-',
        description:
          'Certificates in the IoT Hub Device Provisioning Service enhance security in device provisioning by enabling provisioning services to verify the identity of devices.',
        length: '1-64',
        category: Categories.ANALYTICSANDIOT,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/iot-dps/how-to-verify-certificates',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/iothub_dps_certificate',
        restrictions: 'Alphanumerics, hyphens, periods, and underscores.',
        resource: 'Microsoft.Devices',
        entity: 'provisioningServices / certificates',
        scope: 'provisioningServices',
        icon: '/icons/iot/device-provisioning-services.png',
        code: '',
      },
      {
        name: 'power bi',
        slug: 'pbi-',
        description:
          'Power BI is a suite of business analytics tools by Microsoft that deliver insights throughout your organization. It connects to hundreds of data sources, simplifies data prep and drives ad hoc analysis.',
        length: '3-63',
        category: Categories.ANALYTICSANDIOT,
        learnUrl:
          'https://docs.microsoft.com/en-us/power-bi/fundamentals/power-bi-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/powerbi_embedded',
        restrictions:
          'Alphanumerics and hyphens. Can not start with hyphen. Can not use consecutive hyphens.',
        resource: 'Microsoft.PowerBI',
        entity: 'workspaceCollections',
        scope: 'region',
        icon: '/icons/general/allresources.png',
        code: '',
      },
      {
        name: 'time series insights',
        slug: 'tsi-',
        description:
          'Azure Time Series Insights is a fully managed analytics, storage, and visualization service for managing IoT-scale time-series data in the cloud. It provides a way to store, visualize, and query large amounts of time series data.',
        length: '1-90',
        category: Categories.ANALYTICSANDIOT,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/time-series-insights/time-series-insights-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/time_series_insights_environment_standard',
        restrictions: "Can not use:'<>%&:?/# or control characters",
        resource: 'Microsoft.TimeSeriesInsights',
        entity: 'environments',
        scope: 'resource group',
        icon: '/icons/iot/time-series-insights-environments.png',
        code: '',
      },
      {
        name: 'virtual desktop host pool',
        slug: 'vdp-',
        description:
          'Azure Virtual Desktop Host Pool is a collection of VMs in Azure Virtual Desktop environment. It hosts remote apps and desktops that users can access from anywhere.',
        length: '1-64',
        category: Categories.VIRTUALDESKTOP,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/virtual-desktop/host-pool',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/virtual_desktop_host_pool',
        restrictions: 'Alphanumerics, hyphens, and underscores.',
        resource: 'Microsoft.DesktopVirtualization',
        entity: 'hostPools',
        scope: 'resource group',
        icon: '/icons/compute/cloudsimple-virtual-machines.png',
        code: '',
      },
      {
        name: 'virtual desktop application group',
        slug: 'vdag-',
        description:
          "Azure Virtual Desktop Application Group is a logical grouping of applications installed on a host pool's session hosts. Users are granted access to an application group to use the apps.",
        length: '1-64',
        category: Categories.VIRTUALDESKTOP,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/virtual-desktop/manage-app-groups',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/virtual_desktop_application_group',
        restrictions: 'Alphanumerics, hyphens, and underscores.',
        resource: 'Microsoft.DesktopVirtualization',
        entity: 'applicationGroups',
        scope: 'resource group',
        icon: '/icons/compute/cloudsimple-virtual-machines.png',
        code: '',
      },
      {
        name: 'virtual desktop workspace',
        slug: 'vdws-',
        description:
          'Azure Virtual Desktop Workspace is a logical grouping of application groups in a host pool. Users are presented with resources from all the application groups in a workspace.',
        length: '1-64',
        category: Categories.VIRTUALDESKTOP,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/virtual-desktop/workspace',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/virtual_desktop_workspace',
        restrictions: 'Alphanumerics, hyphens, and underscores.',
        resource: 'Microsoft.DesktopVirtualization',
        entity: 'workspaces',
        scope: 'resource group',
        icon: '/icons/compute/workspaces.png',
        code: '',
      },
      {
        name: 'app configuration store',
        slug: 'appcs-',
        description:
          'Azure App Configuration provides a service to centrally manage application settings and feature flags. Modern programs, especially programs running in a cloud, generally have many components that are distributed in nature.',
        length: '5-50',
        category: Categories.DEVTOOLS,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/azure-app-configuration/overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/app_configuration',
        restrictions: 'Alphanumerics, underscores, and hyphens.',
        resource: 'Microsoft.AppConfiguration',
        entity: 'configurationStores',
        scope: 'resource group',
        icon: '/icons/integration/app-configuration.png',
        code: '',
      },
      {
        name: 'signalr',
        slug: 'sigr-',
        description:
          'Azure SignalR Service is an Azure managed service that adds real-time functionality to applications. SignalR Service is fully-managed, freeing you to focus on your application instead of hosting and scaling a SignalR server.',
        length: '3-63',
        category: Categories.DEVTOOLS,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/azure-signalr/signalr-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/signalr_service',
        restrictions:
          'Alphanumerics and hyphens. Start with letter. End with letter or number.',
        resource: 'Microsoft.SignalRService',
        entity: 'signalR',
        scope: 'global',
        icon: '/icons/web/signalr.png',
        code: '',
      },
    ],
  },
  {
    items: [
      {
        name: 'api management',
        slug: 'apim-',
        description:
          'Azure API Management is a full-featured service that enables customers to create, secure, publish, and analyze APIs in minutes. It helps organizations publish APIs to external, partner, and internal developers to unlock the potential of their data and services.',
        length: '1-50',
        category: Categories.INTEGRATION,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/api-management/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/api_management',
        restrictions:
          'Alphanumerics and hyphens. Start with letter and end with alphanumeric.',
        resource: 'Microsoft.ApiManagement',
        entity: 'service',
        scope: 'global',
        icon: '/icons/integration/api-management.png',
        code: '',
      },
      {
        name: 'integration account',
        slug: 'ia-',
        description:
          'Azure Integration Account is a component of Logic Apps service, providing a secure and scalable way to store and manage resources such as schemas, maps, partners, and agreements for enterprise integrations.',
        length: '1-80',
        category: Categories.INTEGRATION,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/logic-apps/logic-apps-enterprise-integration-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/logic_app_integration_account',
        restrictions:
          'Alphanumerics, hyphens, underscores, periods, and parenthesis.',
        resource: 'Microsoft.Logic',
        entity: 'integrationAccounts',
        scope: 'resource group',
        icon: '/icons/integration/integration-accounts.png',
        code: '',
      },
      {
        name: 'logic apps',
        slug: 'logic-',
        description:
          'Azure Logic Apps is a cloud-based service that enables users to schedule, automate, and orchestrate tasks, business processes, and workflows when you need to integrate apps, data, systems, and services across enterprises or organizations.',
        length: '1-43',
        category: Categories.INTEGRATION,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/logic-apps/logic-apps-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/logic_app_workflow',
        restrictions:
          'Alphanumerics, hyphens, underscores, periods, and parenthesis.',
        resource: 'Microsoft.Logic',
        entity: 'workflows',
        scope: 'resource group',
        icon: '/icons/integration/logic-apps.png',
        code: '',
      },
      {
        name: 'service bus',
        slug: 'sb-',
        description:
          'Azure Service Bus is a fully managed enterprise message broker with message queues and publish-subscribe topics. It provides a reliable and secure platform for asynchronous transfer of data and state.',
        length: '6-50',
        category: Categories.INTEGRATION,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/servicebus_namespace',
        restrictions:
          'Alphanumerics and hyphens. Start with a letter. End with a letter or number. For more information, see Create namespace.',
        resource: 'Microsoft.ServiceBus',
        entity: 'namespaces',
        scope: 'global',
        icon: '/icons/integration/service-bus.png',
        code: '',
      },
      {
        name: 'service bus queue',
        slug: 'sbq-',
        description:
          'Service Bus Queue supports a set of cloud-based, message-oriented middleware technologies including reliable message queuing and durable publish/subscribe messaging.',
        length: '1-260',
        category: Categories.INTEGRATION,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/servicebus_queue',
        restrictions:
          'Alphanumerics, periods, hyphens, underscores, and slashes. Start and end with alphanumeric.',
        resource: 'Microsoft.ServiceBus',
        entity: 'namespaces / queues',
        scope: 'namespace',
        icon: '/icons/integration/service-bus.png',
        code: '',
      },
      {
        name: 'service bus topic',
        slug: 'sbt-',
        description:
          'Service Bus Topic supports a publish/subscribe messaging communication model. It provides much more complex messaging solutions by allowing multiple, concurrent subscribers to independently retrieve published messages.',
        length: '1-260',
        category: Categories.INTEGRATION,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/servicebus_topic',
        restrictions:
          'Alphanumerics, periods, hyphens, underscores, and slashes. Start and end with alphanumeric.',
        resource: 'Microsoft.ServiceBus',
        entity: 'namespaces / topics',
        scope: 'namespace',
        icon: '/icons/integration/service-bus.png',
        code: '',
      },
      {
        name: 'migration project',
        slug: 'migr-',
        description:
          'Azure Migration Projects provides a centralized hub to discover, assess, and migrate to Azure on-premises servers, infrastructure, applications, and data. It provides tools to help you plan, track, and conduct migrations.',
        length: '2-57',
        category: Categories.MIGRATION,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/migrate/migrate-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/migrate_project',
        restrictions:
          'Alphanumerics, hyphens, periods, and underscores. Start with alphanumeric.',
        resource: 'Microsoft.DataMigration',
        entity: 'services / projects',
        scope: 'service',
        icon: '/icons/migration/migration-projects.png',
        code: '',
      },
      {
        name: 'database migration service',
        slug: 'dms-',
        description:
          'Azure Database Migration Service (DMS) is designed as a seamless, end-to-end solution for moving on-premises SQL Server databases to the cloud.',
        length: '2-62',
        category: Categories.MIGRATION,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/dms/dms-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/databox_edge_device',
        restrictions:
          'Alphanumerics, hyphens, periods, and underscores. Start with alphanumeric.',
        resource: 'Microsoft.DataMigration',
        entity: 'services',
        scope: 'resource group',
        icon: '/icons/migration/database-migration-services.png',
        code: '',
      },
      {
        name: 'recovery services vault',
        slug: 'rsv-',
        description:
          'Azure Recovery Services vault is a unified platform to manage backup and site recovery, providing efficient replication, failover and recovery of on-premises or Azure virtual machines and physical servers.',
        length: '2-50',
        category: Categories.MIGRATION,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/backup/backup-azure-recovery-services-vault-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/recovery_services_vault',
        restrictions: 'Alphanumerics and hyphens. Start with letter.',
        resource: 'Microsoft.RecoveryServices',
        entity: 'vaults',
        scope: 'resource group',
        icon: '/icons/migration/recovery-services-vaults.png',
        code: '',
      },
    ],
  },
  {
    items: [
      {
        name: 'automation account',
        slug: 'aa-',
        description:
          'Azure Automation Account provides a way to automate the manual, long-running, error-prone, and frequently repeated tasks that are commonly performed in a cloud and enterprise environment. It saves time and increases the reliability of regular administrative tasks.',
        length: '6-50',
        category: Categories.MANAGEMENT,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/automation/automation-intro',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/automation_account',
        restrictions:
          'Alphanumerics and hyphens. Start with letter and end with alphanumeric.',
        resource: 'Microsoft.Automation',
        entity: 'automationAccounts',
        scope: 'resource group & region (See note below)',
        icon: '/icons/compute/automanaged-vm.png',
        code: '',
      },
      {
        name: 'application insights',
        slug: 'appi-',
        description:
          'Azure Application Insights is a feature of Azure Monitor and provides application performance management (APM) services for developers and IT professionals. It helps to detect issues, solve problems, and continuously improve web applications.',
        length: '1-260',
        category: Categories.MANAGEMENT,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/application_insights',
        restrictions:
          'Can not use:%&?/ or control characters Can not end with space or period.',
        resource: 'Microsoft.Insights',
        entity: 'components',
        scope: 'resource group',
        icon: '/icons/devops/application-insights.png',
        code: '',
      },
      {
        name: 'monitor action group',
        slug: 'ag-',
        description:
          'Azure Monitor Action Groups provide a collection of notification preferences defined by the user. Azure Monitor and Service Health alerts use action groups to notify users that an alert has been triggered.',
        length: '1-260',
        category: Categories.MANAGEMENT,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/azure-monitor/alerts/action-groups',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/monitor_action_group',
        restrictions:
          'Can not use::<>+/&%? or control characters Can not end with space or period.',
        resource: 'Microsoft.Insights',
        entity: 'actionGroups',
        scope: 'resource group',
        icon: '/icons/general/allresources.png',
        code: '',
      },
      {
        name: 'purview instances',
        slug: 'pview-',
        description:
          'Azure Purview is a unified data governance service that helps organizations achieve a complete understanding of their data. Purview helps you catalog, understand, and manage data across your enterprise.',
        length: '6-50',
        category: Categories.MANAGEMENT,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/purview/overview',
        terraformUrl: '',
        restrictions: '',
        resource: 'Microsoft.Purview',
        entity: 'accounts',
        scope: 'resource group',
        icon: '/icons/general/allresources.png',
        code: '',
      },
      {
        name: 'blueprint',
        slug: 'bp-',
        description:
          "Azure Blueprints enables cloud architects and central information technology groups to define a repeatable set of Azure resources that implements and adheres to an organization's standards, patterns, and requirements.",
        length: '90',
        category: Categories.MANAGEMENT,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/governance/blueprints/overview',
        terraformUrl: '',
        restrictions: 'Alphanumerics, underscores, and hyphens.',
        resource: 'Microsoft.Blueprint',
        entity: 'blueprint',
        scope: 'Management groups, Subscriptions, Resource groups',
        icon: '/icons/general/allresources.png',
        code: '',
      },
      {
        name: 'blueprint assignment',
        slug: 'bps-',
        description:
          'Blueprint Assignment in Azure is the process of assigning a blueprint to a subscription, allowing the blueprint to create, update, or delete resources to align with the blueprint definition.',
        length: '90',
        category: Categories.MANAGEMENT,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/governance/blueprints/overview',
        terraformUrl: '',
        restrictions: 'Alphanumerics, underscores, and hyphens.',
        resource: 'Microsoft.Blueprint',
        entity: 'blueprintAssignments',
        scope: 'Management groups, Subscriptions, Resource groups',
        icon: '/icons/general/allresources.png',
        code: '',
      },
      {
        name: 'key vault',
        slug: 'kv-',
        description:
          'Azure Key Vault is a tool for securely storing and accessing secrets. A secret could be a credit card number, bank account details, or a connection string for a database.',
        length: '3-24',
        category: Categories.MANAGEMENT,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/key-vault/general/overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/key_vault',
        restrictions:
          'Alphanumerics and hyphens. Start with letter. End with letter or digit. Can not contain consecutive hyphens.',
        resource: 'Microsoft.KeyVault',
        entity: 'vaults',
        scope: 'global',
        icon: '/icons/security/key-vaults.png',
        code: '',
      },
      {
        name: 'log analytics workspace',
        slug: 'log-',
        description:
          'Azure Log Analytics Workspace is a unique environment for Azure Monitor log data. Each workspace has its own data repository and configuration, and data sources and solutions are configured to store their data in a workspace.',
        length: '4-63',
        category: Categories.MANAGEMENT,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/azure-monitor/logs/design-workspace',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/log_analytics_workspace',
        restrictions:
          'Alphanumerics and hyphens. Start and end with alphanumeric.',
        resource: 'Microsoft.OperationalInsights',
        entity: 'workspaces',
        scope: 'resource group',
        icon: '/icons/analytics/log-analytics-workspaces.png',
        code: '',
      },
    ],
  },
];
