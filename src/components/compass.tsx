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
}) => (
  <div className="flex flex-col ml-12 text-white">
    {compassData.map((item, i) => (
      <div
        key={i}
        className="flex flex-row items-center justify-end cursor-pointer filter transition-colors hover:brightness-75"
        onClick={() =>
          setActiveCategory((prev: any) =>
            prev === item.name ? null : item.name
          )
        }
      >
        <span className="  mr-2 whitespace-nowrap">{item.name}</span>
        <div className={`w-6 h-6 rounded my-1 ${item.color}`}></div>
      </div>
    ))}
  </div>
);
