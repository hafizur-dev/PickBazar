import { ObjectType, Field, Int } from 'type-graphql';
import Product from './product.type';
@ObjectType()
export default class ProductsConnection {
  @Field(type => [Product])
  items: Product[];

  @Field(type => Int)
  totalCount: number;

  @Field()
  hasMore: boolean;
}
