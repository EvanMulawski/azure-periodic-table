import Image from 'next/image';
import CodeSnippet from './code-snippet';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet';
import { useEffect, useState } from 'react';
import type { Item } from '@/app/data';
import { Check, CopyIcon } from 'lucide-react';
import { compassData } from './periodic-table';
import { prefix } from '@/prefix';
import useMobile from '@/custom-hooks/use-mobile';

export default function Sidebar({
  setOpen,
  open,
  activeElement,
}: {
  setOpen: Function;
  open: boolean;
  activeElement: Item | null;
}) {
  const [showCopy, setShowCopy] = useState(false);
  const [copied, setCopied] = useState(false);
  const isMobile = useMobile();

  // after 2 seconds have copied be false if active
  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 2000);
    }
  }, [copied]);

  if (!activeElement) return null;

  return (
    <Sheet onOpenChange={() => setOpen((prev: boolean) => !prev)} open={open}>
      <SheetContent className="bg-bg sm:max-w-[720px] overflow-y-scroll">
        <SheetHeader>
          <div className="flex justify-start items-center">
            <Image
              width={44}
              height={44}
              alt={`icon for ${activeElement.name}`}
              src={`${prefix}${activeElement.icon}`}
            />
            <div
              onMouseEnter={() => setShowCopy(true)}
              onMouseLeave={() => setShowCopy(false)}
              onClick={() => {
                navigator.clipboard.writeText(activeElement.slug);
                setCopied(true);
              }}
              className={`relative ml-4 justify-start items-center text-sm flex break-all border py-2 px-6 cursor-pointer rounded-lg border-gray-500 hover:border-gray-200 transition-all mr-4`}
            >
              {showCopy && (
                <div className="absolute top-[-3px] right-1">
                  {copied ? <Check width={12} /> : <CopyIcon width={12} />}
                </div>
              )}

              <span>{activeElement.slug}</span>
            </div>
          </div>
        </SheetHeader>

        <SheetTitle className="mb-4">
          <div className="flex flex-col justify-center items-start mt-4 mb-2">
            <div className="flex">
              <span className="font-bold text-xl">{activeElement.name}</span>
            </div>
          </div>
        </SheetTitle>
        <div className="mb-4">
          <CodeSnippet codeString={activeElement?.code ?? ''} />
        </div>
        <span className="text-left break-words w-full mb-4">
          {activeElement?.description}
        </span>
        <div className="flex flex-col justify-center items-start my-6">
          <span className="mr-2 whitespace-nowrap">
            <span className="font-bold">Category </span>
          </span>
          <div className="flex justify-center items-center">
            <div
              className={`lg:mx-0 w-6 h-6 rounded my-1 ${
                compassData.find((item) => item.name === activeElement.category)
                  ?.color
              }`}
            />
            <span className="ml-2">{activeElement.category}</span>
          </div>
        </div>
        <div className="my-6 text-left">
          <span className="font-bold">Scope</span>
          <div>
            <span>{activeElement?.scope}</span>
          </div>
        </div>
        <div className="my-6 text-left">
          <span className="font-bold">Length</span>
          <div>
            <span>{activeElement?.length}</span>
          </div>
        </div>
        <div className="my-6 text-left">
          <span className="font-bold">Restrictions</span>
          <div>
            <span>{activeElement?.restrictions}</span>
          </div>
        </div>
        <div />
        <div className="flex justify-start items-center my-6">
          {activeElement?.terraformUrl && (
            <a
              target="_blank"
              href={activeElement?.terraformUrl}
              className="flex justify-start items-center text-sm break-all border p-2 rounded-lg border-gray-500 hover:border-gray-200 transition-all mr-4"
            >
              <div className="mr-2">
                <TerraformLogo width={24} height={24} />
              </div>
              <span>{isMobile ? 'Deploy' : 'Terraform Code'}</span>
            </a>
          )}
          {activeElement?.learnUrl && (
            <a
              target="_blank"
              href={activeElement?.learnUrl}
              className="flex justify-start items-center text-sm flex break-all border p-2 rounded-lg border-gray-500 hover:border-gray-200 transition-all"
            >
              <div className="mr-2">
                <LearnLogo width={24} height={24} />
              </div>
              <span>{isMobile ? 'Learn' : 'Microsoft Learn'}</span>
            </a>
          )}
        </div>
      </SheetContent>
    </Sheet>
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

function LearnLogo({ width: width = 32, height: height = 32 }) {
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
