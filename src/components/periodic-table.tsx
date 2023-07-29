import type { Dispatch, SetStateAction } from 'react';
import { Grid } from './grid';
import { Compass, type CompassData } from './compass';
import { Item, columns } from '@/app/data';
import { Categories } from '@/app/constants';

export const compassData: CompassData = [
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

export default function PeriodicTable({
  setOpen,
  setActiveElement,
  activeCategory,
  setActiveCategory,
  textSearch,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
  activeCategory: Categories | null;
  setActiveCategory: Dispatch<SetStateAction<Categories | null>>;
  setActiveElement: Dispatch<SetStateAction<Item | null>>;
  textSearch: string;
}) {
  return (
    <div className="flex-col-reverse flex w-full lg:flex-row lg:flex  justify-start md:justify-center items-start my-6 overflow-scroll flex-nowrap">
      <div className="flex justify-start md:justify-center items-start">
        {columns.map((group, i) => (
          <Grid
            select={() => setOpen(true)}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            key={i}
            items={group.items}
            textSearch={textSearch}
            setActiveElement={setActiveElement}
            compassData={compassData}
          />
        ))}
      </div>

      <Compass
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        compassData={compassData}
      />
    </div>
  );
}
