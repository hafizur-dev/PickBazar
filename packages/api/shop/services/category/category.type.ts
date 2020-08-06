import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
export default class Category {
  @Field(type => Int)
  id: number;

  @Field()
  title: string;

  @Field(type => [Category], { nullable: true })
  children?: Category[];

  @Field(type => String)
  type: string;

  @Field(type => String, { nullable: true })
  icon?: string;

  @Field(type => String)
  slug: string;

  @Field(type => Int, { nullable: true })
  itemCount: number;
}
