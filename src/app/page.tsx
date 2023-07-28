/* src/app/page.tsx */

'use client';
import { useState } from 'react';
import { Item } from './data';
import { AzureLogo } from '@/components/azure-logo';
import PeriodicTable from '@/components/periodic-table';
import Search from '@/components/search';
import Sidebar from '@/components/sidebar';
import Topbar from '@/components/topbar';

export default function Page() {
  const [activeElement, setActiveElement] = useState<Item | null>(null);
  const [open, setOpen] = useState(false);
  const [textSearch, setTextSearch] = useState('');

  return (
    <main className="flex-col min-h-screen items-center justify-center p-8 bg-white dark:bg-slate-950">
      <Topbar />
      <Sidebar activeElement={activeElement} open={open} setOpen={setOpen} />
      <div className="flex justify-center items-center mb-4">
        <div className="mr-6">
          <AzureLogo />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-4xl dark:text-white text-slate-800">
            Azure Resource
          </span>
          <span className="font-semibold text-2xl text-accent">
            Naming Convention Periodic Table
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Search setTextSearch={setTextSearch} />
      </div>
      <PeriodicTable
        textSearch={textSearch}
        setActiveElement={setActiveElement}
        setOpen={setOpen}
      />
    </main>
  );
}
