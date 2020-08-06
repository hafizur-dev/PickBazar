import { Field, ID, Int, Float, ObjectType } from 'type-graphql';
import Category from '../category/category.type';

@ObjectType()
export default class Product {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  image: string;

  @Field()
  type: string;

  @Field()
  unit: string;

  @Field(type => [Category])
  categories: Category[];

  @Field(type => Float)
  price: number;

  @Field(type => Float)
  salePrice: number;

  @Field(type => Int)
  discountInPercent: number;

  @Field(type => Int, { defaultValue: 1 })
  per_unit: number;

  @Field(type => Int)
  quantity: number;

  @Field(type => Int, { nullable: true })
  views?: number;

  @Field(type => Int, { nullable: true })
  sales?: number;

  @Field({ nullable: true })
  description?: string;

  @Field()
  creation_date: Date;

  @Field()
  slug: string;
}
