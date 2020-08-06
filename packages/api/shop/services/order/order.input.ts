import { InputType, Field, ID } from 'type-graphql';
import ProductInput from '../product/product.input';

@InputType()
export default class OrderInput {
  @Field(type => ID)
  id: string;
  @Field()
  address: string;

  @Field()
  contact: string;

  @Field()
  payment: string;

  @Field()
  schedule: string;

  @Field()
  quantity: number;

  @Field()
  price: number;

  @Field(type => [ProductInput])
  products: ProductInput[];
}
