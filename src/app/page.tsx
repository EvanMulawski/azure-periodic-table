/* src/app/page.tsx */

'use client';

import { useState } from 'react';
import { Categories } from './constants';
import { Item, columns } from './data';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { AzureLogo } from '@/components/azure-logo';
import { Compass, type CompassData } from '@/components/compass';
import { Grid } from '@/components/grid';

export default function Page() {
  const [activeCateogory, setActiveCategory] = useState<Categories | null>(
    null
  );
  const [activeElement, setActiveElement] = useState<Item | null>(null);
  const [open, setOpen] = useState(false);

  const compassData: CompassData = [
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

  // Add more functionality here if needed, like functions to add/remove groups or items

  return (
    <main className="flex-col min-h-screen items-center justify-center p-24 bg-slate-950">
      <Sheet onOpenChange={() => setOpen((prev) => !prev)} open={open}>
        <SheetContent className="bg-slate-950">
          <SheetHeader>
            <SheetTitle>{activeElement?.text}</SheetTitle>
            <SheetDescription>{activeElement?.subText}</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
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
            items={group.items}
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
    </main>
  );
}
