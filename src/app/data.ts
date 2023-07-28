/* src/app/data.ts */

import { Categories } from './constants';
export { columns } from '../../python/columns';

export type Item = {
  name: string;
  slug: string;
  description: string;
  length: string;
  category: Categories;
  learnUrl: string;
  terraformUrl: string;
  restrictions: string;
  resource: string;
  entity: string;
  scope: string;
  icon: string;
  code: string;
};

export type ColumnType = {
  items: Item[];
};
