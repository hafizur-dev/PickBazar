import { ObjectType, ID, Field } from 'type-graphql';

@ObjectType()
export default class Card {
  @Field(type => ID)
  id: string;

  @Field()
  type: string;

  @Field()
  title: string;

  @Field()
  cardType: string;

  @Field()
  lastFourDigit: number;
}
