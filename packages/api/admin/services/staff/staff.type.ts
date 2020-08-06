import { Field, ObjectType, ID } from 'type-graphql';

@ObjectType()
export default class Staff {
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
  get name(): string {
    return `${this.first_name} ${this.last_name}`;
  }

  @Field()
  creation_date: Date;
}
