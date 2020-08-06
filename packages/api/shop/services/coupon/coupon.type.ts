import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export default class Coupon {
  @Field()
  id: number;

  @Field()
  code: string;

  @Field({ nullable: true })
  image?: string;

  @Field()
  discountInPercent: number;
}
