export interface MICROSOFTANALYSISSERVICES {
  SERVERS: {
    scope: "resource group",
    length: "3-63",
    validCharacters: `Lowercase letters and numbers. Start with lowercase letter.`,
  },
}

export interface MICROSOFTAPIMANAGEMENT {
  SERVICE: {
    scope: "global",
    length: "1-50",
    validCharacters: `Alphanumerics and hyphens. Start with letter and end with alphanumeric.`,
  },
  SERVICEAPIS: {
    scope: "service",
    length: "1-80",
    validCharacters: `Alphanumerics and hyphens. Start with letter and end with alphanumeric.`,
  },
  SERVICEAPISISSUES: {
    scope: "api",
    length: "1-80",
    validCharacters: `Alphanumerics and hyphens. Start with letter and end with alphanumeric.`,
  },
  SERVICEAPISISSUESATTACHMENTS: {
    scope: "issue",
    length: "1-80",
    validCharacters: `Alphanumerics and hyphens. Start with letter and end with alphanumeric.`,
  },
  SERVICEAPISISSUESCOMMENTS: {
    scope: "issue",
    length: "1-80",
    validCharacters: `Alphanumerics and hyphens. Start with letter and end with alphanumeric.`,
  },
  SERVICEAPISOPERATIONS: {
    scope: "api",
    length: "1-80",
    validCharacters: `Alphanumerics and hyphens. Start with letter and end with alphanumeric.`,
  },
  SERVICEAPISOPERATIONSTAGS: {
    scope: "operation",
    length: "1-80",
    validCharacters: `Alphanumerics and hyphens. Start with letter and end with alphanumeric.`,
  },
  SERVICEAPISRELEASES: {
    scope: "api",
    length: "1-80",
    validCharacters: `Alphanumerics, underscores, and hyphens. Start and end with alphanumeric or underscore.`,
  },
  SERVICEAPISSCHEMAS: {
    scope: "api",
    length: "1-80",
    validCharacters: `Alphanumerics and hyphens. Start with letter and end with alphanumeric.`,
  },
  SERVICEAPISTAGDESCRIPTIONS: {
    scope: "api",
    length: "1-80",
    validCharacters: `Alphanumerics and hyphens. Start with letter and end with alphanumeric.`,
  },
  SERVICEAPISTAGS: {
    scope: "api",
    length: "1-80",
    validCharacters: `Alphanumerics and hyphens. Start with letter and end with alphanumeric.`,
  },
  SERVICEAPIVERSIONSETS: {
    scope: "service",
    length: "1-80",
    validCharacters: `Alphanumerics and hyphens. Start with letter and end with alphanumeric.`,
  },
  SERVICEAUTHORIZATIONSERVERS: {
    scope: "service",
    length: "1-80",
    validCharacters: `Alphanumerics and hyphens. Start with letter and end with alphanumeric.`,
  },
  SERVICEBACKENDS: {
    scope: "service",
    length: "1-80",
    validCharacters: `Alphanumerics and hyphens. Start with letter and end with alphanumeric.`,
  },
  SERVICECERTIFICATES: {
    scope: "service",
    length: "1-80",
    validCharacters: `Alphanumerics and hyphens. Start with letter and end with alphanumeric.`,
  },
  SERVICEDIAGNOSTICS: {
    scope: "service",
    length: "1-80",
    validCharacters: `Alphanumerics and hyphens. Start with letter and end with alphanumeric.`,
  },
  SERVICEGROUPS: {
    scope: "service",
    length: "1-80",
    validCharacters: `Alphanumerics and hyphens. Start with letter and end with alphanumeric.`,
  },
  SERVICEGROUPSUSERS: {
    scope: "group",
    length: "1-80",
    validCharacters: `Alphanumerics and hyphens. Start with letter and end with alphanumeric.`,
  },
  SERVICEIDENTITYPROVIDERS: {
    scope: "service",
    length: "1-80",
    validCharacters: `Alphanumerics and hyphens. Start with letter and end with alphanumeric.`,
  },
  SERVICELOGGERS: {
    scope: "service",
    length: "1-80",
    validCharacters: `Alphanumerics and hyphens. Start with letter and end with alphanumeric.`,
  },
  SERVICENOTIFICATIONS: {
    scope: "service",
    length: "1-80",
    validCharacters: `Alphanumerics and hyphens. Start with letter and end with alphanumeric.`,
  },
  SERVICENOTIFICATIONSRECIPIENTEMAILS: {
    scope: "notification",
    length: "1-80",
    validCharacters: `Alphanumerics and hyphens. Start with letter and end with alphanumeric.`,
  },
  SERVICEOPENIDCONNECTPROVIDERS: {
    scope: "service",
    length: "1-80",
    validCharacters: `Alphanumerics and hyphens. Start with letter and end with alphanumeric.`,
  },
  SERVICEPOLICIES: {
    scope: "service",
    length: "1-80",
    validCharacters: `Alphanumerics and hyphens. Start with letter and end with alphanumeric.`,
  },
  SERVICEPRODUCTS: {
    scope: "service",
    length: "1-80",
    validCharacters: `Alphanumerics and hyphens. Start with letter and end with alphanumeric.`,
  },
  SERVICEPRODUCTSAPIS: {
    scope: "product",
    length: "1-80",
    validCharacters: `Alphanumerics and hyphens. Start with letter and end with alphanumeric.`,
  },
  SERVICEPRODUCTSGROUPS: {
    scope: "product",
    length: "1-80",
    validCharacters: `Alphanumerics and hyphens. Start with letter and end with alphanumeric.`,
  },
  SERVICEPRODUCTSTAGS: {
    scope: "product",
    length: "1-80",
    validCharacters: `Alphanumerics and hyphens. Start with letter and end with alphanumeric.`,
  },
  SERVICEPROPERTIES: {
    scope: "service",
    length: "1-80",
    validCharacters: `Alphanumerics and hyphens. Start with letter and end with alphanumeric.`,
  },
  SERVICESUBSCRIPTIONS: {
    scope: "service",
    length: "1-80",
    validCharacters: `Alphanumerics and hyphens. Start with letter and end with alphanumeric.`,
  },
  SERVICETAGS: {
    scope: "service",
    length: "1-80",
    validCharacters: `Alphanumerics and hyphens. Start with letter and end with alphanumeric.`,
  },
  SERVICETEMPLATES: {
    scope: "service",
    length: "1-80",
    validCharacters: `Alphanumerics and hyphens. Start with letter and end with alphanumeric.`,
  },
  SERVICEUSERS: {
    scope: "service",
    length: "1-80",
    validCharacters: `Alphanumerics and hyphens. Start with letter and end with alphanumeric.`,
  },
}

export interface MICROSOFTAPP {
  CONTAINERAPPS: {
    scope: "resource group",
    length: "2-32",
    validCharacters: `Lowercase letters, numbers, and hyphens. . Start with letter and end with alphanumeric.`,
  },
}

export interface MICROSOFTAPPCONFIGURATION {
  CONFIGURATIONSTORES: {
    scope: "resource group",
    length: "5-50",
    validCharacters: `Alphanumerics, underscores, and hyphens.`,
  },
}

export interface MICROSOFTAPPPLATFORM {
  SPRING: {
    scope: "global",
    length: "4-32",
    validCharacters: `Lowercase letters, numbers, and hyphens.`,
  },
}

export interface MICROSOFTAUTHORIZATION {
  LOCKS: {
    scope: "scope of assignment",
    length: "1-90",
    validCharacters: `Alphanumerics, periods, underscores, hyphens, and parenthesis. Can't end in period.`,
  },
  POLICYASSIGNMENTS: {
    scope: "scope of assignment",
    length: "1-128 display name1-64 resource name1-24 resource name at management group scope",
    validCharacters: `Display name can contain any characters. Resource name can't use:<>*%&:\?. +/ or control characters.  Can't end with period or space.`,
  },
  POLICYDEFINITIONS: {
    scope: "scope of definition",
    length: "1-128 display name1-64 resource name",
    validCharacters: `Display name can contain any characters. Resource name can't use:<>*%&:\?. +/ or control characters.  Can't end with period or space.`,
  },
  POLICYEXEMPTIONS: {
    scope: "scope of exemption",
    length: "1-128 display name1-64 resource name",
    validCharacters: `Display name can contain any characters. Resource name can't use:<>*%&:\?. +/ or control characters.  Can't end with period or space.`,
  },
  POLICYSETDEFINITIONS: {
    scope: "scope of definition",
    length: "1-128 display name1-64 resource name",
    validCharacters: `Display name can contain any characters. Resource name can't use:<>*%&:\?. +/ or control characters.  Can't end with period or space.`,
  },
  ROLEASSIGNMENTS: {
    scope: "tenant",
    length: "36",
    validCharacters: `Must be a globally unique identifier (GUID).`,
  },
  ROLEDEFINITIONS: {
    scope: "tenant",
    length: "36",
    validCharacters: `Must be a globally unique identifier (GUID).`,
  },
}

export interface MICROSOFTAUTOMATION {
  AUTOMATIONACCOUNTS: {
    scope: "resource group & region (See note below)",
    length: "6-50",
    validCharacters: `Alphanumerics and hyphens. Start with letter and end with alphanumeric.`,
  },
  AUTOMATIONACCOUNTSCERTIFICATES: {
    scope: "automation account",
    length: "1-128",
    validCharacters: `Can't use: <>*%&:\?. +/ or control characters Can't end with space.`,
  },
  AUTOMATIONACCOUNTSCONNECTIONS: {
    scope: "automation account",
    length: "1-128",
    validCharacters: `Can't use: <>*%&:\?. +/ or control characters Can't end with space.`,
  },
  AUTOMATIONACCOUNTSCREDENTIALS: {
    scope: "automation account",
    length: "1-128",
    validCharacters: `Can't use: <>*%&:\?. +/ or control characters Can't end with space.`,
  },
  AUTOMATIONACCOUNTSRUNBOOKS: {
    scope: "automation account",
    length: "1-63",
    validCharacters: `Alphanumerics, underscores, and hyphens. Start with letter.`,
  },
  AUTOMATIONACCOUNTSSCHEDULES: {
    scope: "automation account",
    length: "1-128",
    validCharacters: `Can't use: <>*%&:\?. +/ or control characters Can't end with space.`,
  },
  AUTOMATIONACCOUNTSVARIABLES: {
    scope: "automation account",
    length: "1-128",
    validCharacters: `Can't use: <>*%&:\?. +/ or control characters Can't end with space.`,
  },
  AUTOMATIONACCOUNTSWATCHERS: {
    scope: "automation account",
    length: "1-63",
    validCharacters: `Alphanumerics, underscores, and hyphens. Start with letter.`,
  },
  AUTOMATIONACCOUNTSWEBHOOKS: {
    scope: "automation account",
    length: "1-128",
    validCharacters: `Can't use: <>*%&:\?. +/ or control characters Can't end with space.`,
  },
}

export interface MICROSOFTBATCH {
  BATCHACCOUNTS: {
    scope: "Region",
    length: "3-24",
    validCharacters: `Lowercase letters and numbers.`,
  },
  BATCHACCOUNTSAPPLICATIONS: {
    scope: "batch account",
    length: "1-64",
    validCharacters: `Alphanumerics, underscores, and hyphens.`,
  },
  BATCHACCOUNTSCERTIFICATES: {
    scope: "batch account",
    length: "5-45",
    validCharacters: `Alphanumerics, underscores, and hyphens.`,
  },
  BATCHACCOUNTSPOOLS: {
    scope: "batch account",
    length: "1-64",
    validCharacters: `Alphanumerics, underscores, and hyphens.`,
  },
}

export interface MICROSOFTBLOCKCHAIN {
  BLOCKCHAINMEMBERS: {
    scope: "global",
    length: "2-20",
    validCharacters: `Lowercase letters and numbers. Start with lowercase letter.`,
  },
}

export interface MICROSOFTBLUEPRINT {
  BLUEPRINT: {
    scope: "Management groups, Subscriptions, Resource groups",
    length: "90",
    validCharacters: `Alphanumerics, underscores, and hyphens.`,
  },
  BLUEPRINTASSIGNMENTS: {
    scope: "Management groups, Subscriptions, Resource groups",
    length: "90",
    validCharacters: `Alphanumerics, underscores, and hyphens.`,
  },
}

export interface MICROSOFTBOTSERVICE {
  BOTSERVICES: {
    scope: "global",
    length: "2-64",
    validCharacters: `Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.`,
  },
  BOTSERVICESCHANNELS: {
    scope: "bot service",
    length: "2-64",
    validCharacters: `Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.`,
  },
  BOTSERVICESCONNECTIONS: {
    scope: "bot service",
    length: "2-64",
    validCharacters: `Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.`,
  },
  ENTERPRISECHANNELS: {
    scope: "resource group",
    length: "2-64",
    validCharacters: `Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.`,
  },
}

export interface MICROSOFTCACHE {
  REDIS: {
    scope: "global",
    length: "1-63",
    validCharacters: `Alphanumerics and hyphens. Start and end with alphanumeric.  Consecutive hyphens not allowed.`,
  },
  REDISFIREWALLRULES: {
    scope: "Redis",
    length: "1-256",
    validCharacters: `Alphanumerics`,
  },
}

export interface MICROSOFTCDN {
  PROFILES: {
    scope: "resource group",
    length: "1-260",
    validCharacters: `Alphanumerics and hyphens. Start and end with alphanumeric.`,
  },
  PROFILESENDPOINTS: {
    scope: "global",
    length: "1-50",
    validCharacters: `Alphanumerics and hyphens. Start and end with alphanumeric.`,
  },
  PROFILESORIGINGROUPS: {
    scope: "global",
    length: "1-50",
    validCharacters: `Alphanumerics and hyphens. Start and end with alphanumeric.`,
  },
  PROFILESORIGINGROUPSORIGINS: {
    scope: "global",
    length: "1-50",
    validCharacters: `Alphanumerics and hyphens. Start and end with alphanumeric.`,
  },
  PROFILESAFDENDPOINTSROUTES: {
    scope: "global",
    length: "1-50",
    validCharacters: `Alphanumerics and hyphens. Start and end with alphanumeric.`,
  },
}

export interface MICROSOFTCERTIFICATEREGISTRATION {
  CERTIFICATEORDERS: {
    scope: "resource group",
    length: "3-30",
    validCharacters: `Alphanumerics.`,
  },
}

export interface MICROSOFTCOGNITIVESERVICES {
  ACCOUNTS: {
    scope: "resource group",
    length: "2-64",
    validCharacters: `Alphanumerics and hyphens. Start and end with alphanumeric.`,
  },
}

export interface MICROSOFTCOMPUTE {
  AVAILABILITYSETS: {
    scope: "resource group",
    length: "1-80",
    validCharacters: `Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End with alphanumeric or underscore.`,
  },
  CLOUDSERVICES: {
    scope: "resource group",
    length: "1-15 See note below.",
    validCharacters: `Can't use spaces, control characters, or these characters: ~ ! @ # $ % ^ & * ( ) = + _ [ ] { } \ | ; : .  ' " , < > / ?Can't start with underscore.  Can't end with period or hyphen.`,
  },
  DISKENCRYPTIONSETS: {
    scope: "resource group",
    length: "1-80",
    validCharacters: `Alphanumerics, underscores, and hyphens.`,
  },
  DISKS: {
    scope: "resource group",
    length: "1-80",
    validCharacters: `Alphanumerics, underscores, and hyphens.`,
  },
  GALLERIES: {
    scope: "resource group",
    length: "1-80",
    validCharacters: `Alphanumerics and periods. Start and end with alphanumeric.`,
  },
  GALLERIESAPPLICATIONS: {
    scope: "gallery",
    length: "1-80",
    validCharacters: `Alphanumerics, hyphens, and periods. Start and end with alphanumeric.`,
  },
  GALLERIESAPPLICATIONSVERSIONS: {
    scope: "application",
    length: "32-bit integer",
    validCharacters: `Numbers and periods. (Each segment is converted to an int32.  So each segment has a max value of 2,147,483,647. )`,
  },
  GALLERIESIMAGES: {
    scope: "gallery",
    length: "1-80",
    validCharacters: `Alphanumerics, underscores, hyphens, and periods. Start and end with alphanumeric.`,
  },
  GALLERIESIMAGESVERSIONS: {
    scope: "image",
    length: "32-bit integer",
    validCharacters: `Numbers and periods. (Each segment is converted to an int32.  So each segment has a max value of 2,147,483,647. )`,
  },
  IMAGES: {
    scope: "resource group",
    length: "1-80",
    validCharacters: `Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End with alphanumeric or underscore.`,
  },
  SNAPSHOTS: {
    scope: "resource group",
    length: "1-80",
    validCharacters: `Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End with alphanumeric or underscore.`,
  },
  VIRTUALMACHINES: {
    scope: "resource group",
    length: "1-15 (Windows)1-64 (Linux)See note below.",
    validCharacters: `Can't use spaces, control characters, or these characters: ~ ! @ # $ % ^ & * ( ) = + _ [ ] { } \ | ; : .  ' " , < > / ?Windows VMs can't include period or end with hyphen. Linux VMs can't end with period or hyphen.`,
  },
  VIRTUALMACHINESCALESETS: {
    scope: "resource group",
    length: "1-15 (Windows)1-64 (Linux)See note below.",
    validCharacters: `Can't use spaces, control characters, or these characters: ~ ! @ # $ % ^ & * ( ) = + _ [ ] { } \ | ; : .  ' " , < > / ?Can't start with underscore.  Can't end with period or hyphen.`,
  },
}

export interface MICROSOFTCOMMUNICATION {
  COMMUNICATIONSERVICES: {
    scope: "global",
    length: "1-63",
    validCharacters: `Alphanumerics and hyphens. Can't start or end with hyphen. Can't use underscores.`,
  },
}

export interface MICROSOFTCONFIDENTIALLEDGER {
  LEDGERS: {
    scope: "Resource group",
    length: "3-32",
    validCharacters: `Alphanumerics and hyphens. Can't start or end with hyphen.`,
  },
}

export interface MICROSOFTCONSUMPTION {
  BUDGETS: {
    scope: "subscription or resource group",
    length: "1-63",
    validCharacters: `Alphanumerics, hyphens, and underscores.`,
  },
}

export interface MICROSOFTCONTAINERINSTANCE {
  CONTAINERGROUPS: {
    scope: "resource group",
    length: "1-63",
    validCharacters: `Lowercase letters, numbers, and hyphens. Can't start or end with hyphen.  Consecutive hyphens aren't allowed.`,
  },
}

export interface MICROSOFTCONTAINERREGISTRY {
  REGISTRIES: {
    scope: "global",
    length: "5-50",
    validCharacters: `Alphanumerics.`,
  },
  REGISTRIESBUILDTASKS: {
    scope: "registry",
    length: "5-50",
    validCharacters: `Alphanumerics.`,
  },
  REGISTRIESBUILDTASKSSTEPS: {
    scope: "build task",
    length: "5-50",
    validCharacters: `Alphanumerics.`,
  },
  REGISTRIESREPLICATIONS: {
    scope: "registry",
    length: "5-50",
    validCharacters: `Alphanumerics.`,
  },
  REGISTRIESSCOPEMAPS: {
    scope: "registry",
    length: "5-50",
    validCharacters: `Alphanumerics, hyphens, and underscores.`,
  },
  REGISTRIESTASKS: {
    scope: "registry",
    length: "5-50",
    validCharacters: `Alphanumerics, hyphens, and underscores.`,
  },
  REGISTRIESTOKENS: {
    scope: "registry",
    length: "5-50",
    validCharacters: `Alphanumerics, hyphens, and underscores.`,
  },
  REGISTRIESWEBHOOKS: {
    scope: "registry",
    length: "5-50",
    validCharacters: `Alphanumerics.`,
  },
}

export interface MICROSOFTCONTAINERSERVICE {
  MANAGEDCLUSTERS: {
    scope: "resource group",
    length: "1-63",
    validCharacters: `Alphanumerics, underscores, and hyphens. Start and end with alphanumeric.`,
  },
  OPENSHIFTMANAGEDCLUSTERS: {
    scope: "resource group",
    length: "1-30",
    validCharacters: `Alphanumerics.`,
  },
}

export interface MICROSOFTCUSTOMERINSIGHTS {
  HUBS: {
    scope: "resource group",
    length: "1-64",
    validCharacters: `Alphanumerics. Start with letter.`,
  },
  HUBSAUTHORIZATIONPOLICIES: {
    scope: "hub",
    length: "1-50",
    validCharacters: `Alphanumerics, underscores, and periods. Start and end with alphanumeric.`,
  },
  HUBSCONNECTORS: {
    scope: "hub",
    length: "1-128",
    validCharacters: `Alphanumerics and underscores. Start with letter.`,
  },
  HUBSCONNECTORSMAPPINGS: {
    scope: "connector",
    length: "1-128",
    validCharacters: `Alphanumerics and underscores. Start with letter.`,
  },
  HUBSINTERACTIONS: {
    scope: "hub",
    length: "1-128",
    validCharacters: `Alphanumerics and underscores. Start with letter.`,
  },
  HUBSKPI: {
    scope: "hub",
    length: "1-512",
    validCharacters: `Alphanumerics and underscores. Start with letter.`,
  },
  HUBSLINKS: {
    scope: "hub",
    length: "1-512",
    validCharacters: `Alphanumerics and underscores. Start with letter.`,
  },
  HUBSPREDICTIONS: {
    scope: "hub",
    length: "1-512",
    validCharacters: `Alphanumerics and underscores. Start with letter.`,
  },
  HUBSPROFILES: {
    scope: "hub",
    length: "1-128",
    validCharacters: `Alphanumerics and underscores. Start with letter.`,
  },
  HUBSRELATIONSHIPLINKS: {
    scope: "hub",
    length: "1-512",
    validCharacters: `Alphanumerics and underscores. Start with letter.`,
  },
  HUBSRELATIONSHIPS: {
    scope: "hub",
    length: "1-512",
    validCharacters: `Alphanumerics and underscores. Start with letter.`,
  },
  HUBSROLEASSIGNMENTS: {
    scope: "hub",
    length: "1-128",
    validCharacters: `Alphanumerics and underscores. Start with letter.`,
  },
  HUBSVIEWS: {
    scope: "hub",
    length: "1-512",
    validCharacters: `Alphanumerics and underscores. Start with letter.`,
  },
}

export interface MICROSOFTCUSTOMPROVIDERS {
  ASSOCIATIONS: {
    scope: "resource group",
    length: "1-180",
    validCharacters: `Can't use:%&\\?/ or control charactersCan't end with period or space.`,
  },
  RESOURCEPROVIDERS: {
    scope: "resource group",
    length: "3-64",
    validCharacters: `Can't use:%&\\?/ or control charactersCan't end with period or space.`,
  },
}

export interface MICROSOFTDATABOX {
  JOBS: {
    scope: "resource group",
    length: "3-24",
    validCharacters: `Alphanumerics, hyphens, underscores and periods.`,
  },
}

export interface MICROSOFTDATABRICKS {
  WORKSPACES: {
    scope: "resource group",
    length: "3-64",
    validCharacters: `Alphanumerics, underscores, and hyphens`,
  },
}

export interface MICROSOFTDATAFACTORY {
  FACTORIES: {
    scope: "global",
    length: "3-63",
    validCharacters: `Alphanumerics and hyphens. Start and end with alphanumeric.`,
  },
  FACTORIESDATAFLOWS: {
    scope: "factory",
    length: "1-260",
    validCharacters: `Can't use:<>*#. %&:\\+?/ or control charactersStart with alphanumeric.`,
  },
  FACTORIESDATASETS: {
    scope: "factory",
    length: "1-260",
    validCharacters: `Can't use:<>*#. %&:\\+?/ or control charactersStart with alphanumeric.`,
  },
  FACTORIESINTEGRATIONRUNTIMES: {
    scope: "factory",
    length: "3-63",
    validCharacters: `Alphanumerics and hyphens. Start and end with alphanumeric.`,
  },
  FACTORIESLINKEDSERVICES: {
    scope: "factory",
    length: "1-260",
    validCharacters: `Can't use:<>*#. %&:\\+?/ or control charactersStart with alphanumeric.`,
  },
  FACTORIESPIPELINES: {
    scope: "factory",
    length: "1-260",
    validCharacters: `Can't use:<>*#. %&:\\+?/ or control charactersStart with alphanumeric.`,
  },
  FACTORIESTRIGGERS: {
    scope: "factory",
    length: "1-260",
    validCharacters: `Can't use:<>*#. %&:\\+?/ or control charactersStart with alphanumeric.`,
  },
  FACTORIESTRIGGERSRERUNTRIGGERS: {
    scope: "trigger",
    length: "1-260",
    validCharacters: `Can't use:<>*#. %&:\\+?/ or control charactersStart with alphanumeric.`,
  },
}

export interface MICROSOFTDATALAKEANALYTICS {
  ACCOUNTS: {
    scope: "global",
    length: "3-24",
    validCharacters: `Lowercase letters and numbers.`,
  },
  ACCOUNTSCOMPUTEPOLICIES: {
    scope: "account",
    length: "3-60",
    validCharacters: `Alphanumerics, hyphens, and underscores.`,
  },
  ACCOUNTSDATALAKESTOREACCOUNTS: {
    scope: "account",
    length: "3-24",
    validCharacters: `Lowercase letters and numbers.`,
  },
  ACCOUNTSFIREWALLRULES: {
    scope: "account",
    length: "3-50",
    validCharacters: `Alphanumerics, hyphens, and underscores.`,
  },
  ACCOUNTSSTORAGEACCOUNTS: {
    scope: "account",
    length: "3-60",
    validCharacters: `Alphanumerics, hyphens, and underscores.`,
  },
}

export interface MICROSOFTDATALAKESTORE {
  ACCOUNTS: {
    scope: "global",
    length: "3-24",
    validCharacters: `Lowercase letters and numbers.`,
  },
  ACCOUNTSFIREWALLRULES: {
    scope: "account",
    length: "3-50",
    validCharacters: `Alphanumerics, hyphens, and underscores.`,
  },
  ACCOUNTSVIRTUALNETWORKRULES: {
    scope: "account",
    length: "3-50",
    validCharacters: `Alphanumerics, hyphens, and underscores.`,
  },
}

export interface MICROSOFTDATAMIGRATION {
  SERVICES: {
    scope: "resource group",
    length: "2-62",
    validCharacters: `Alphanumerics, hyphens, periods, and underscores. Start with alphanumeric.`,
  },
  SERVICESPROJECTS: {
    scope: "service",
    length: "2-57",
    validCharacters: `Alphanumerics, hyphens, periods, and underscores. Start with alphanumeric.`,
  },
}

export interface MICROSOFTDBFORMARIADB {
  SERVERS: {
    scope: "global",
    length: "3-63",
    validCharacters: `Lowercase letters, hyphens and numbers. Can't start or end with hyphen.`,
  },
  SERVERSDATABASES: {
    scope: "servers",
    length: "1-63",
    validCharacters: `Alphanumerics and hyphens.`,
  },
  SERVERSFIREWALLRULES: {
    scope: "servers",
    length: "1-128",
    validCharacters: `Alphanumerics, hyphens, and underscores.`,
  },
  SERVERSVIRTUALNETWORKRULES: {
    scope: "servers",
    length: "1-128",
    validCharacters: `Alphanumerics and hyphens.`,
  },
}

export interface MICROSOFTDBFORMYSQL {
  SERVERS: {
    scope: "global",
    length: "3-63",
    validCharacters: `Lowercase letters, hyphens and numbers. Can't start or end with hyphen.`,
  },
  SERVERSDATABASES: {
    scope: "servers",
    length: "1-63",
    validCharacters: `Alphanumerics and hyphens.`,
  },
  SERVERSFIREWALLRULES: {
    scope: "servers",
    length: "1-128",
    validCharacters: `Alphanumerics, hyphens, and underscores.`,
  },
  SERVERSVIRTUALNETWORKRULES: {
    scope: "servers",
    length: "1-128",
    validCharacters: `Alphanumerics and hyphens.`,
  },
}

export interface MICROSOFTDBFORPOSTGRESQL {
  SERVERS: {
    scope: "global",
    length: "3-63",
    validCharacters: `Lowercase letters, hyphens and numbers. Can't start or end with hyphen.`,
  },
  SERVERSDATABASES: {
    scope: "servers",
    length: "1-63",
    validCharacters: `Alphanumerics and hyphens.`,
  },
  SERVERSFIREWALLRULES: {
    scope: "servers",
    length: "1-128",
    validCharacters: `Alphanumerics, hyphens, and underscores.`,
  },
  SERVERSVIRTUALNETWORKRULES: {
    scope: "servers",
    length: "1-128",
    validCharacters: `Alphanumerics and hyphens.`,
  },
}

export interface MICROSOFTDEVICES {
  IOTHUBS: {
    scope: "global",
    length: "3-50",
    validCharacters: `Alphanumerics and hyphens. Can't end with hyphen.`,
  },
  IOTHUBSCERTIFICATES: {
    scope: "IoT hub",
    length: "1-64",
    validCharacters: `Alphanumerics, hyphens, periods, and underscores.`,
  },
  IOTHUBSEVENTHUBENDPOINTSCONSUMERGROUPS: {
    scope: "eventHubEndpoints",
    length: "1-50",
    validCharacters: `Alphanumerics, hyphens, periods, and underscores.`,
  },
  PROVISIONINGSERVICES: {
    scope: "resource group",
    length: "3-64",
    validCharacters: `Alphanumerics and hyphens. End with alphanumeric.`,
  },
  PROVISIONINGSERVICESCERTIFICATES: {
    scope: "provisioningServices",
    length: "1-64",
    validCharacters: `Alphanumerics, hyphens, periods, and underscores.`,
  },
}

export interface MICROSOFTDEVTESTLAB {
  LABS: {
    scope: "resource group",
    length: "1-50",
    validCharacters: `Alphanumerics, underscores, and hyphens.`,
  },
  LABSCUSTOMIMAGES: {
    scope: "lab",
    length: "1-80",
    validCharacters: `Alphanumerics, underscores, hyphens, and parentheses.`,
  },
  LABSFORMULAS: {
    scope: "lab",
    length: "1-80",
    validCharacters: `Alphanumerics, underscores, hyphens, and parentheses.`,
  },
  LABSVIRTUALMACHINES: {
    scope: "lab",
    length: "1-15 (Windows)1-64 (Linux)",
    validCharacters: `Alphanumerics and hyphens. Start and end with alphanumeric.  Can't be all numbers.`,
  },
}

export interface MICROSOFTDOCUMENTDB {
  DATABASEACCOUNTS: {
    scope: "global",
    length: "3-44",
    validCharacters: `Lowercase letters, numbers, and hyphens. Start with lowercase letter or number.`,
  },
}

export interface MICROSOFTEVENTGRID {
  DOMAINS: {
    scope: "resource group",
    length: "3-50",
    validCharacters: `Alphanumerics and hyphens.`,
  },
  DOMAINSTOPICS: {
    scope: "domain",
    length: "3-50",
    validCharacters: `Alphanumerics and hyphens.`,
  },
  EVENTSUBSCRIPTIONS: {
    scope: "resource group",
    length: "3-64",
    validCharacters: `Alphanumerics and hyphens.`,
  },
  TOPICS: {
    scope: "region",
    length: "3-50",
    validCharacters: `Alphanumerics and hyphens.`,
  },
}

export interface MICROSOFTEVENTHUB {
  CLUSTERS: {
    scope: "resource group",
    length: "6-50",
    validCharacters: `Alphanumerics and hyphens. Start with letter.  End with letter or number.`,
  },
  NAMESPACES: {
    scope: "global",
    length: "6-50",
    validCharacters: `Alphanumerics and hyphens. Start with letter.  End with letter or number.`,
  },
  NAMESPACESAUTHORIZATIONRULES: {
    scope: "namespace",
    length: "1-50",
    validCharacters: `Alphanumerics, periods, hyphens and underscores. Start and end with letter or number.`,
  },
  NAMESPACESDISASTERRECOVERYCONFIGS: {
    scope: "global",
    length: "6-50",
    validCharacters: `Alphanumerics and hyphens. Start with letter.  End with alphanumeric.`,
  },
  NAMESPACESEVENTHUBS: {
    scope: "namespace",
    length: "1-256",
    validCharacters: `Alphanumerics, periods, hyphens and underscores. Start and end with letter or number.`,
  },
  NAMESPACESEVENTHUBSAUTHORIZATIONRULES: {
    scope: "event hub",
    length: "1-50",
    validCharacters: `Alphanumerics, periods, hyphens and underscores. Start and end with letter or number.`,
  },
  NAMESPACESEVENTHUBSCONSUMERGROUPS: {
    scope: "event hub",
    length: "1-50",
    validCharacters: `Alphanumerics, periods, hyphens and underscores. Start and end with letter or number.`,
  },
}

export interface MICROSOFTHDINSIGHT {
  CLUSTERS: {
    scope: "global",
    length: "3-59",
    validCharacters: `Alphanumerics and hyphensStart and end with letter or number.`,
  },
}

export interface MICROSOFTIMPORTEXPORT {
  JOBS: {
    scope: "resource group",
    length: "2-64",
    validCharacters: `Alphanumerics and hyphens. Start with letter.`,
  },
}

export interface MICROSOFTINSIGHTS {
  ACTIONGROUPS: {
    scope: "resource group",
    length: "1-260",
    validCharacters: `Can't use::<>+/&%\? or control characters Can't end with space or period.`,
  },
  COMPONENTS: {
    scope: "resource group",
    length: "1-260",
    validCharacters: `Can't use:%&\?/ or control characters Can't end with space or period.`,
  },
  SCHEDULEDQUERYRULES: {
    scope: "resource group",
    length: "1-260",
    validCharacters: `Can't use:*<>%{}&:\\?/# or control characters Can't end with space or period.`,
  },
  METRICALERTS: {
    scope: "resource group",
    length: "1-260",
    validCharacters: `Can't use:*#&+:<>?@%{}\/ or control characters Can't end with space or period.`,
  },
  ACTIVITYLOGALERTS: {
    scope: "resource group",
    length: "1-260",
    validCharacters: `Can't use:<>*%{}&:\\?+/# or control characters Can't end with space or period.`,
  },
}

export interface MICROSOFTIOTCENTRAL {
  IOTAPPS: {
    scope: "global",
    length: "2-63",
    validCharacters: `Lowercase letters, numbers and hyphens. Start with lowercase letter or number.`,
  },
}

export interface MICROSOFTKEYVAULT {
  VAULTS: {
    scope: "global",
    length: "3-24",
    validCharacters: `Alphanumerics and hyphens. Start with letter.  End with letter or digit.  Can't contain consecutive hyphens.`,
  },
  VAULTSSECRETS: {
    scope: "Vault",
    length: "1-127",
    validCharacters: `Alphanumerics and hyphens.`,
  },
}

export interface MICROSOFTKUSTO {
  CLUSTERS: {
    scope: "global",
    length: "4-22",
    validCharacters: `Lowercase letters and numbers. Start with letter.`,
  },
  CLUSTERSDATABASES: {
    scope: "cluster",
    length: "1-260",
    validCharacters: `Alphanumerics, hyphens, spaces, and periods.`,
  },
  CLUSTERSDATABASESDATACONNECTIONS: {
    scope: "database",
    length: "1-40",
    validCharacters: `Alphanumerics, hyphens, spaces, and periods.`,
  },
  CLUSTERSDATABASESEVENTHUBCONNECTIONS: {
    scope: "database",
    length: "1-40",
    validCharacters: `Alphanumerics, hyphens, spaces, and periods.`,
  },
}

export interface MICROSOFTLABSERVICES {
  LABPLANS: {
    scope: "resource group",
    length: "1-100",
    validCharacters: `Alphanumerics, hyphens, periods, and underscores. Start with letter and end with alphanumeric.`,
  },
  LABS: {
    scope: "resource group",
    length: "1-100",
    validCharacters: `Alphanumerics, hyphens, periods, and underscores. Start with letter and end with alphanumeric.`,
  },
}

export interface MICROSOFTLOADTESTSERVICE {
  LOADTESTS: {
    scope: "global",
    length: "1-64",
    validCharacters: `Can't use:<>*&@:?+/\,;=. |[]" or space. Can't start with underscore, hyphen, or number.  Can't end with underscore or hyphen.`,
  },
}

export interface MICROSOFTLOGIC {
  INTEGRATIONACCOUNTS: {
    scope: "resource group",
    length: "1-80",
    validCharacters: `Alphanumerics, hyphens, underscores, periods, and parenthesis.`,
  },
  INTEGRATIONACCOUNTSASSEMBLIES: {
    scope: "integration account",
    length: "1-80",
    validCharacters: `Alphanumerics, hyphens, underscores, periods, and parenthesis.`,
  },
  INTEGRATIONACCOUNTSBATCHCONFIGURATIONS: {
    scope: "integration account",
    length: "1-20",
    validCharacters: `Alphanumerics.`,
  },
  INTEGRATIONACCOUNTSCERTIFICATES: {
    scope: "integration account",
    length: "1-80",
    validCharacters: `Alphanumerics, hyphens, underscores, periods, and parenthesis.`,
  },
  INTEGRATIONACCOUNTSMAPS: {
    scope: "integration account",
    length: "1-80",
    validCharacters: `Alphanumerics, hyphens, underscores, periods, and parenthesis.`,
  },
  INTEGRATIONACCOUNTSPARTNERS: {
    scope: "integration account",
    length: "1-80",
    validCharacters: `Alphanumerics, hyphens, underscores, periods, and parenthesis.`,
  },
  INTEGRATIONACCOUNTSROSETTANETPROCESSCONFIGURATIONS: {
    scope: "integration account",
    length: "1-80",
    validCharacters: `Alphanumerics, hyphens, underscores, periods, and parenthesis.`,
  },
  INTEGRATIONACCOUNTSSCHEMAS: {
    scope: "integration account",
    length: "1-80",
    validCharacters: `Alphanumerics, hyphens, underscores, periods, and parenthesis.`,
  },
  INTEGRATIONACCOUNTSSESSIONS: {
    scope: "integration account",
    length: "1-80",
    validCharacters: `Alphanumerics, hyphens, underscores, periods, and parenthesis.`,
  },
  INTEGRATIONSERVICEENVIRONMENTS: {
    scope: "resource group",
    length: "1-80",
    validCharacters: `Alphanumerics, hyphens, periods, and underscores.`,
  },
  INTEGRATIONSERVICEENVIRONMENTSMANAGEDAPIS: {
    scope: "integration service environment",
    length: "1-80",
    validCharacters: `Alphanumerics, hyphens, periods, and underscores.`,
  },
  WORKFLOWS: {
    scope: "resource group",
    length: "1-43",
    validCharacters: `Alphanumerics, hyphens, underscores, periods, and parenthesis.`,
  },
}

export interface MICROSOFTMACHINELEARNING {
  COMMITMENTPLANS: {
    scope: "resource group",
    length: "1-260",
    validCharacters: `Can't use:<>*%&:?+/\\ or control charactersCan't end with a space.`,
  },
  WEBSERVICES: {
    scope: "resource group",
    length: "1-260",
    validCharacters: `Can't use:<>*%&:?+/\\ or control charactersCan't end with a space.`,
  },
  WORKSPACES: {
    scope: "resource group",
    length: "1-260",
    validCharacters: `Can't use:<>*%&:?+/\\ or control charactersCan't end with a space.`,
  },
}

export interface MICROSOFTMACHINELEARNINGSERVICES {
  WORKSPACES: {
    scope: "resource group",
    length: "3-33",
    validCharacters: `Alphanumerics and hyphens.`,
  },
  WORKSPACESCOMPUTES: {
    scope: "workspace",
    length: "3-24 for compute instance3-32 for AML compute2-16 for other compute types",
    validCharacters: `Alphanumerics and hyphens.`,
  },
}

export interface MICROSOFTMANAGEDIDENTITY {
  USERASSIGNEDIDENTITIES: {
    scope: "resource group",
    length: "3-128",
    validCharacters: `Alphanumerics, hyphens, and underscoresStart with letter or number.`,
  },
}

export interface MICROSOFTMAPS {
  ACCOUNTS: {
    scope: "resource group",
    length: "1-98 (for resource group name and account name)",
    validCharacters: `Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.`,
  },
}

export interface MICROSOFTMEDIA {
  MEDIASERVICES: {
    scope: "Azure region",
    length: "3-24",
    validCharacters: `Lowercase letters and numbers.`,
  },
  MEDIASERVICESLIVEEVENTS: {
    scope: "Media service",
    length: "1-32",
    validCharacters: `Alphanumerics and hyphens. Start with alphanumeric.`,
  },
  MEDIASERVICESLIVEEVENTSLIVEOUTPUTS: {
    scope: "Live event",
    length: "1-256",
    validCharacters: `Alphanumerics and hyphens. Start with alphanumeric.`,
  },
  MEDIASERVICESSTREAMINGENDPOINTS: {
    scope: "Media service",
    length: "1-24",
    validCharacters: `Alphanumerics and hyphens. Start with alphanumeric.`,
  },
}

export interface MICROSOFTMOBILENETWORK {
  MOBILENETWORKS: {
    scope: "Resource Group",
    length: "1-64",
    validCharacters: `Alphanumerics and hyphens. Start with alphanumeric.`,
  },
  MOBILENETWORKSSITES: {
    scope: "Mobile Network",
    length: "1-64",
    validCharacters: `Alphanumerics and hyphens. Start with alphanumeric.`,
  },
  MOBILENETWORKSSLICES: {
    scope: "Mobile Network",
    length: "1-64",
    validCharacters: `Alphanumerics and hyphens. Start with alphanumeric.`,
  },
  MOBILENETWORKSSERVICES: {
    scope: "Mobile Network",
    length: "1-64",
    validCharacters: `Alphanumerics and hyphens. Start with alphanumeric.   The following words cannot be used on their own as the name: default, requested, service.`,
  },
  MOBILENETWORKSDATANETWORKS: {
    scope: "Mobile Network",
    length: "1-64",
    validCharacters: `Alphanumeric, hyphens and a period/dot (. )  Start and end with alphanumeric.   Note: A period/dot (. ) must be followed by an alphanumeric character.`,
  },
  MOBILENETWORKSSIMPOLICIES: {
    scope: "Mobile Network",
    length: "1-64",
    validCharacters: `Alphanumerics and hyphens. Start with alphanumeric.`,
  },
  PACKETCORECONTROLPLANES: {
    scope: "Resource Group",
    length: "1-64",
    validCharacters: `Alphanumeric, underscores and hyphens.   Start with alphanumeric.`,
  },
  PACKETCORECONTROLPLANESPACKETCOREDATAPLANES: {
    scope: "Packet Core Control Plane",
    length: "1-64",
    validCharacters: `Alphanumeric, underscores and hyphens.   Start with alphanumeric.`,
  },
  PACKETCORECONTROLPLANESPACKETCOREDATAPLANESATTACHEDDATANETWORKS: {
    scope: "Mobile Network",
    length: "1-64",
    validCharacters: `Alphanumeric, hyphens and a period/dot (. )  Start and end with alphanumeric.   Note: A period/dot (. ) must be followed by an alphanumeric character.`,
  },
  SIMGROUPS: {
    scope: "Resource Group",
    length: "1-64",
    validCharacters: `Alphanumeric, underscores and hyphens  Start with alphanumeric`,
  },
  SIMGROUPSSIMS: {
    scope: "Sim Group",
    length: "1-64",
    validCharacters: `Alphanumeric, underscores and hyphens  Start with alphanumeric`,
  },
}

export interface MICROSOFTNETAPP {
  NETAPPACCOUNTS: {
    scope: "resource group",
    length: "1-128",
    validCharacters: `Alphanumerics, underscores, and hyphens.   Start with alphanumeric.`,
  },
  NETAPPACCOUNTSBACKUPS: {
    scope: "NetApp account",
    length: "3-225",
    validCharacters: `Alphanumerics, underscores, periods, and hyphens.   Start with alphanumeric.`,
  },
  NETAPPACCOUNTSBACKUPPOLICIES: {
    scope: "NetApp account",
    length: "1-64",
    validCharacters: `Alphanumerics, underscores, and hyphens.   Start with alphanumeric.`,
  },
  NETAPPACCOUNTSCAPACITYPOOLS: {
    scope: "NetApp account",
    length: "1-64",
    validCharacters: `Alphanumerics, underscores, and hyphens. Start with alphanumeric.`,
  },
  NETAPPACCOUNTSSNAPSHOTS: {
    scope: "NetApp account",
    length: "1-255",
    validCharacters: `Alphanumerics, underscores, and hyphens.   Start with alphanumeric.`,
  },
  NETAPPACCOUNTSSNAPSHOTPOLICIES: {
    scope: "NetApp account",
    length: "1-64",
    validCharacters: `Alphanumerics, underscores, and hyphens. Start with alphanumeric.`,
  },
  NETAPPACCOUNTSVOLUMES: {
    scope: "NetApp account",
    length: "1-64",
    validCharacters: `Alphanumerics, underscores, and hyphens.   Start with alphanumeric.   Volume cannot be named bin or default.`,
  },
  NETAPPACCOUNTSVOLUMEGROUPS: {
    scope: "NetApp account",
    length: "3-64",
    validCharacters: `Alphanumerics, underscores, and hyphens. Start with alphanumeric.`,
  },
}

export interface MICROSOFTNETWORK {
  APPLICATIONGATEWAYS: {
    scope: "resource group",
    length: "1-80",
    validCharacters: `Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.`,
  },
  APPLICATIONSECURITYGROUPS: {
    scope: "resource group",
    length: "1-80",
    validCharacters: `Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.`,
  },
  AZUREFIREWALLS: {
    scope: "resource group",
    length: "1-80",
    validCharacters: `Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End with alphanumeric or underscore.`,
  },
  BASTIONHOSTS: {
    scope: "resource group",
    length: "1-80",
    validCharacters: `Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.`,
  },
  CONNECTIONS: {
    scope: "resource group",
    length: "1-80",
    validCharacters: `Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.`,
  },
  DNSZONES: {
    scope: "resource group",
    length: "1-63 characters2 to 34 labelsEach label is a set of characters separated by a period. For example, contoso.com has 2 labels.",
    validCharacters: `Each label can contain alphanumerics, underscores, and hyphens. Each label is separated by a period.`,
  },
  EXPRESSROUTECIRCUITS: {
    scope: "resource group",
    length: "1-80",
    validCharacters: `Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.`,
  },
  FIREWALLPOLICIES: {
    scope: "resource group",
    length: "1-80",
    validCharacters: `Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.`,
  },
  FIREWALLPOLICIESRULEGROUPS: {
    scope: "firewall policy",
    length: "1-80",
    validCharacters: `Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.`,
  },
  FRONTDOORS: {
    scope: "global",
    length: "5-64",
    validCharacters: `Alphanumerics and hyphens. Start and end with alphanumeric.`,
  },
  FRONTDOORWEBAPPLICATIONFIREWALLPOLICIES: {
    scope: "resource group",
    length: "1-128",
    validCharacters: `Alphanumerics. Start with letter.`,
  },
  LOADBALANCERS: {
    scope: "resource group",
    length: "1-80",
    validCharacters: `Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.`,
  },
  LOADBALANCERSINBOUNDNATRULES: {
    scope: "load balancer",
    length: "1-80",
    validCharacters: `Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.`,
  },
  LOCALNETWORKGATEWAYS: {
    scope: "resource group",
    length: "1-80",
    validCharacters: `Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.`,
  },
  NETWORKINTERFACES: {
    scope: "resource group",
    length: "1-80",
    validCharacters: `Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.`,
  },
  NETWORKSECURITYGROUPS: {
    scope: "resource group",
    length: "1-80",
    validCharacters: `Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.`,
  },
  NETWORKSECURITYGROUPSSECURITYRULES: {
    scope: "network security group",
    length: "1-80",
    validCharacters: `Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.`,
  },
  NETWORKWATCHERS: {
    scope: "resource group",
    length: "1-80",
    validCharacters: `Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.`,
  },
  PRIVATEDNSZONES: {
    scope: "resource group",
    length: "1-63 characters2 to 34 labelsEach label is a set of characters separated by a period. For example, contoso.com has 2 labels.",
    validCharacters: `Each label can contain alphanumerics, underscores, and hyphens. Each label is separated by a period.`,
  },
  PRIVATEDNSZONESVIRTUALNETWORKLINKS: {
    scope: "private DNS zone",
    length: "1-80",
    validCharacters: `Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.`,
  },
  PRIVATEENDPOINTS: {
    scope: "resource group",
    length: "2-64",
    validCharacters: `Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.`,
  },
  PUBLICIPADDRESSES: {
    scope: "resource group",
    length: "1-80",
    validCharacters: `Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.`,
  },
  PUBLICIPPREFIXES: {
    scope: "resource group",
    length: "1-80",
    validCharacters: `Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.`,
  },
  ROUTEFILTERS: {
    scope: "resource group",
    length: "1-80",
    validCharacters: `Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.`,
  },
  ROUTEFILTERSROUTEFILTERRULES: {
    scope: "route filter",
    length: "1-80",
    validCharacters: `Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.`,
  },
  ROUTETABLES: {
    scope: "resource group",
    length: "1-80",
    validCharacters: `Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.`,
  },
  ROUTETABLESROUTES: {
    scope: "route table",
    length: "1-80",
    validCharacters: `Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.`,
  },
  SERVICEENDPOINTPOLICIES: {
    scope: "resource group",
    length: "1-80",
    validCharacters: `Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.`,
  },
  TRAFFICMANAGERPROFILES: {
    scope: "global",
    length: "1-63",
    validCharacters: `Alphanumerics, hyphens, and periods. Start and end with alphanumeric.`,
  },
  VIRTUALNETWORKGATEWAYS: {
    scope: "resource group",
    length: "1-80",
    validCharacters: `Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.`,
  },
  VIRTUALNETWORKS: {
    scope: "resource group",
    length: "2-64",
    validCharacters: `Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.`,
  },
  VIRTUALNETWORKSSUBNETS: {
    scope: "virtual network",
    length: "1-80",
    validCharacters: `Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.`,
  },
  VIRTUALNETWORKSVIRTUALNETWORKPEERINGS: {
    scope: "virtual network",
    length: "1-80",
    validCharacters: `Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.`,
  },
  VIRTUALWANS: {
    scope: "resource group",
    length: "1-80",
    validCharacters: `Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.`,
  },
  VPNGATEWAYS: {
    scope: "resource group",
    length: "1-80",
    validCharacters: `Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.`,
  },
  VPNGATEWAYSVPNCONNECTIONS: {
    scope: "VPN gateway",
    length: "1-80",
    validCharacters: `Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.`,
  },
  VPNSITES: {
    scope: "resource group",
    length: "1-80",
    validCharacters: `Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.`,
  },
}

export interface MICROSOFTNOTIFICATIONHUBS {
  NAMESPACES: {
    scope: "global",
    length: "6-50",
    validCharacters: `Alphanumerics and hyphensStart with letter.  End with alphanumeric.`,
  },
  NAMESPACESAUTHORIZATIONRULES: {
    scope: "namespace",
    length: "1-256",
    validCharacters: `Alphanumerics, periods, hyphens, and underscores. Start alphanumeric.`,
  },
  NAMESPACESNOTIFICATIONHUBS: {
    scope: "namespace",
    length: "1-260",
    validCharacters: `Alphanumerics, periods, hyphens, and underscores. Start alphanumeric.`,
  },
  NAMESPACESNOTIFICATIONHUBSAUTHORIZATIONRULES: {
    scope: "notification hub",
    length: "1-256",
    validCharacters: `Alphanumerics, periods, hyphens, and underscores. Start alphanumeric.`,
  },
}

export interface MICROSOFTOPERATIONALINSIGHTS {
  CLUSTERS: {
    scope: "resource group",
    length: "4-63",
    validCharacters: `Alphanumerics and hyphens. Start and end with alphanumeric.`,
  },
  WORKSPACES: {
    scope: "resource group",
    length: "4-63",
    validCharacters: `Alphanumerics and hyphens. Start and end with alphanumeric.`,
  },
}

export interface MICROSOFTOPERATIONSMANAGEMENT {
  SOLUTIONS: {
    scope: "workspace",
    length: "N/A",
    validCharacters: `For solutions authored by Microsoft, the name must be in the pattern:SolutionType(WorkspaceName)For solutions authored by third parties, the name must be in the pattern:SolutionType[WorkspaceName]For example, a valid name is:AntiMalware(contoso-IT)The solution type is case-sensitive.`,
  },
}

export interface MICROSOFTPORTAL {
  DASHBOARDS: {
    scope: "resource group",
    length: "3-160",
    validCharacters: `Alphanumerics and hyphens. To use restricted characters, add a tag named hidden-title with the dashboard name you want to use.  The portal displays that name when showing the dashboard.`,
  },
}

export interface MICROSOFTPOWERBI {
  WORKSPACECOLLECTIONS: {
    scope: "region",
    length: "3-63",
    validCharacters: `Alphanumerics and hyphens. Can't start with hyphen.  Can't use consecutive hyphens.`,
  },
}

export interface MICROSOFTPOWERBIDEDICATED {
  CAPACITIES: {
    scope: "region",
    length: "3-63",
    validCharacters: `Lowercase letters or numbersStart with lowercase letter.`,
  },
}

export interface MICROSOFTQUANTUM {
  WORKSPACES: {
    scope: "region",
    length: "2-54",
    validCharacters: `Alphanumerics and hyphens. Can't start or end with hyphen.`,
  },
}

export interface MICROSOFTRECOVERYSERVICES {
  VAULTS: {
    scope: "resource group",
    length: "2-50",
    validCharacters: `Alphanumerics and hyphens. Start with letter.`,
  },
  VAULTSBACKUPPOLICIES: {
    scope: "vault",
    length: "3-150",
    validCharacters: `Alphanumerics and hyphens. Start with letter.  Can't end with hyphen.`,
  },
}

export interface MICROSOFTRELAY {
  NAMESPACES: {
    scope: "global",
    length: "6-50",
    validCharacters: `Alphanumerics and hyphens. Start with a letter.  End with a letter or number.`,
  },
  NAMESPACESAUTHORIZATIONRULES: {
    scope: "namespace",
    length: "1-50",
    validCharacters: `Alphanumerics, periods, hyphens and underscores. Start and end with alphanumeric.`,
  },
  NAMESPACESHYBRIDCONNECTIONS: {
    scope: "namespace",
    length: "1-260",
    validCharacters: `Alphanumerics, periods, hyphens, underscores, and slashes. Start and end with alphanumeric.`,
  },
  NAMESPACESHYBRIDCONNECTIONSAUTHORIZATIONRULES: {
    scope: "hybrid connection",
    length: "1-50",
    validCharacters: `Alphanumerics, periods, hyphens and underscores. Start and end with alphanumeric.`,
  },
  NAMESPACESWCFRELAYS: {
    scope: "namespace",
    length: "1-260",
    validCharacters: `Alphanumerics, periods, hyphens, underscores, and slashes. Start and end with alphanumeric.`,
  },
  NAMESPACESWCFRELAYSAUTHORIZATIONRULES: {
    scope: "Wcf relay",
    length: "1-50",
    validCharacters: `Alphanumerics, periods, hyphens and underscores. Start and end with alphanumeric.`,
  },
}

export interface MICROSOFTRESOURCES {
  DEPLOYMENTS: {
    scope: "resource group",
    length: "1-64",
    validCharacters: `Alphanumerics, underscores, parentheses, hyphens, and periods.`,
  },
  RESOURCEGROUPS: {
    scope: "subscription",
    length: "1-90",
    validCharacters: `Underscores, hyphens, periods, parentheses, and letters or digits as defined by the Char. IsLetterOrDigit function. Valid characters are members of the following categories in UnicodeCategory:UppercaseLetter,LowercaseLetter,TitlecaseLetter,ModifierLetter,OtherLetter,DecimalDigitNumber. Can't end with period.`,
  },
  TAGNAMES: {
    scope: "resource",
    length: "1-512",
    validCharacters: `Can't use:<>%&\?/ or control characters`,
  },
  TAGNAMESTAGVALUES: {
    scope: "tag name",
    length: "1-256",
    validCharacters: `All characters.`,
  },
  TEMPLATESPECS: {
    scope: "resource group",
    length: "1-90",
    validCharacters: `Alphanumerics, underscores, parentheses, hyphens, and periods.`,
  },
}

export interface MICROSOFTSECURITY {
  ADVANCEDTHREATPROTECTIONSETTINGS: {
    scope: "resource group",
    length: "see value",
    validCharacters: `Must be current`,
  },
  ALERTSSUPPRESSIONRULES: {
    scope: "subscription",
    length: "1-260",
    validCharacters: `Alphanumerics, underscores, and hyphens.`,
  },
  ASSESSMENTMETADATA: {
    scope: "assessment type",
    length: "1-260",
    validCharacters: `Alphanumerics, underscores, and hyphens.`,
  },
  ASSESSMENTS: {
    scope: "assessment type",
    length: "1-260",
    validCharacters: `Alphanumerics, underscores, and hyphens.`,
  },
  AUTOMATIONS: {
    scope: "resource group",
    length: "1-260",
    validCharacters: `Alphanumerics, underscores, and hyphens.`,
  },
  AUTOPROVISIONINGSETTINGS: {
    scope: "subscription",
    length: "1-260",
    validCharacters: `Alphanumerics, underscores, and hyphens.`,
  },
  CONNECTORS: {
    scope: "subscription",
    length: "1-260",
    validCharacters: `Alphanumerics, underscores, and hyphens.`,
  },
  DEVICESECURITYGROUPS: {
    scope: "resource group",
    length: "1-260",
    validCharacters: `Alphanumerics, underscores, and hyphens.`,
  },
  INFORMATIONPROTECTIONPOLICIES: {
    scope: "resource group",
    length: "see values",
    validCharacters: `Use one of:customeffective`,
  },
  IOTSECURITYSOLUTIONS: {
    scope: "resource group",
    length: "1-260",
    validCharacters: `Alphanumerics, underscores, and hyphens.`,
  },
  LOCATIONSAPPLICATIONWHITELISTINGS: {
    scope: "subscription",
    length: "1-260",
    validCharacters: `Alphanumerics, underscores, and hyphens.`,
  },
  LOCATIONSJITNETWORKACCESSPOLICIES: {
    scope: "resource group",
    length: "1-260",
    validCharacters: `Alphanumerics, underscores, and hyphens.`,
  },
  INGESTIONSETTINGS: {
    scope: "subscription",
    length: "1-260",
    validCharacters: `Alphanumerics, underscores, and hyphens.`,
  },
  PRICINGS: {
    scope: "subscription",
    length: "1-260",
    validCharacters: `Alphanumerics, underscores, and hyphens.`,
  },
  SECURITYCONTACTS: {
    scope: "subscription",
    length: "1-260",
    validCharacters: `Alphanumerics, underscores, and hyphens.`,
  },
  SETTINGS: {
    scope: "subscription",
    length: "see values",
    validCharacters: `Use one of:MCASSentinelWDATPWDATP_EXCLUDE_LINUX_PUBLIC_PREVIEW`,
  },
  SERVERVULNERABILITYASSESSMENTS: {
    scope: "resource type",
    length: "see value",
    validCharacters: `Must be Default`,
  },
  SQLVULNERABILITYASSESSMENTSBASELINERULES: {
    scope: "Vulnerability assessment",
    length: "1-260",
    validCharacters: `Alphanumerics, underscores, and hyphens.`,
  },
}

export interface MICROSOFTSERVICEBUS {
  NAMESPACES: {
    scope: "global",
    length: "6-50",
    validCharacters: `Alphanumerics and hyphens. Start with a letter.  End with a letter or number. For more information, see Create namespace.`,
  },
  NAMESPACESAUTHORIZATIONRULES: {
    scope: "namespace",
    length: "1-50",
    validCharacters: `Alphanumerics, periods, hyphens, and underscores. Start and end with alphnumeric.`,
  },
  NAMESPACESDISASTERRECOVERYCONFIGS: {
    scope: "global",
    length: "6-50",
    validCharacters: `Alphanumerics and hyphens. Start with letter.  End with alphanumeric.`,
  },
  NAMESPACESMIGRATIONCONFIGURATIONS: {
    scope: "namespace",
    length: "",
    validCharacters: `Should always be $default.`,
  },
  NAMESPACESQUEUES: {
    scope: "namespace",
    length: "1-260",
    validCharacters: `Alphanumerics, periods, hyphens, underscores, and slashes. Start and end with alphanumeric.`,
  },
  NAMESPACESQUEUESAUTHORIZATIONRULES: {
    scope: "queue",
    length: "1-50",
    validCharacters: `Alphanumerics, periods, hyphens, and underscores. Start and end with alphnumeric.`,
  },
  NAMESPACESTOPICS: {
    scope: "namespace",
    length: "1-260",
    validCharacters: `Alphanumerics, periods, hyphens, underscores, and slashes. Start and end with alphanumeric.`,
  },
  NAMESPACESTOPICSAUTHORIZATIONRULES: {
    scope: "topic",
    length: "1-50",
    validCharacters: `Alphanumerics, periods, hyphens, and underscores. Start and end with alphnumeric.`,
  },
  NAMESPACESTOPICSSUBSCRIPTIONS: {
    scope: "topic",
    length: "1-50",
    validCharacters: `Alphanumerics, periods, hyphens, and underscores. Start and end with alphnumeric.`,
  },
  NAMESPACESTOPICSSUBSCRIPTIONSRULES: {
    scope: "subscription",
    length: "1-50",
    validCharacters: `Alphanumerics, periods, hyphens, and underscores. Start and end with alphnumeric.`,
  },
}

export interface MICROSOFTSERVICEFABRIC {
  CLUSTERS: {
    scope: "region",
    length: "4-23",
    validCharacters: `Lowercase letters, numbers, and hyphens. Start with lowercase letter.  End with lowercase letter or number.`,
  },
}

export interface MICROSOFTSIGNALRSERVICE {
  SIGNALR: {
    scope: "global",
    length: "3-63",
    validCharacters: `Alphanumerics and hyphens. Start with letter.  End with letter or number.`,
  },
}

export interface MICROSOFTSQL {
  MANAGEDINSTANCES: {
    scope: "global",
    length: "1-63",
    validCharacters: `Lowercase letters, numbers, and hyphens.  Can't start or end with hyphen.`,
  },
  SERVERS: {
    scope: "global",
    length: "1-63",
    validCharacters: `Lowercase letters, numbers, and hyphens. Can't start or end with hyphen.`,
  },
  SERVERSADMINISTRATORS: {
    scope: "server",
    length: "",
    validCharacters: `Must be ActiveDirectory.`,
  },
  SERVERSDATABASES: {
    scope: "server",
    length: "1-128",
    validCharacters: `Can't use:<>*%&:\/? or control charactersCan't end with period or space.`,
  },
  SERVERSDATABASESSYNCGROUPS: {
    scope: "database",
    length: "1-150",
    validCharacters: `Alphanumerics, hyphens, and underscores.`,
  },
  SERVERSELASTICPOOLS: {
    scope: "server",
    length: "1-128",
    validCharacters: `Can't use:<>*%&:\/? or control charactersCan't end with period or space.`,
  },
  SERVERSFAILOVERGROUPS: {
    scope: "global",
    length: "1-63",
    validCharacters: `Lowercase letters, numbers, and hyphens. Can't start or end with hyphen.`,
  },
  SERVERSFIREWALLRULES: {
    scope: "server",
    length: "1-128",
    validCharacters: `Can't use:<>*%&:;\/? or control charactersCan't end with period.`,
  },
  SERVERSKEYS: {
    scope: "server",
    length: "",
    validCharacters: `Must be in format:VaultName_KeyName_KeyVersion.`,
  },
}

export interface MICROSOFTSTORAGE {
  STORAGEACCOUNTS: {
    scope: "global",
    length: "3-24",
    validCharacters: `Lowercase letters and numbers.`,
  },
  STORAGEACCOUNTSBLOBSERVICES: {
    scope: "storage account",
    length: "",
    validCharacters: `Must be default.`,
  },
  STORAGEACCOUNTSBLOBSERVICESCONTAINERS: {
    scope: "storage account",
    length: "3-63",
    validCharacters: `Lowercase letters, numbers, and hyphens. Start with lowercase letter or number.  Can't use consecutive hyphens.`,
  },
  STORAGEACCOUNTSFILESERVICES: {
    scope: "storage account",
    length: "",
    validCharacters: `Must be default.`,
  },
  STORAGEACCOUNTSFILESERVICESSHARES: {
    scope: "storage account",
    length: "3-63",
    validCharacters: `Lowercase letters, numbers, and hyphens. Can't start or end with hyphen.  Can't use consecutive hyphens.`,
  },
  STORAGEACCOUNTSMANAGEMENTPOLICIES: {
    scope: "storage account",
    length: "",
    validCharacters: `Must be default.`,
  },
  BLOB: {
    scope: "container",
    length: "1-1024",
    validCharacters: `Any URL characters, case sensitive`,
  },
  QUEUE: {
    scope: "storage account",
    length: "3-63",
    validCharacters: `Lowercase letters, numbers, and hyphens. Can't start or end with hyphen.  Can't use consecutive hyphens.`,
  },
  TABLE: {
    scope: "storage account",
    length: "3-63",
    validCharacters: `Alphanumerics. Start with letter.`,
  },
}

export interface MICROSOFTSTORAGESYNC {
  STORAGESYNCSERVICES: {
    scope: "resource group",
    length: "1-260",
    validCharacters: `Alphanumerics, spaces, periods, hyphens, and underscores. Can't end with period or space.`,
  },
  STORAGESYNCSERVICESSYNCGROUPS: {
    scope: "storage sync service",
    length: "1-260",
    validCharacters: `Alphanumerics, spaces, periods, hyphens, and underscores. Can't end with period or space.`,
  },
}

export interface MICROSOFTSTORSIMPLE {
  MANAGERS: {
    scope: "resource group",
    length: "2-50",
    validCharacters: `Alphanumerics and hyphens. Start with letter.  End with alphanumeric.`,
  },
}

export interface MICROSOFTSTREAMANALYTICS {
  STREAMINGJOBS: {
    scope: "resource group",
    length: "3-63",
    validCharacters: `Alphanumerics, hyphens, and underscores.`,
  },
  STREAMINGJOBSFUNCTIONS: {
    scope: "streaming job",
    length: "3-63",
    validCharacters: `Alphanumerics, hyphens, and underscores.`,
  },
  STREAMINGJOBSINPUTS: {
    scope: "streaming job",
    length: "3-63",
    validCharacters: `Alphanumerics, hyphens, and underscores.`,
  },
  STREAMINGJOBSOUTPUTS: {
    scope: "streaming job",
    length: "3-63",
    validCharacters: `Alphanumerics, hyphens, and underscores.`,
  },
  STREAMINGJOBSTRANSFORMATIONS: {
    scope: "streaming job",
    length: "3-63",
    validCharacters: `Alphanumerics, hyphens, and underscores.`,
  },
}

export interface MICROSOFTSYNAPSE {
  WORKSPACES: {
    scope: "global",
    length: "1-50",
    validCharacters: `Lowercase letters, hyphens, and numbers. Start and end with letter or number. Can't contain -ondemand`,
  },
  WORKSPACESBIGDATAPOOLS: {
    scope: "workspace",
    length: "1-15",
    validCharacters: `Letters and numbers. Start with letter.  End with letter or number. Can't contain reserved word.`,
  },
  WORKSPACESSQLPOOLS: {
    scope: "workspace",
    length: "1-60",
    validCharacters: `Can't contain <>*%&:\/?@- or control characters.  Can't end with .  or space.  Can't contain reserved word.`,
  },
}

export interface MICROSOFTTIMESERIESINSIGHTS {
  ENVIRONMENTS: {
    scope: "resource group",
    length: "1-90",
    validCharacters: `Can't use:'<>%&:\?/# or control characters`,
  },
  ENVIRONMENTSACCESSPOLICIES: {
    scope: "environment",
    length: "1-90",
    validCharacters: `Can't use: '<>%&:\?/# or control characters`,
  },
  ENVIRONMENTSEVENTSOURCES: {
    scope: "environment",
    length: "1-90",
    validCharacters: `Can't use:'<>%&:\?/# or control characters`,
  },
  ENVIRONMENTSREFERENCEDATASETS: {
    scope: "environment",
    length: "3-63",
    validCharacters: `Alphanumerics`,
  },
}

export interface MICROSOFTWEB {
  CERTIFICATES: {
    scope: "resource group",
    length: "1-260",
    validCharacters: `Can't use:/ Can't end with space or period.`,
  },
  SERVERFARMS: {
    scope: "resource group",
    length: "1-40",
    validCharacters: `Alphanumeric, hyphens and Unicode characters that can be mapped to Punycode`,
  },
  SITES: {
    scope: "global or per domain. See note below.",
    length: "2-60",
    validCharacters: `Alphanumeric, hyphens and Unicode characters that can be mapped to PunycodeCan't start or end with hyphen.`,
  },
  SITESSLOTS: {
    scope: "site",
    length: "2-59",
    validCharacters: `Alphanumeric, hyphens and Unicode characters that can be mapped to Punycode`,
  },
}

