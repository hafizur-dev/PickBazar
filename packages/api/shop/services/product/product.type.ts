import { ObjectType, Field, ID } from 'type-graphql';
import { ProductType } from './product.enum';
import Category from '../category/category.type';
import Gallery from './gallery.type';
import PaginatedResponse from '../../helpers/paginated-response';

@ObjectType()
export class Meta {
  @Field()
  publisher: string;

  @Field()
  isbn: string;

  @Field()
  edition: string;

  @Field()
  country: string;

  @Field(() => [String])
  languages: string[];

  @Field()
  numberOfReader: string;

  @Field()
  numberOfPage: string;

  @Field()
  samplePDF: string;
}

@ObjectType()
export class Social {
  @Field(() => ID)
  id: string;

  @Field()
  media: string;

  @Field()
  profileLink: string;
}

@ObjectType()
export class Author {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  avatar: string;

  @Field()
  bio: string;

  @Field()
  email: string;

  @Field()
  website: string;

  @Field(() => [Social])
  socials: Social[];
}

@ObjectType()
export default class Product {
  @Field()
  id: number;

  @Field()
  slug: string;

  @Field()
  title: string;

  @Field(() => ProductType)
  type: ProductType;

  @Field(() => [Category])
  categories: Category[];

  @Field()
  unit: string;

  @Field()
  image: string;

  @Field(() => [Gallery])
  gallery: Gallery[];

  @Field()
  description: string;

  @Field()
  price: number;

  @Field()
  salePrice: number;

  @Field()
  discountInPercent: number;

  @Field(() => Author, { nullable: true })
  author?: Author;

  @Field(() => Meta, { nullable: true })
  meta?: Meta;

  @Field()
  createdAt: Date;
}

// TODO: Need to change this in next update

// we need to create a temporary class for the abstract, generic class "instance"
@ObjectType()
export class ProductResponse extends PaginatedResponse(Product) {
  // simple helper for creating new instances easily
  constructor(productResponse: ProductResponse) {
    super();
    Object.assign(this, productResponse);
  }

  // you can add more fields here if you need
}
