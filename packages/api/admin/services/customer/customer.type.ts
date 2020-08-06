import { Field, ObjectType, Int } from 'type-graphql';
import User from '../user/user.type';
@ObjectType()
export default class Customer extends User {
  @Field({ defaultValue: false })
  has_blocked: boolean;

  @Field(type => Int, { nullable: true })
  total_order?: number;

  @Field(type => Int, { nullable: true })
  total_order_amount?: number;

  @Field({ defaultValue: 'silver' })
  rank?: string;
}
