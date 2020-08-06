import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export default class Payment {
  @Field(type => String)
  status: number;
}
