import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export default class Contact {
  @Field()
  id: string;

  @Field()
  type: string;

  @Field()
  number: string;
}
