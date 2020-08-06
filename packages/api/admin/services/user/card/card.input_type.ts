import { InputType, Field, ID } from 'type-graphql';
import Card from './card.type';
@InputType({ description: 'New recipe data' })
export default class AddCardInput implements Partial<Card> {
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
