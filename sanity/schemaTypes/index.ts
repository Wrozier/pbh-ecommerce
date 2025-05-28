import { type SchemaTypeDefinition } from 'sanity';

import { blockContentType } from './blockContentType';
import { categoryType } from './categoryType';
import { postType } from './postType';
import { saleType } from './saleType';
import { productType } from './productType'; // ✅ Import this

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, saleType, productType], // ✅ Add it here
};
