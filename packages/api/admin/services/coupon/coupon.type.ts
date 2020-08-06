import { Field, ID, Int, ObjectType } from 'type-graphql';
import Product from '../product/product.type';
@ObjectType()
export default class Coupon {
  @Field(type => ID)
  id: string;

  @Field()
  title: string;

  @Field(type => Int)
  number_of_coupon: number;

  @Field(type => Int, { defaultValue: 0 })
  number_of_used_coupon?: number;

  @Field(type => Int)
  discount_in_percent: number;

  @Field()
  category: string;

  @Field(type => [Product], { nullable: true })
  products: Product[];

  @Field()
  code: string;

  @Field(type => Int, { defaultValue: 0 })
  minimum_amount: number;

  @Field({ defaultValue: 'active' })
  status: string;

  @Field({ nullable: true })
  expiration_date?: Date;

  @Field({ nullable: true })
  description?: string;

  @Field()
  creation_date: Date;
}
