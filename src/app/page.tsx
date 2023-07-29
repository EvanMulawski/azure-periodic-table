'use client';

/* src/app/page.tsx */

import { useState } from 'react';
import { Item } from './data';
import PeriodicTable, { compassData } from '@/components/periodic-table';
import Search from '@/components/search';
import Sidebar from '@/components/sidebar';
import Topbar from '@/components/topbar';
import { Icons } from '@/components/ui/icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Categories } from './constants';
import { Box, BoxIcon, BoxSelect, PlusSquare } from 'lucide-react';

export default function Page() {
  const [activeElement, setActiveElement] = useState<Item | null>(null);
  const [open, setOpen] = useState(false);
  const [textSearch, setTextSearch] = useState('');

  const [activeCategory, setActiveCategory] = useState<Categories | null>(null);

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
          <div className="flex xl:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button
                  onClick={() => setOpen((prev) => !prev)}
                  variant={'ghost'}
                >
                  <PlusSquare className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-bg justify-center items-center flex-col max-h-52 overflow-scroll">
                {compassData.map((item, i) => {
                  const isActive =
                    activeCategory === null || activeCategory === item.name;
                  return (
                    <DropdownMenuItem
                      key={i}
                      className="justify-center items-center"
                    >
                      <Button
                        onClick={() => {
                          setActiveCategory((prev: any) =>
                            prev === item.name ? null : item.name
                          );
                          setOpen(false);
                        }}
                        variant={'ghost'}
                        className={`flex justify-start items-center w-full ${
                          isActive ? 'brightness-100' : 'brightness-75'
                        }  hover:brightness-90`}
                      >
                        <div
                          className={`px-1 lg:mx-0 w-6 h-6 rounded my-1 ${item.color}`}
                        ></div>
                        <span className="text-sm px-2">{item.name}</span>
                      </Button>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      <PeriodicTable
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        textSearch={textSearch}
        setActiveElement={setActiveElement}
        setOpen={setOpen}
      />
    </main>
  );
}
