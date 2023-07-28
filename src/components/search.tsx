import { Command, CommandInput } from './ui/command';

export default function Search({ setTextSearch }: { setTextSearch: Function }) {
  return (
    <Command className="rounded-lg border dark:border-white border-stone-700 w-80 ">
      <CommandInput
        onValueChange={(value) => setTextSearch(value)}
        className="bg-transparent w-80 dark:text-white text-black"
        placeholder="Search Azure resources..."
      />
    </Command>
  );
}
