'use client';

import { useState } from 'react';
import { Categories } from './constants';
import { columns } from './data';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { CalendarDays, Link2Icon } from 'lucide-react';
import HoverCardLogic from '@/components/hover-card-logic';

interface CellProps {
  item: Item;
  color: string;
  zoomLevel?: 0 | 1 | 2;
  activeCategory: Categories | null;
  setActiveCategory: (category: Categories | null) => void;
  select: () => void;
}

const Cell: React.FC<CellProps> = ({
  item,
  zoomLevel = 0,
  activeCategory,
  setActiveCategory,
  select,
}) => {
  const color = compassData.find((c) => c.name === item.category)?.color;

  const height = zoomLevel === 0 ? 'h-16' : zoomLevel === 1 ? 'h-24' : 'h-28';
  const width = zoomLevel === 0 ? 'w-16' : zoomLevel === 1 ? 'w-24' : 'w-28';

  const isActiveCategory = activeCategory === item.category;

  const colorOption =
    activeCategory !== null
      ? isActiveCategory
        ? color
        : 'bg-gray-400'
      : color;
  const transparent =
    activeCategory !== null
      ? activeCategory === item.category
        ? 'opacity-100'
        : 'opacity-50'
      : 'opacity-100';

  const hoverScale =
    activeCategory === null
      ? 'hover:scale-150'
      : activeCategory === item.category
      ? 'hover:scale-150'
      : '';

  return (
    <HoverCardLogic
      item={item}
      show={activeCategory === null || isActiveCategory}
    >
      <div
        onClick={select}
        className={`${height} ${width} border-white border m-0.5 p-1 ${colorOption} ${transparent} justify-center items-center cursor-pointer transition-all ${hoverScale} z-0 hover:z-10 `}
      >
        <div className="flex flex-col relative h-full w-full">
          <div className="flex w-full justify-between items-center">
            <span className="text-[0.5rem]">🔥</span>
            <span className="text-[0.5rem]">{item.range ?? '1-100'}</span>
          </div>
          <div className="justify-start w-full mt-auto font-bold text-xs">
            {item.text}
          </div>
          <div className="justify-start w-full mt-auto text-[0.5rem] overflow-hidden">
            {item.subText ?? 'no'}
          </div>
        </div>
      </div>
    </HoverCardLogic>
  );
};

interface GridProps {
  color: string;
  items: Item[];
  activeCategory: Categories | null;
  setActiveCategory: (category: Categories | null) => void;
  select: () => void;
}

const Grid: React.FC<GridProps> = ({
  color,
  items,
  activeCategory,
  setActiveCategory,
  select,
}) => (
  <div className={`flex flex-col w-fit h-full relative`}>
    {items.map((item, i) => (
      <Cell
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        key={i}
        color={color}
        item={item}
        select={select}
      />
    ))}
  </div>
);

export interface Item {
  text: string;
  subText?: string;
  range?: string;
  category: Categories;
  // Add more properties here if needed
}

interface Group {
  color: string;
  items: Item[];
}

export default function Page() {
  const [activeCateogory, setActiveCategory] = useState<Categories | null>(
    null
  );
  const [open, setOpen] = useState(false);

  // Add more functionality here if needed, like functions to add/remove groups or items

  return (
    <main className="flex-col min-h-screen items-center justify-center p-24 bg-slate-950">
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
          <Grid
            select={() => setOpen(true)}
            activeCategory={activeCateogory}
            setActiveCategory={setActiveCategory}
            key={i}
            color={group.color}
            items={group.items}
          />
        ))}
        <Compass
          activeCategory={activeCateogory}
          setActiveCategory={setActiveCategory}
        />
      </div>
    </main>
  );
}

const compassData = [
  { name: Categories.GENERAL, color: 'bg-gray-400' },
  { name: Categories.NETWORKING, color: 'bg-red-500' },
  { name: Categories.COMPUTEANDWEB, color: 'bg-orange-500' },
  { name: Categories.CONTAINERS, color: 'bg-yellow-400' },
  { name: Categories.DATABASES, color: 'bg-lime-400' },
  { name: Categories.STORAGE, color: 'bg-green-500' },
  { name: Categories.AIANDML, color: 'bg-cyan-500' },
  { name: Categories.ANALYTICSANDIOT, color: 'bg-blue-500' },
  { name: Categories.VIRTUALDESKTOP, color: 'bg-indigo-500' },
  { name: Categories.DEVTOOLS, color: 'bg-violet-700' },
  { name: Categories.INTEGRATION, color: 'bg-fuchsia-600' },
  { name: Categories.MIGRATION, color: 'bg-pink-500' },
  { name: Categories.MANAGEMENT, color: 'bg-rose-500' },
];

const Compass = ({
  activeCategory,
  setActiveCategory,
}: {
  activeCategory: Categories | null;
  setActiveCategory: (category: Categories | null) => void;
}) => (
  <div className="flex flex-col ml-12 text-white">
    {compassData.map((item, i) => (
      <div
        key={i}
        className="flex flex-row items-center justify-end cursor-pointer filter transition-colors hover:brightness-75"
        onClick={() => setActiveCategory(item.name)}
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
