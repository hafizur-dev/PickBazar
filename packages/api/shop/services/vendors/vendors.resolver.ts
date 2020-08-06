import { Resolver, Query, Arg, Args } from 'type-graphql';
import { vendorSamples } from './vendors.sample';
import { Vendor } from './vendor.type';
import { Vendors } from './vendors.type';
import { GetVendorsArgs } from './get-vendors.args';
import search from '../../helpers/search';

@Resolver()
export class VendorResolver {
  private readonly vendorCollection: Vendor[] = vendorSamples;

  @Query(() => Vendors, { description: 'Get all the vendors' })
  async vendors(
    @Args() { offset, limit, text, type, category }: GetVendorsArgs
  ): Promise<Vendors | undefined> {
    let items = this.vendorCollection;

    if (category) {
      items = items.filter((item) => item.categories.includes(category));
    }
    items = await search(items, ['name'], text);

    const total = this.vendorCollection.length;
    const hasMore = this.vendorCollection.length > offset + limit;

    return {
      items: items.slice(offset, offset + limit),
      totalCount: total,
      hasMore,
    };
  }

  @Query(() => Vendor)
  async vendor(
    @Arg('slug', (type) => String) slug: string
  ): Promise<Vendor | undefined> {
    return await this.vendorCollection.find((item) => item.slug === slug);
  }
}
