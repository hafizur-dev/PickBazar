import { InputType, Field } from 'type-graphql';

@InputType()
export default class PaymentInput {
  @Field()
  token: string;

  @Field()
  amount: number;
}
