import { useState } from 'react';
import { Grid } from './grid';

import { Compass, type CompassData } from './compass';
import { columns } from '@/app/data';
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
  textSearch,
}: {
  setOpen: () => void;
  setActiveElement: () => void;
  textSearch: string;
}) {
  const [activeCateogory, setActiveCategory] = useState<Categories | null>(
    null
  );
  return (
    <div className="flex justify-center items-start my-6">
      {columns.map((group, i) => (
        <Grid
          select={() => setOpen(true)}
          activeCategory={activeCateogory}
          setActiveCategory={setActiveCategory}
          key={i}
          items={group.items}
          textSearch={textSearch}
          setActiveElement={setActiveElement}
          compassData={compassData}
        />
      ))}
      <Compass
        activeCategory={activeCateogory}
        setActiveCategory={setActiveCategory}
        compassData={compassData}
      />
    </div>
  );
}
