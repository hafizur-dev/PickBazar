import { ObjectType, Field, ID, Int } from 'type-graphql';
import { VendorProduct } from './product.type';

@ObjectType()
class DeliveryDetails {
  @Field()
  charge: string;

  @Field({ nullable: true })
  maximumDistance?: string;

  @Field(() => Int, { nullable: true })
  minimumOrder: number;

  @Field({ defaultValue: true })
  isFree: boolean;
}

@ObjectType()
export class Vendor {
  @Field(() => ID)
  id: string;

  @Field()
  slug: string;

  @Field()
  type: string;

  @Field(() => [String])
  categories: string[];

  @Field()
  name: string;

  @Field({ nullable: true })
  logoUrl?: string;

  @Field()
  thumbnailUrl: string;

  @Field()
  previewUrl: string;

  @Field({ nullable: true })
  slogan?: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  address?: string;

  @Field(() => DeliveryDetails)
  deliveryDetails: DeliveryDetails;

  @Field({ nullable: true })
  promotion?: string;

  @Field(() => [String], { nullable: true })
  owners?: string[];

  @Field(() => [VendorProduct], { nullable: true })
  products?: VendorProduct[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
