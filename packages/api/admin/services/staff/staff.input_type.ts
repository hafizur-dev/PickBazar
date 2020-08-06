import { InputType, Field, ID } from 'type-graphql';
import Staff from './staff.type';
@InputType({ description: 'New staff data' })
export default class AddStaffInput implements Partial<Staff> {
  @Field((type) => ID)
  id: string;

  @Field()
  first_name: string;

  @Field()
  last_name: string;

  @Field()
  contact_number: string;

  @Field()
  email: string;

  @Field()
  role: string;

  @Field({ nullable: true })
  name: string;

  @Field()
  creation_date: Date;
}
