import { registerEnumType } from 'type-graphql';

export enum ProductType {
  BOOK = 'book',
  BAGS = 'bags',
  GROCERY = 'grocery',
  MEDICINE = 'medicine',
  CLOTH = 'cloth',
  CLOTHING = 'clothing',
  FURNITURE = 'furniture',
  MAKEUP = 'makeup',
}

registerEnumType(ProductType, {
  name: 'ProductType',
  description: 'The basic product types',
});
