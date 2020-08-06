import { ObjectType, Field, ID, Int } from 'type-graphql';

@ObjectType()
export default class OrderedProduct {
  @Field(type => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  category: string;

  @Field(type => Int)
  quantity: number;
}
