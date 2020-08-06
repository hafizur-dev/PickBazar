import { Resolver, Query, Arg, ID, Int, Mutation } from "type-graphql";
import Customer from "./customer.type";
import loadCustomers from "../../data/customer.data";
import search from "../../helpers/search";
import { sortByHighestNumber, sortByLowestNumber } from "../../helpers/sorts";
@Resolver()
export default class CustomerResolver {
  private readonly customersCollection: Customer[] = loadCustomers();

  @Query(() => [Customer])
  async customers(
    @Arg("searchBy", type => String, { nullable: true }) searchBy: string,
    @Arg("sortBy", type => String, { defaultValue: null }) sortBy: string,
    @Arg("limit", type => Int, { defaultValue: 7 }) limit: number
  ): Promise<Customer[] | undefined> {
    // as auth Customer. check from middleware.
    let customers = this.customersCollection;

    if (sortBy === "highestToLowest") {
      customers = await sortByHighestNumber(customers, "total_order_amount");
    }
    if (sortBy === "lowestToHighest") {
      customers = await sortByLowestNumber(customers, "total_order_amount");
    }
    return await search(customers, ["name", "creation_date"], searchBy);
  }

  @Query(() => Customer)
  async customer(
    @Arg("id", type => ID) id: string
  ): Promise<Customer | undefined> {
    // as auth Customer. check from middleware.
    console.log(id, "customer_id");
    return await this.customersCollection.find(customer => customer.id === id);
  }
  // input CustomersFilterInput{
  //   id:
  // }
  // @Mutation(() => Customer, { description: 'Update Customer' })
  // async createOrUpdateCustomer(
  //   @Arg('customer') customer: AddCustomerInput
  // ): Promise<Customer> {
  //   console.log(customer, 'customer');
  //   this.customersCollection.push(customer);
  //   return await customer;
  // }

  //   @Mutation(() => Customer, { description: 'Add or Edit Address' })
  //   async updateAddress(
  //     @Arg('addressInput') addressInput: string
  //   ): Promise<Customer> {
  //     console.log(addressInput, 'addressinput');
  //     return await this.customersCollection[0];
  //   }

  //   @Mutation(() => Customer, { description: 'Add or Edit Contact' })
  //   async updateContact(
  //     @Arg('contactInput') contactInput: string
  //   ): Promise<Customer> {
  //     console.log(contactInput, 'contactinput');
  //     return await this.customersCollection[0];
  //   }

  //   @Mutation(() => Customer, { description: 'Delete Address' })
  //   async deleteAddress(@Arg('addressId') addressId: string): Promise<Customer> {
  //     console.log(addressId, 'address_id');
  //     return await this.customersCollection[0];
  //   }

  //   @Mutation(() => Customer, { description: 'Delete Contact' })
  //   async deleteContact(@Arg('contactId') contactId: string): Promise<Customer> {
  //     console.log(contactId, 'contact_id');
  //     return await this.customersCollection[0];
  //   }

  //   @Mutation(() => Customer, { description: 'Add Payment Card' })
  //   async addPaymentCard(@Arg('cardInput') cardInput: string): Promise<Customer> {
  //     console.log(cardInput, 'cardInput');
  //     return await this.customersCollection[0];
  //   }

  //   @Mutation(() => Customer, { description: 'Delete Payment Card' })
  //   async deletePaymentCard(@Arg('cardId') cardId: string): Promise<Customer> {
  //     console.log(cardId, 'card_id');
  //     return await this.customersCollection[0];
  //   }
}
