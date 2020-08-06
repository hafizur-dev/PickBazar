import { Resolver, Query, Arg, ID, Mutation } from 'type-graphql';
import Staff from './staff.type';
import loadStaffs from '../../data/staff.data';
import AddStaffInput from './staff.input_type';
import search from '../../helpers/search';
@Resolver()
export default class StaffResolver {
  private readonly staffsCollection: Staff[] = loadStaffs();

  @Query(() => [Staff])
  async staffs(
    @Arg('role', { nullable: true }) role?: string,
    @Arg('searchBy', { nullable: true }) searchBy?: string
  ): Promise<Staff[] | undefined> {
    // as auth Staff. check from middleware.
    let staffs = this.staffsCollection;
    if (role) {
      staffs = staffs.filter(
        (staff) => staff.role.toLowerCase() === role.toLowerCase()
      );
    }
    return await search(staffs, ['name'], searchBy);
  }
  @Query(() => Staff)
  async staff(@Arg('id', (type) => ID) id: string): Promise<Staff | undefined> {
    // as auth Staff. check from middleware.
    console.log(id, 'staff_id');
    return await this.staffsCollection.find((staff) => staff.id === id);
  }

  @Mutation(() => Staff, { description: 'Create Staff' })
  async createStaff(@Arg('staff') staff: AddStaffInput): Promise<Staff> {
    console.log(staff, 'Staff');
    return staff;
  }

  //   @Mutation(() => Staff, { description: 'Add or Edit Address' })
  //   async updateAddress(
  //     @Arg('addressInput') addressInput: string
  //   ): Promise<Staff> {
  //     console.log(addressInput, 'addressinput');
  //     return await this.staffsCollection[0];
  //   }

  //   @Mutation(() => Staff, { description: 'Add or Edit Contact' })
  //   async updateContact(
  //     @Arg('contactInput') contactInput: string
  //   ): Promise<Staff> {
  //     console.log(contactInput, 'contactinput');
  //     return await this.staffsCollection[0];
  //   }

  //   @Mutation(() => Staff, { description: 'Delete Address' })
  //   async deleteAddress(@Arg('addressId') addressId: string): Promise<Staff> {
  //     console.log(addressId, 'address_id');
  //     return await this.staffsCollection[0];
  //   }

  //   @Mutation(() => Staff, { description: 'Delete Contact' })
  //   async deleteContact(@Arg('contactId') contactId: string): Promise<Staff> {
  //     console.log(contactId, 'contact_id');
  //     return await this.staffsCollection[0];
  //   }

  //   @Mutation(() => Staff, { description: 'Add Payment Card' })
  //   async addPaymentCard(@Arg('cardInput') cardInput: string): Promise<Staff> {
  //     console.log(cardInput, 'cardInput');
  //     return await this.staffsCollection[0];
  //   }

  //   @Mutation(() => Staff, { description: 'Delete Payment Card' })
  //   async deletePaymentCard(@Arg('cardId') cardId: string): Promise<Staff> {
  //     console.log(cardId, 'card_id');
  //     return await this.staffsCollection[0];
  //   }
}
