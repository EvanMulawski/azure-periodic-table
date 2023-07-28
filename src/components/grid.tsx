/* src/components/grid.tsx */

import type { Categories } from '@/app/constants';
import type { CompassData } from './compass';
import Image from 'next/image';
import type { Item } from '@/app/data';

interface CellProps {
  item: Item;
  zoomLevel?: 0 | 1 | 2;
  activeCategory: Categories | null;
  setActiveCategory: (category: Categories | null) => void;
  select: () => void;
  setActiveElement: (element: any) => void;
  compassData: CompassData;
  textSearch: string;
}

const Cell: React.FC<CellProps> = ({
  item,
  zoomLevel = 0,
  activeCategory,
  setActiveCategory,
  select,
  setActiveElement,
  compassData,
  textSearch,
}) => {
  const color = compassData.find((c) => c.name === item.category)?.color;

  const height = zoomLevel === 0 ? 'h-16' : zoomLevel === 1 ? 'h-24' : 'h-28';
  const width = zoomLevel === 0 ? 'w-16' : zoomLevel === 1 ? 'w-24' : 'w-28';

  const isActiveCategory =
    activeCategory === null || activeCategory === item.category;

  const isActiveSearch =
    textSearch === '' ||
    item.name.toLowerCase().includes(textSearch.toLowerCase()) ||
    item.code.toLowerCase().includes(textSearch.toLowerCase());

  // disable if there is a search and the item is not in the search
  // or if there is a category and the item is not in the category

  const isDisabled = !isActiveCategory || !isActiveSearch;

  const colorOption = isDisabled ? 'bg-gray-400' : color;

  const transparent = isDisabled ? 'opacity-50' : 'opacity-100';

  const hoverScale = isDisabled ? '' : 'hover:scale-150';

  console.log(item.icon);

  return (
    <div
      onClick={() => {
        if (isDisabled) return;
        setActiveElement(item);
        select();
      }}
      className={`${height} ${width} border-white border m-0.5 p-1 ${colorOption} ${transparent} justify-center items-center cursor-pointer transition-all ${hoverScale} z-0 hover:z-10 `}
    >
      <div className="flex flex-col relative h-full w-full">
        <div className="flex w-full justify-between items-center">
          {item.icon ? (
            <Image width={10} height={10} className="" src={item.icon} />
          ) : null}
          <span className="text-[0.5rem]">{item.length ?? '1-100'}</span>
        </div>
        <div className="justify-start w-full mt-auto font-bold text-xs">
          {item.slug}
        </div>
        <div className="justify-start w-full mt-auto text-[0.5rem] overflow-hidden">
          {item.name}
        </div>
      </div>
    </div>
  );
};

interface GridProps {
  items: Item[];
  activeCategory: Categories | null;
  setActiveCategory: (category: Categories | null) => void;
  select: () => void;
  setActiveElement: (element: any) => void;
  compassData: CompassData;
  textSearch: string;
}

export const Grid: React.FC<GridProps> = ({
  items,
  activeCategory,
  setActiveCategory,
  select,
  setActiveElement,
  compassData,
  textSearch,
}) => (
  <div className={`flex flex-col w-fit h-full relative`}>
    {items.map((item, i) => (
      <Cell
        textSearch={textSearch}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        key={i}
        item={item}
        select={select}
        setActiveElement={setActiveElement}
        compassData={compassData}
      />
    ))}
  </div>
);
