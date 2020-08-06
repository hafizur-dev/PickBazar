import { Field, ID, Int, ObjectType, Float } from 'type-graphql';
import OrderedProduct from './ordered_product.type';

@ObjectType()
export default class Order {
  @Field(type => ID)
  id: string;

  @Field(type => ID)
  customer_id: string;

  @Field(type => Float)
  amount: number;

  @Field()
  payment_method: string;

  @Field()
  contact_number: string;

  @Field()
  delivery_address: string;

  @Field()
  status: string;

  @Field(type => [OrderedProduct])
  products: OrderedProduct[];

  @Field({ nullable: true })
  description?: string;

  @Field(type => Int, { nullable: true })
  discount: number;

  @Field(type => Int)
  delivery_fee: number;

  @Field()
  creation_date: Date;
}
