import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export default class Card {
  @Field()
  id: string;

  @Field()
  type: string;

  @Field()
  name: string;

  @Field()
  cardType: string;

  @Field()
  lastFourDigit: number;
}
