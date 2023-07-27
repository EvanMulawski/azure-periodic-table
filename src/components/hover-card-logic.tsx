/* src/components/hover-card-logic.tsx */

import { HoverCardTrigger } from '@radix-ui/react-hover-card';
import { HoverCard, HoverCardContent } from './ui/hover-card';
import { Link2Icon } from 'lucide-react';
import { Item } from '@/app/page';
import Link from 'next/link';

export default function HoverCardLogic({
  show = true,
  children,
  item,
}: {
  show: boolean;
  children: React.ReactNode;
  item: Item;
}) {
  if (!show) return children;
  return (
    <HoverCard>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <span>🔥</span>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{item.text}</h4>
            <p className="text-sm">{item.subText}</p>
            <div className="flex items-center pt-2">
              <Link2Icon className="mr-2 h-4 w-4 opacity-70" />{' '}
              <a
                href="https://terraform.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-xs text-muted-foreground">
                  https://terraform.io/
                </span>
              </a>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
