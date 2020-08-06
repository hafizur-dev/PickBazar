import { Resolver, Query, Arg, Int, Mutation } from 'type-graphql';

import { filterItems } from '../../helpers/filter';
import User from './user.type';
import loadUsers from './user.sample';

@Resolver()
export class UserResolver {
  private readonly items: User[] = loadUsers();

  @Query(() => User)
  async me(@Arg('id') id: string): Promise<User> {
    // as auth user. check from middleware.
    console.log(id, 'user_id');
    return await this.items[0];
  }

  @Mutation(() => User, { description: 'Update User' })
  async updateMe(@Arg('meInput') meInput: string): Promise<User> {
    console.log(meInput, 'meInput');
    return await this.items[0];
  }

  @Mutation(() => User, { description: 'Add or Edit Address' })
  async updateAddress(
    @Arg('addressInput') addressInput: string
  ): Promise<User> {
    console.log(addressInput, 'addressinput');
    return await this.items[0];
  }

  @Mutation(() => User, { description: 'Add or Edit Contact' })
  async updateContact(
    @Arg('contactInput') contactInput: string
  ): Promise<User> {
    console.log(contactInput, 'contactinput');
    return await this.items[0];
  }

  @Mutation(() => User, { description: 'Delete Address' })
  async deleteAddress(@Arg('addressId') addressId: string): Promise<User> {
    console.log(addressId, 'address_id');
    return await this.items[0];
  }

  @Mutation(() => User, { description: 'Delete Contact' })
  async deleteContact(@Arg('contactId') contactId: string): Promise<User> {
    console.log(contactId, 'contact_id');
    return await this.items[0];
  }

  @Mutation(() => User, { description: 'Add Payment Card' })
  async addPaymentCard(@Arg('cardInput') cardInput: string): Promise<User> {
    console.log(cardInput, 'cardInput');
    return await this.items[0];
  }

  @Mutation(() => User, { description: 'Delete Payment Card' })
  async deletePaymentCard(@Arg('cardId') cardId: string): Promise<User> {
    console.log(cardId, 'card_id');
    return await this.items[0];
  }
}
