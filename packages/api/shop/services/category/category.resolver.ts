import { Resolver, Query, Arg, Int } from 'type-graphql';
import loadCategories from './category.sample';
import Category from './category.type';

@Resolver()
export class CategoryResolver {
  private readonly items: Category[] = loadCategories();

  @Query(() => [Category], { description: 'Get all the categories' })
  async categories(
    @Arg('type', type => String) type: string
  ): Promise<Category[]> {
    return await this.items.filter(item => item.type === type);
    // return await this.items;
  }

  @Query(() => Category)
  async category(
    @Arg('id', type => Int) id: number
  ): Promise<Category | undefined> {
    return await this.items.find(item => item.id === id);
  }
}
