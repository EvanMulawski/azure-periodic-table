import { cn } from '@/lib/utils';
import { Command, CommandInput } from './ui/command';
import React from 'react';

/* test */

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  setTextSearch: (value: string) => void;
}

const Search: React.FC<Props> = ({ setTextSearch, className }) => {
  return (
    <Command
      className={cn(
        'rounded-lg border dark:border-white border-stone-700 w-96',
        className
      )}
    >
      <CommandInput
        onValueChange={setTextSearch}
        className="bg-transparent w-96 dark:text-white text-black"
        placeholder="Search Azure resources..."
      />
    </Command>
  );
}

export default Search;
