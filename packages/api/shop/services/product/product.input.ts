import { InputType, Field } from 'type-graphql';
import { ProductType } from './product.enum';

@InputType()
class ProductSearchInput {
  @Field({ nullable: true })
  id?: number;

  @Field()
  type: ProductType;

  @Field({ nullable: true })
  category?: string;

  @Field({ defaultValue: 0 })
  offset: number;

  @Field({ defaultValue: 10 })
  limit: number;
}

export default ProductSearchInput;
