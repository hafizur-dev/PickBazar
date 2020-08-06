import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export default class Category {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  type?: string;

  @Field()
  icon: string;

  @Field()
  slug: string;
  // You should resolve this field by using @FieldResolver decorator within your Category Resolver Class.
  @Field({ defaultValue: 0 })
  number_of_product?: number;

  @Field()
  creation_date: Date;
}
