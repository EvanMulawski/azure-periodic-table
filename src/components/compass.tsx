/* src/components/compass.tsx */

import { Categories } from '@/app/constants';

export type CompassData = {
  name: Categories;
  color: string;
}[];

export const Compass = ({
  activeCategory,
  setActiveCategory,
  compassData,
}: {
  activeCategory: Categories | null;
  setActiveCategory: (prev: any) => Categories | null;
  compassData: CompassData;
}) => {
  return (
    <div className="flex flex-col ml-12 text-white">
      {compassData.map((item, i) => {
        const isActive =
          activeCategory === null || activeCategory === item.name;
        return (
          <div
            key={i}
            className={`flex flex-row items-center dark:text-white text-stone-800 justify-end cursor-pointer filter transition-colors ${
              isActive ? 'brightness-100' : 'brightness-75'
            }  hover:brightness-90`}
            onClick={() =>
              setActiveCategory((prev: any) =>
                prev === item.name ? null : item.name
              )
            }
          >
            <span className="  mr-2 whitespace-nowrap">{item.name}</span>
            <div className={`w-6 h-6 rounded my-1 ${item.color}`}></div>
          </div>
        );
      })}
    </div>
  );
};
