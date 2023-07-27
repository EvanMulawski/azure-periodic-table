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
import CodeBlock from '@tiptap/extension-code-block';
import { EditorContent, ReactNodeViewRenderer, useEditor } from '@tiptap/react';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import { lowlight } from 'lowlight/lib/core';
import terraform from 'highlight.js/lib/languages/ruby';
import { CodeSnippet } from '@/components/code-snippet';

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
        <SheetContent className="bg-slate-950 sm:max-w-[500px]">
          <SheetHeader>
            <SheetTitle>{activeElement?.subText}</SheetTitle>
            <div className="flex justify-start items-center">
              {activeElement?.terraformUrl && (
                <a
                  target="_blank"
                  href={activeElement?.terraformUrl}
                  className="flex justify-start items-center text-sm flex break-all border p-2 rounded-lg border-gray-500 hover:border-gray-200 transition-all mr-4"
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
                  className="flex justify-start items-center text-sm flex break-all border p-2 rounded-lg border-gray-500 hover:border-gray-200 transition-all"
                >
                  <div className="mr-2">
                    <Microsoft width={24} height={24} />
                  </div>
                  <span>Microsoft Learn</span>
                </a>
              )}
            </div>
            <CodeSnippet codeString={activeElement?.terraformSnippet ?? ''} />

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
          <span className="font-semibold text-2xl text-accent">
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
