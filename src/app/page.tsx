'use client';

/* src/app/page.tsx */

import { useState } from 'react';
import { Item } from './data';
import PeriodicTable from '@/components/periodic-table';
import Search from '@/components/search';
import Sidebar from '@/components/sidebar';
import Topbar from '@/components/topbar';
import { Icons } from '@/components/ui/icons';

export default function Page() {
  const [activeElement, setActiveElement] = useState<Item | null>(null);
  const [open, setOpen] = useState(false);
  const [textSearch, setTextSearch] = useState('');

  return (
    <main className="relative flex-col min-h-screen items-center justify-center p-8 bg-white dark:bg-slate-950">
      <div className="static top-0 left-0 w-full md:flex flex-col items-center justify-center">
        <Topbar />
        <Sidebar activeElement={activeElement} open={open} setOpen={setOpen} />
        <div className="flex justify-start md:justify-center items-center my-4">
          <div className="mr-2 md:mr-6  md:my-0">
            <Icons.Azure className="w-8 h-8 md:w-32 md:h-32" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-md lg:text-4xl dark:text-white text-slate-800">
              Azure Resource
            </span>
            <span className="font-semibold text-md lg:text-2xl text-accent">
              Naming Convention Periodic Table
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Search setTextSearch={setTextSearch} />
        </div>
      </div>

      <PeriodicTable
        textSearch={textSearch}
        setActiveElement={setActiveElement}
        setOpen={setOpen}
      />
    </main>
  );
}
