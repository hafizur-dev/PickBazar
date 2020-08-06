import { ObjectType, ID, Field } from 'type-graphql';

@ObjectType()
export default class Address {
  @Field(type => ID)
  id: string;

  @Field()
  type: string;

  @Field()
  title: string;

  @Field()
  location: string;
}
