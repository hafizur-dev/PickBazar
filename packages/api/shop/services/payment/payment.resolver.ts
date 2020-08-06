import { Resolver, Arg, Mutation } from 'type-graphql';
import Payment from './payment.type';

@Resolver()
export class PaymentResolver {
  @Mutation(() => Payment, { description: 'Charge a Payment' })
  async charge(@Arg('paymentInput') paymentInput: string): Promise<Payment> {
    console.log(JSON.parse(paymentInput), 'paymentInput');
    return await {
      status: 200,
    };
  }
}
