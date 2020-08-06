import { InputType, Field, ID } from 'type-graphql';
import Customer from './customer.type';
import AddAddressInput from '../user/address/address.input_type';
import AddCardInput from '../user/card/card.input_type';
import AddContactInput from '../user/contact/contact.input_type';
@InputType({ description: 'New recipe data' })
export default class AddCustomerInput implements Partial<Customer> {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  image: string;

  @Field()
  email: string;

  @Field(type => [AddAddressInput])
  address: AddAddressInput[];

  @Field(type => [AddContactInput])
  contact: AddContactInput[];

  @Field(type => [AddCardInput])
  card: AddCardInput[];

  password: string;

  @Field()
  creation_date: Date;

  @Field({ defaultValue: false })
  has_blocked: boolean;

  @Field({ defaultValue: 'silver' })
  rank: string;
}
