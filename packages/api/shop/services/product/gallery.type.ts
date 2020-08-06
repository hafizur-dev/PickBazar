import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export default class Gallery {
  @Field()
  url: string;
}
