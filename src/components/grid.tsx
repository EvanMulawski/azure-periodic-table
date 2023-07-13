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
}

const Cell: React.FC<CellProps> = ({
  item,
  zoomLevel = 0,
  activeCategory,
  setActiveCategory,
  select,
  setActiveElement,
  compassData,
}) => {
  const color = compassData.find((c) => c.name === item.category)?.color;

  const height = zoomLevel === 0 ? 'h-16' : zoomLevel === 1 ? 'h-24' : 'h-28';
  const width = zoomLevel === 0 ? 'w-16' : zoomLevel === 1 ? 'w-24' : 'w-28';

  const isActiveCategory = activeCategory === item.category;

  const isDisabled = activeCategory !== null && !isActiveCategory;

  const colorOption = isDisabled ? 'bg-gray-400' : color;

  const transparent = isDisabled ? 'opacity-50' : 'opacity-100';

  const hoverScale = isDisabled ? '' : 'hover:scale-150';

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
          <Image width={10} height={10} className="" src={item.icon} />
          <span className="text-[0.5rem]">{item.range ?? '1-100'}</span>
        </div>
        <div className="justify-start w-full mt-auto font-bold text-xs">
          {item.text}
        </div>
        <div className="justify-start w-full mt-auto text-[0.5rem] overflow-hidden">
          {item.subText ?? 'no'}
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
}

export const Grid: React.FC<GridProps> = ({
  items,
  activeCategory,
  setActiveCategory,
  select,
  setActiveElement,
  compassData,
}) => (
  <div className={`flex flex-col w-fit h-full relative`}>
    {items.map((item, i) => (
      <Cell
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
