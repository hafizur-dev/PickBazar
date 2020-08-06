import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import loadCoupons from './coupon.sample';
import Coupon from './coupon.type';

@Resolver()
export class CouponResolver {
  private readonly items: Coupon[] = loadCoupons();

  @Query(() => [Coupon], { description: 'Get all the Coupons' })
  async coupons(): Promise<Coupon[]> {
    return await this.items;
  }
  @Mutation(() => Coupon)
  async applyCoupon(@Arg('code') code: string): Promise<Coupon> {
    const coupon = await this.items.find(
      item => item.code.toLowerCase() === code.toLowerCase()
    );

    if (coupon) {
      return coupon;
    }
    return {
      id: 0,
      code: 'DEFAULT_COUPON',
      discountInPercent: 0,
    };
  }
}
