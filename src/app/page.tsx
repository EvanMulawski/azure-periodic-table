'use client';

import { useState } from 'react';

interface Item {
  text: string;
}

interface CellProps {
  item: Item;
  color: string;
}

const Cell: React.FC<CellProps> = ({ item, color }) => (
  <div
    className={`h-20 w-20 border border-white p-1 ${color} justify-center items-center cursor-pointer hover:brightness-75 transition-all`}
  >
    <div className="flex flex-col relative h-full w-full">
      <div className="flex w-full justify-between items-center">
        <span>🔥</span>
        <span>1-80</span>
      </div>
      <div className="justify-start w-full mt-auto font-bold text-lg">
        {item.text}
      </div>
      <div className="justify-start w-full mt-auto">{'hi'}</div>
    </div>
  </div>
);

interface GridProps {
  color: string;
  items: Item[];
}

const Grid: React.FC<GridProps> = ({ color, items }) => (
  <div className={`flex flex-col w-full h-full`}>
    {items.map((item, i) => (
      <Cell key={i} color={color} item={item} />
    ))}
  </div>
);

interface Item {
  text: string;
  // Add more properties here if needed
}

interface Group {
  color: string;
  items: Item[];
}

export default function Page() {
  // Add more functionality here if needed, like functions to add/remove groups or items

  return (
    <main className="flex-col min-h-screen items-center justify-center p-24">
      <div className="flex justify-center items-center mb-12">
        <div className="mr-6">
          <AzureLogo />
        </div>

        <div className="flex flex-col">
          <span className="font-bold text-4xl">Azure Resource</span>
          <span className="font-semibold text-2xl text-[#3bc8f4]">
            Naming Convention Periodic Table
          </span>
        </div>
      </div>
      <div className="flex justify-center items-start my-6">
        {columns.map((group, i) => (
          <Grid key={i} color={group.color} items={group.items} />
        ))}
        <Compass />
      </div>
    </main>
  );
}

const compassData = [
  { name: 'General', color: 'bg-gray-400' },
  { name: 'Networking', color: 'bg-red-500' },
  { name: 'Compute & Web', color: 'bg-orange-500' },
  { name: 'Containers', color: 'bg-yellow-400' },
  { name: 'Databases', color: 'bg-lime-400' },
  { name: 'Storage', color: 'bg-green-500' },
  { name: 'AI & ML', color: 'bg-cyan-500' },
  { name: 'Analytics & IoT', color: 'bg-blue-500' },
  { name: 'Virtual Desktop', color: 'bg-indigo-500' },
  { name: 'Dev Tools', color: 'bg-violet-700' },
  { name: 'Integration', color: 'bg-fuchsia-600' },
  { name: 'Migration', color: 'bg-pink-500' },
  { name: 'Management', color: 'bg-rose-500' },
];

const Compass = () => (
  <div className="flex flex-col ml-12">
    {compassData.map((item, i) => (
      <div
        key={i}
        className="flex flex-row items-center justify-end cursor-pointer filter transition-colors hover:brightness-75"
      >
        <span className="  mr-2 whitespace-nowrap">{item.name}</span>
        <div className={`w-6 h-6 rounded my-1 ${item.color}`}></div>
      </div>
    ))}
  </div>
);

const AzureLogo = () => (
  <svg viewBox="0 0 128 128" height={82} width={82}>
    <defs>
      <linearGradient
        id="azure-original-a"
        x1="60.919"
        y1="9.602"
        x2="18.667"
        y2="134.423"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#114A8B"></stop>
        <stop offset="1" stop-color="#0669BC"></stop>
      </linearGradient>
      <linearGradient
        id="azure-original-b"
        x1="74.117"
        y1="67.772"
        x2="64.344"
        y2="71.076"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-opacity=".3"></stop>
        <stop offset=".071" stop-opacity=".2"></stop>
        <stop offset=".321" stop-opacity=".1"></stop>
        <stop offset=".623" stop-opacity=".05"></stop>
        <stop offset="1" stop-opacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="azure-original-c"
        x1="68.742"
        y1="5.961"
        x2="115.122"
        y2="129.525"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3CCBF4"></stop>
        <stop offset="1" stop-color="#2892DF"></stop>
      </linearGradient>
    </defs>
    <path
      d="M46.09.002h40.685L44.541 125.137a6.485 6.485 0 01-6.146 4.413H6.733a6.482 6.482 0 01-5.262-2.699 6.474 6.474 0 01-.876-5.848L39.944 4.414A6.488 6.488 0 0146.09 0z"
      fill="url(#azure-original-a)"
      transform="translate(.587 4.468) scale(.91904)"
    ></path>
    <path
      d="M97.28 81.607H37.987a2.743 2.743 0 00-1.874 4.751l38.1 35.562a5.991 5.991 0 004.087 1.61h33.574z"
      fill="#0078d4"
    ></path>
    <path
      d="M46.09.002A6.434 6.434 0 0039.93 4.5L.644 120.897a6.469 6.469 0 006.106 8.653h32.48a6.942 6.942 0 005.328-4.531l7.834-23.089 27.985 26.101a6.618 6.618 0 004.165 1.519h36.396l-15.963-45.616-46.533.011L86.922.002z"
      fill="url(#azure-original-b)"
      transform="translate(.587 4.468) scale(.91904)"
    ></path>
    <path
      d="M98.055 4.408A6.476 6.476 0 0091.917.002H46.575a6.478 6.478 0 016.137 4.406l39.35 116.594a6.476 6.476 0 01-6.137 8.55h45.344a6.48 6.48 0 006.136-8.55z"
      fill="url(#azure-original-c)"
      transform="translate(.587 4.468) scale(.91904)"
    ></path>
  </svg>
);

const columns = [
  {
    color: 'bg-gray-400',
    items: [
      { text: 'apim' },
      { text: 'id-' },
      { text: 'mg-' },
      { text: 'policy-' },
      { text: 'rg-' },
    ],
  },
  {
    color: 'bg-red-500',
    items: [
      { text: 'agw-' },
      { text: 'asg-' },
      { text: 'bas-' },
      { text: 'cdnp-' },
      { text: 'cdne-' },
      { text: 'con-' },
      { text: 'dnsz-' },
      { text: 'pdnsz-' },
      { text: 'afw-' },
      { text: 'afwp-' } /* ... */,
    ],
  },
  {
    color: 'bg-red-500',
    items: [
      { text: 'erc-' },
      { text: 'fd-' },
      { text: 'fdfp-' },
      { text: 'lbi-' },
      { text: 'lbe-' },
      { text: 'rule-' },
      { text: 'lgw-' },
      { text: 'ng-' },
      { text: 'nic-' },
      { text: 'nsg-' },
    ],
  },
  {
    color: 'bg-red-500',

    items: [
      { text: 'nsgsr-' },
      { text: 'nw-' },
      { text: 'pl-' },
      { text: 'pip-' },
      { text: 'ippre-' },
      { text: 'rf-' },
      { text: 'rt-' },
      { text: 'se-' },
      { text: 'traf-' },
      { text: 'udr-' },
    ],
  },
  {
    color: 'bg-red-500',
    items: [
      { text: 'vnet-' },
      { text: 'snet-' },
      { text: 'peer-' },
      { text: 'vwan-' },
      { text: 'vpng-' },
      { text: 'vcn-' },
      { text: 'vst-' },
      { text: 'vgw-' },
      { text: 'waf' },
      { text: 'wafrg' },
    ],
  },
  {
    color: 'bg-orange-500',
    items: [
      { text: 'ase-' },
      { text: 'plan-' },
      { text: 'avail-' },
      { text: 'arcs-' },
      { text: 'arck' },
      { text: 'cld-' },
      { text: 'des' },
      { text: 'func-' },
      { text: 'gal' },
      { text: 'osdisk' },
    ],
  },
  {
    color: 'bg-orange-500',
    items: [
      { text: 'disk' },
      { text: 'ntf-' },
      { text: 'ntfns-' },
      { text: 'snap-' },
      { text: 'stapp' },
      { text: 'vm' },
      { text: 'vmss-' },
      { text: 'stvm' },
      { text: 'app-' },
    ],
  },
  {
    color: 'bg-yellow-400',
    items: [{ text: 'aks-' }, { text: 'cr' }, { text: 'ci' }, { text: 'sf-' }],
  },
  {
    color: 'bg-lime-400',
    items: [
      { text: 'cdb-' },
      { text: 'redis-' },
      { text: 'sql-' },
      { text: 'sqldb-' },
      { text: 'syn' },
      { text: 'synw' },
      { text: 'syndp' },
      { text: 'synsp' },
    ],
  },
  {
    color: 'bg-green-500',
    items: [
      { text: 'mysql-' },
      { text: 'psql-' },
      { text: 'sqlsdb-' },
      { text: 'sqlmi-' },
      { text: 'st' },
      { text: 'ssimp' },
      { text: 'srch-' },
      { text: 'cog-' },
      { text: 'mlw-' },
    ],
  },
  {
    color: 'bg-blue-500',
    items: [
      { text: 'as' },
      { text: 'dbw-' },
      { text: 'asa-' },
      { text: 'dec' },
      { text: 'dedb' },
      { text: 'adf-' },
      { text: 'dls' },
      { text: 'dla' },
      { text: 'evhns-' },
      { text: 'evh-' } /* ... */,
    ],
  },
  {
    color: 'bg-blue-500',
    items: [
      { text: 'evgd-' },
      { text: 'evgs-' },
      { text: 'evgt-' },
      { text: 'hadp-' },
      { text: 'hbase-' },
      { text: 'kafka-' },
      { text: 'spark-' },
      { text: 'storm-' },
      { text: 'mls-' },
      { text: 'iot-' } /* ... */,
    ],
  },
  {
    color: 'bg-blue-500',
    items: [
      { text: 'provs-' },
      { text: 'pcert-' },
      { text: 'pbi-' },
      { text: 'tsi-' },
      { text: 'vdp-' },
      { text: 'vdag-' },
      { text: 'vdws-' },
      { text: 'appcs-' },
      { text: 'sigr-' } /* ... */,
    ],
  },

  {
    color: 'bg-purple-500',
    items: [
      { text: 'ia-' },
      { text: 'logic-' },
      { text: 'sb-' },
      { text: 'sbq-' },
      { text: 'sbt-' },
      { text: 'migr-' },
      { text: 'dms-' },
      { text: 'rsv-' },
    ],
  },

  {
    color: 'bg-red-500',
    items: [
      { text: 'aa-' },
      { text: 'appi-' },
      { text: 'ag-' },
      { text: 'pview-' },
      { text: 'bp-' },
      { text: 'bps-' },
      { text: 'kv-' },
      { text: 'log-' },
    ],
  },
  // Add more groups here
];
