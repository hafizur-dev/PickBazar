import Coupon from './coupon.type';
import { plainToClass } from 'class-transformer';
const loadCoupons = (): Coupon[] => {
  return plainToClass(Coupon, [
    {
      id: 1,
      title: 'Free Delivery',
      image: 'http://s3.amazonaws.com/redqteam.com/pickbazar/gift-card-1.png',
      code: 'RAMADAN15',
      discountInPercent: 15,
      number_of_coupon: 20,
      number_of_used_coupon: 10,
      products: [
        {
          id: '1',
          url: '',
        },
      ],
      status: 'active',
      expiration_date: new Date(),
      creation_date: new Date(),
    },
    {
      id: 2,
      title: 'Free Delivery',
      image: 'http://s3.amazonaws.com/redqteam.com/pickbazar/gift-card-2.png',
      code: 'RAMADAN20',
      discountInPercent: 20,
      number_of_coupon: 20,
      number_of_used_coupon: 10,
      products: [
        {
          id: '1',
          url: '',
        },
      ],
      status: 'revoked',
      expiration_date: new Date(),
      creation_date: new Date(),
    },
    {
      id: 3,
      title: 'cyber Monday Sale',
      code: 'CYBERMONDAY10',
      image: 'http://s3.amazonaws.com/redqteam.com/pickbazar/gift-card-1.png',
      discountInPercent: 10,
      number_of_coupon: 20,
      number_of_used_coupon: 10,
      products: [
        {
          id: '1',
          url: '',
        },
      ],
      status: 'active',
      expiration_date: new Date(),
      creation_date: new Date(),
    },
    {
      id: 4,
      title: 'Boxing Day Sale',
      code: 'DISCOUNT10',
      image: 'http://s3.amazonaws.com/redqteam.com/pickbazar/gift-card-2.png',
      discountInPercent: 10,
      number_of_coupon: 10,
      number_of_used_coupon: 5,
      products: [
        {
          id: '1',
          url: '',
        },
      ],
      status: 'active',
      expiration_date: new Date(),
      creation_date: new Date(),
    },

    {
      id: 5,
      title: 'Summer Discount',
      code: 'SUMMER10',
      image: 'http://s3.amazonaws.com/redqteam.com/pickbazar/gift-card-2.png',
      discountInPercent: 10,
      number_of_coupon: 10,
      number_of_used_coupon: 5,
      products: [
        {
          id: '1',
          url: '',
        },
      ],
      status: 'active',
      expiration_date: new Date(),
      creation_date: new Date(),
    },
    {
      id: 6,
      title: 'Winter Discount',
      code: 'WINTER10',
      image: 'http://s3.amazonaws.com/redqteam.com/pickbazar/gift-card-1.png',
      discountInPercent: 10,
      number_of_coupon: 10,
      number_of_used_coupon: 15,
      products: [
        {
          id: '1',
          url: '',
        },
      ],
      status: 'active',
      expiration_date: new Date(),
      creation_date: new Date(),
    },
    {
      id: 7,
      title: 'Autumn Discount',
      code: '1AUTUMN10',
      image: 'http://s3.amazonaws.com/redqteam.com/pickbazar/gift-card-2.png',
      discountInPercent: 10,
      number_of_coupon: 10,
      number_of_used_coupon: 15,
      products: [
        {
          id: '1',
          url: '',
        },
      ],
      status: 'active',
      expiration_date: new Date(),
      creation_date: new Date(),
    },

    {
      id: 8,
      title: 'Winter Discount',
      code: 'WINTER10',
      image: 'http://s3.amazonaws.com/redqteam.com/pickbazar/gift-card-1.png',
      discountInPercent: 10,
      number_of_coupon: 10,
      number_of_used_coupon: 15,
      products: [
        {
          id: '1',
          url: '',
        },
      ],
      status: 'active',
      expiration_date: new Date(),
      creation_date: new Date(),
    },

    {
      id: 9,
      title: 'Winter Sale',
      code: 'WINTER15',
      image: 'http://s3.amazonaws.com/redqteam.com/pickbazar/gift-card-1.png',
      discountInPercent: 15,
      number_of_coupon: 10,
      number_of_used_coupon: 15,
      products: [
        {
          id: '1',
          url: '',
        },
      ],
      status: 'active',
      expiration_date: new Date(),
      creation_date: new Date(),
    },
    {
      id: 10,
      title: 'Halloween Sale',
      code: 'HALLOWEEN20',
      image: 'http://s3.amazonaws.com/redqteam.com/pickbazar/gift-card-1.png',
      discountInPercent: 20,
      number_of_coupon: 10,
      number_of_used_coupon: 15,
      products: [
        {
          id: '1',
          url: '',
        },
      ],
      status: 'active',
      expiration_date: new Date(),
      creation_date: new Date(),
    },
  ]);
};

export default loadCoupons;
