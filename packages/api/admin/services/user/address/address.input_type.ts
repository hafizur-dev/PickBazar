import { InputType, Field, ID } from 'type-graphql';
import Address from './address.type';
@InputType({ description: 'New recipe data' })
export default class AddAddressInput implements Partial<Address> {
  @Field(type => ID)
  id: string;

  @Field()
  type: string;

  @Field()
  title: string;

  @Field()
  location: string;
}
