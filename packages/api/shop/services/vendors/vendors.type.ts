import { ObjectType, Field, Int } from 'type-graphql';
import { Vendor } from './vendor.type';
@ObjectType()
export class Vendors {
  @Field(type => [Vendor], { nullable: true })
  items?: Vendor[];

  @Field(type => Int, { defaultValue: 0 })
  totalCount: number;

  @Field()
  hasMore: boolean;
}
