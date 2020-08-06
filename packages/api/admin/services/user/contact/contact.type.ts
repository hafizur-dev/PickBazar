import { ObjectType, ID, Field } from 'type-graphql';

@ObjectType()
export default class Contact {
  @Field(type => ID)
  id: string;

  @Field()
  type: string;

  @Field()
  number: string;
}
