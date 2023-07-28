'use client';
import { useState } from 'react';
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
import { CodeSnippet } from '@/components/code-snippet';
import PeriodicTable, { compassData } from '@/components/periodic-table';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

export default function Page() {
  const [activeElement, setActiveElement] = useState<Item | null>(null);
  const [open, setOpen] = useState(false);
  const [textSearch, setTextSearch] = useState('');

  // Add more functionality here if needed, like functions to add/remove groups or items

  return (
    <main className="flex-col min-h-screen items-center justify-center p-24 bg-slate-900">
      <Sheet onOpenChange={() => setOpen((prev) => !prev)} open={open}>
      <SheetContent className="bg-[rgba(0,0,0,0.8)] sm:max-w-[720px]">
          <SheetHeader className="space-y-4">
            <div className="flex flex-col items-start space-y-4">
              <div>
                <Image width={60} height={60} src={activeElement?.icon} />
              </div>
              <div className="flex items-center space-x-4">
                <span
                  className={`mr-2 bg-slate-700 text-white px-4 py-2 rounded-md text-xl font-semibold`}
                >
                  {activeElement?.slug}
                </span>
                <h1 className="text-3xl font-bold text-gray-100 inline">{activeElement?.name}</h1>
              </div>
            </div>
            <div className="flex justify-start items-center space-x-4">
              {activeElement?.terraformUrl && (
                <a
                  target="_blank"
                  href={activeElement?.terraformUrl}
                  className="flex justify-start items-center text-sm flex break-all border p-2 rounded-lg border-gray-500 hover:border-gray-200 hover:bg-gray-700 transition-all"
                >
                  <div className="mr-2">
                    <TerraformLogo width={24} height={24} />
                  </div>
                  <span>Terraform</span>
                </a>
              )}
              {activeElement?.learnUrl && (
                <a
                  target="_blank"
                  href={activeElement?.learnUrl}
                  className="flex justify-start items-center text-sm flex break-all border p-2 rounded-lg border-gray-500 hover:border-gray-200 hover:bg-gray-700 transition-all"
                >
                  <div className="mr-2">
                    <Microsoft width={24} height={24} />
                  </div>
                  <span>Microsoft Learn</span>
                </a>
              )}
            </div>
            <CodeSnippet codeString={activeElement?.code ?? ''} />

            <p className="text-gray-100">{activeElement?.description}</p>
            <h2 className="text-lg font-bold text-accent">Restrictions:</h2>
            <div className="flex flex-col space-y-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-100">Length:</h3>
                <p className="text-gray-100">{activeElement?.length}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-100">Valid Characters:</h3>
                <p className="text-gray-100">{activeElement?.validCharacters}</p>
              </div>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <div className="flex justify-center items-center mb-12">
        <div className="mr-6">
          <AzureLogo />
        </div>

        <div className="flex flex-col text-center">
          <span className="font-bold text-4xl text-gray-100">Azure Resource</span>
          <span className="font-semibold text-2xl text-accent">
            Naming Convention Periodic Table
          </span>
        </div>
      </div>
      <Input
        onChange={(e) => setTextSearch(e?.target?.value)}
        className="bg-slate-800 px-4 py-2 rounded-lg w-full max-w-sm mx-auto shadow-lg text-slate-200"
        placeholder="Search here..."
      />
      <PeriodicTable
        textSearch={textSearch}
        setActiveElement={setActiveElement}
        setOpen={setOpen}
      />
    </main>
  );
}

function TerraformLogo({ width: width = 32, height: height = 32 }) {
  return (
    <svg width={width} height={height} viewBox="0 0 128 128">
      <g fill-rule="evenodd">
        <path
          d="M77.941 44.5v36.836L46.324 62.918V26.082zm0 0"
          fill="#5c4ee5"
        ></path>
        <path
          d="M81.41 81.336l31.633-18.418V26.082L81.41 44.5zm0 0"
          fill="#4040b2"
        ></path>
        <path
          d="M11.242 42.36L42.86 60.776V23.941L11.242 5.523zm0 0M77.941 85.375L46.324 66.957v36.82l31.617 18.418zm0 0"
          fill="#5c4ee5"
        ></path>
      </g>
    </svg>
  );
}

function Microsoft({ width: width = 32, height: height = 32 }) {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
    >
      <path fill="#f25022" d="M7.097 7.097H24.14V24.14H7.097z" />
      <path fill="#7fba00" d="M25.859 7.097h17.043V24.14H25.859z" />
      <path fill="#00a4ef" d="M7.097 25.859H24.14v17.043H7.097z" />
      <path fill="#ffb900" d="M25.859 25.859h17.043v17.043H25.859z" />
    </svg>
  );
}
