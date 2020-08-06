import { InputType, Field, ID, Int } from 'type-graphql';
import Coupon from './coupon.type';
import AddProductInput from '../product/product.input_type';

@InputType({ description: 'New coupon data' })
export default class AddCouponInput implements Partial<Coupon> {
  @Field(type => ID)
  id: string;

  @Field()
  title: string;

  @Field(type => Int)
  number_of_coupon: number;

  @Field(type => Int)
  discount_in_percent: number;

  @Field()
  category: string;

  @Field(type => [AddProductInput], { nullable: true })
  products: AddProductInput[];

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
