import { plainToClass } from 'class-transformer';
import { Vendor } from './vendor.type';

function createVendor(vendorData: Partial<Vendor>): Vendor {
  return plainToClass(Vendor, vendorData);
}

export const vendorSamples = [
  createVendor({
    id: '1001',
    name: 'Bristo-C Chinese Restaurant',
    slug: 'bristo-c-res',
    previewUrl:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/bristo.jpg',
    thumbnailUrl:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/bristo_thumb.jpg',

    type: 'restaurant', // fixed don't change
    //must be lowercase and - separated
    categories: ['chinese', 'sea-food', 'caribbean', 'thai', 'fast-food'],
    description: 'we provide best Burger',
    deliveryDetails: {
      charge: 'Free',
      minimumOrder: 50,
      isFree: true,
    },
    promotion: '10',
    address: '19 Street Road, Broklyn Newyork',
    products: [
      {
        id: '2001',
        type: 'Burgers',
        name: 'Classic Cheese Burger',
        description:
          'Prepared with a patty, a slice of cheese and special sauce',
        price: 5.0,
      },
      {
        id: '2002',
        type: 'Sandwich',

        name: 'Classic Cheese Sandwich',
        description:
          'Prepared with a patty, a slice of cheese and special sauce',
        price: 5.0,
      },
      {
        id: '2003',
        type: 'Sandwich',

        name: 'Grilled Chicken Sub',
        description:
          'Prepared with grilled chicken patty, salad and house signature sauce',
        price: 6.0,
      },
      {
        id: '2004',
        type: 'Chicken',

        name: 'Jerk Chicken',
        description:
          'Chicken prepared wth spices and slow-cooked over a fire or grill',
        price: 10.0,
      },
    ],

    createdAt: new Date(),
    updatedAt: new Date(),
  }),

  createVendor({
    id: '1002',
    name: 'Red Dragon',
    slug: 'red-dragon',
    previewUrl: 'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/red.jpg',
    thumbnailUrl:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/red_thumb.jpg',
    type: 'restaurant', // fixed don't change
    //must be lowercase and - separated
    categories: ['chinese', 'sea-food', 'thai', 'lebanese', 'caribbean'],
    description: 'Its good mood food',
    deliveryDetails: {
      charge: '5',
      minimumOrder: 25,
      isFree: false,
    },
    promotion: '10',
    address: '501  Heliport Loop, Indiana, ',
    products: [
      {
        id: '6007',
        type: 'Rice',
        name: 'Chicken Fried Rice',
        description:
          'Prepared with chinese masala and rice and chicken with fresh vegetable',
        price: 12.0,
      },
      {
        id: '6008',
        type: 'Rice',

        name: 'Egg Fried Rice',
        description:
          'Prepared with chinese masala and rice and egg with fresh vegetable',
        price: 15.0,
      },
      {
        id: '6009',
        type: 'Sandwich',

        name: 'Grilled Club Sandwich',
        description:
          'Prepared with grilled chicken patty, salad and house signature sauce',
        price: 5.0,
      },

      {
        id: '6010',
        type: 'Chicken',

        name: 'Chicken Sizzling',
        description:
          'Prepared with fresh chicken , garlic and house signature sauce',
        price: 8.0,
      },
      {
        id: '6006',
        type: 'Beef',

        name: 'Beef Chili Onion',
        description:
          'Prepared with fresh beef, chili, onion , garlic and house signature sauce',
        price: 10.0,
      },
    ],

    createdAt: new Date(),
    updatedAt: new Date(),
  }),

  createVendor({
    id: '1003',
    name: 'Namaste India Restaurant',
    slug: 'Namaste-india',
    previewUrl:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/Namaste.jpg',
    thumbnailUrl:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/Namaste_thumb.jpg',
    type: 'restaurant', // fixed don't change
    //must be lowercase and - separated
    categories: ['chinese', 'indian', 'kebab', 'caribbean'],
    description: 'Tradional Indian taste at your doorstep',
    deliveryDetails: {
      charge: 'Free',
      minimumOrder: 30,
      isFree: true,
    },
    promotion: '10',
    address: '2757  Lawman Avenue, Alexandria Virginia',
    products: [
      {
        id: '6011',
        type: 'Biriyani',

        name: 'Hydrabadi Biriyani',
        description:
          'Slow cooked with fresh beef, chili, onion , garlic and house signature spices',
        price: 20.0,
      },
      {
        id: '6012',
        type: 'Biriyani',

        name: 'Chicken Biriyani',
        description:
          'Prepared with fresh chicken, chili, onion ,rice, garlic and house signature spices',
        price: 22.0,
      },
      {
        id: '6013',
        type: 'Biriyani',

        name: 'Lamb Biriyani',
        description:
          'Prepared with fresh Lamb, chili, onion , garlic, rice,  and house signature spices',
        price: 25.0,
      },

      {
        id: '6014',
        type: 'Biriyani',

        name: 'Mutton Biriyani',
        description:
          'Prepared with fresh mutton, chili, onion , garlic rice,and house signature spices',
        price: 22.0,
      },
      {
        id: '6015',
        type: 'Curry',

        name: 'Chicken Curry',
        description:
          'Prepared with fresh chicken, chili, onion , garlic and house signature spices',
        price: 12.0,
      },
      {
        id: '6016',
        type: ' Kebab',

        name: 'Boti Kebab',
        description:
          'Grillec with fresh chicken, chili, onion , garlic and house signature spices',
        price: 15.0,
      },
    ],

    createdAt: new Date(),
    updatedAt: new Date(),
  }),

  createVendor({
    id: '1004',
    name: 'Riccardo Enoteca',
    slug: 'riccardo-enoteca',
    previewUrl:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/riccardo.jpg',
    thumbnailUrl:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/riccardo_thumb.jpg',
    type: 'restaurant', // fixed don't change
    //must be lowercase and - separated
    categories: [
      'italian',
      'sea-food',
      'steak-house',
      'traditional-english',
      'barista',
    ],
    description: 'Finest Italian Dine',
    deliveryDetails: {
      charge: 'Free',
      minimumOrder: 30,
      isFree: true,
    },
    promotion: '10',
    address: '1090  Smithfield Avenue, Pampa Texas',
    products: [
      {
        id: '6017',
        type: 'Breakfast',
        name: 'full English breakfast',
        description:
          'includes bacon (traditionally back bacon), fried, poached or scrambled eggs, fried or grilled tomatoes, fried mushrooms, fried bread or buttered toast, and sausages',
        price: 12.0,
      },
      {
        id: '6018',
        type: 'Steak',

        name: 'T Bone Steak',
        description:
          'Serverd with fresh vegetables, mashed potatoes and special sauce',
        price: 30.0,
      },
      {
        id: '6019',
        type: 'Fish',

        name: 'Fish & Chips',
        description: 'Fried fresh cod fish, chips  and house signature sauce',
        price: 25.0,
      },
    ],

    createdAt: new Date(),
    updatedAt: new Date(),
  }),

  createVendor({
    id: '1005',
    name: 'Mamas Fish House',
    slug: 'mama-fish-house',
    previewUrl: 'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/mama.jpg',
    thumbnailUrl:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/mama_thumb.jpg',
    type: 'restaurant', // fixed don't change
    //must be lowercase and - separated
    categories: ['lebanese', 'sea-food', 'fast-food', 'thai', 'barista'],
    description: 'Fresh Food Everyday',
    deliveryDetails: {
      charge: '5 ',
      minimumOrder: 4000,
      isFree: false,
    },
    promotion: '10',
    address: '3111  Jones Avenue, North Carolina',
    products: [
      {
        id: '6021',
        type: 'Fish',

        name: 'Fish & Chips',
        description: 'Fried fresh cod fish, chips  and house signature sauce',
        price: 15.0,
      },
      {
        id: '6022 ',
        type: 'Coffee',

        name: 'Cappuccino',
        description: 'Prepared with freshly ground cofee beans ',
        price: 3.0,
      },
      {
        id: '6023',
        type: 'Sandwich',

        name: 'Grilled Chicken Sub',
        description:
          'Prepared with grilled chicken patty, salad and house signature sauce',
        price: 6.0,
      },
      {
        id: '6024',
        type: 'Soup',

        name: 'Thai Soup',
        description: 'Thai clear soup with prawn and chicken',
        price: 6.0,
      },
      {
        id: '6025',
        type: 'Meat',

        name: 'Kibbeh',
        description:
          'Lebanon’s National Dish is calling your name, tempting you to crunch into its crazy delicious fried exterior to let those sautéed pine nuts and spicy minced meat waken up your tongue.',
        price: 10.0,
      },
    ],

    createdAt: new Date(),
    updatedAt: new Date(),
  }),

  createVendor({
    id: '1006',
    name: 'La Diplomate',
    slug: 'la-diplomate',
    previewUrl: 'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/la.jpg',
    thumbnailUrl:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/la_Thumb.jpg',
    type: 'restaurant', // fixed don't change
    //must be lowercase and - separated
    categories: [
      'chinese',
      'sea-food',
      'indian',
      'caribbean',
      'traditional-english',
    ],
    description: 'What you crave',
    deliveryDetails: {
      charge: 'Free',
      minimumOrder: 30,
      isFree: true,
    },
    promotion: '10',
    address: '3095  Gambler Lane, Houston Texas',
    products: [
      {
        id: '6026',
        type: 'Breakfast',
        name: 'full English breakfast',
        description:
          'includes bacon (traditionally back bacon), fried, poached or scrambled eggs, fried or grilled tomatoes, fried mushrooms, fried bread or buttered toast, and sausages',
        price: 15.0,
      },
      {
        id: '6027',
        type: 'Rice',
        name: 'Chicken Fried Rice',
        description:
          'Prepared with chinese masala and rice and chicken with fresh vegetable',
        price: 18.0,
      },
      {
        id: '6028',
        type: 'Sandwich',

        name: 'Grilled Chicken Sub',
        description:
          'Prepared with grilled chicken patty, salad and house signature sauce',
        price: 6.0,
      },
      {
        id: '6029',
        type: 'Biriyani',

        name: 'Chicken Biriyani',
        description:
          'Prepared with fresh chicken, chili, onion ,rice, garlic and house signature spices',
        price: 20.0,
      },
      {
        id: '6030',
        type: 'Fish',

        name: 'Fish & Chips',
        description: 'Fried fresh cod fish, chips  and house signature sauce',
        price: 25.0,
      },
    ],

    createdAt: new Date(),
    updatedAt: new Date(),
  }),

  createVendor({
    id: '1007',
    name: 'Joes Restaurant ',
    slug: 'joes-seafood',
    previewUrl: 'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/joes.jpg',
    thumbnailUrl:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/joes_thumb.jpg',
    type: 'restaurant', // fixed don't change
    //must be lowercase and - separated
    categories: ['fast-food', 'pizza', 'indian', 'kebab', 'thai', 'barista'],
    description: 'Eat fresh',
    deliveryDetails: {
      charge: '5',
      minimumOrder: 40,
      isFree: false,
    },
    promotion: '10',
    address: '891  Sweetwood Drive, Broomfield Colorado',
    products: [
      {
        id: '6031',
        type: 'Burgers',
        name: 'Classic Cheese Burger',
        description:
          'Prepared with a patty, a slice of cheese and special sauce',
        price: 12.0,
      },
      {
        id: '6032',
        type: 'Pizza',

        name: 'Beff Supremo ',
        description:
          'Prepared with a spicy beef, cheese, chedder, jalepinos, onions, capcicum and special sauce',
        price: 30.0,
      },
      {
        id: '6033',
        type: 'Biriyani',

        name: 'Chicken Biriyani',
        description:
          'Prepared with fresh chicken, chili, onion ,rice, garlic and house signature spices',
        price: 25.0,
      },

      {
        id: '6034',
        type: 'Coffee',

        name: 'Lattee',
        description: 'Prepared with freshly ground cofee beans',
        price: 8.0,
      },
      {
        id: '6035',
        type: 'Soup',

        name: 'Chicken Soup',
        description:
          'Chicken soup is a soup made from chicken, simmered in water, usually with various other ingredients',
        price: 6.0,
      },
    ],

    createdAt: new Date(),
    updatedAt: new Date(),
  }),

  createVendor({
    id: '1008',
    name: 'White Castle',
    slug: 'white-castle',
    previewUrl:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/white.jpg',
    thumbnailUrl:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/white_thumb.jpg',
    type: 'restaurant', // fixed don't change
    //must be lowercase and - separated
    categories: [
      'italian',
      'steak-house',
      'traditional-english',
      'caribbean',
      'lebanese',
    ],
    description: 'The flavor of now',
    deliveryDetails: {
      charge: 'Free',
      minimumOrder: 200,
      isFree: true,
    },
    promotion: '10',
    address: '2718  Coplin Avenue , Phoenix Arizona',
    products: [
      {
        id: '6036',
        type: 'Pasta',
        name: 'Classic Cheese Pasta',
        description:
          'Prepared with fresh chicken , cheese, tomatoes and special sauce',
        price: 8.0,
      },
      {
        id: '6037',
        type: 'Pie',
        name: 'Shepherds Pie',
        description:
          'Prepared with minced meat, mashed potatoes and special sauce',
        price: 9.0,
      },
      {
        id: '6038',
        type: 'lebanese',
        name: 'Hummus',
        description:
          'Prepared with chickpea, garlic and tahini blend of happiness is perfect for nibbles before dinne',
        price: 4.0,
      },

      {
        id: '6040',
        type: 'steak',
        name: 'Rib Eye',
        description:
          'Prepared with chickpea, garlic and tahini blend of happiness is perfect for nibbles before dinne',
        price: 25.0,
      },
    ],

    createdAt: new Date(),
    updatedAt: new Date(),
  }),

  createVendor({
    id: '1009',
    name: 'The Grill -Steak House',
    slug: 'the-grill',
    previewUrl:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/the-grill.jpg',
    thumbnailUrl:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/the-grill_Thumb.jpg',
    type: 'restaurant', // fixed don't change
    //must be lowercase and - separated
    categories: [
      'pizza',
      'indian',
      'kebab',
      'thai',
      'italian',
      'steak-house',
      'traditional-english',
    ],
    description: 'We have the meats',
    deliveryDetails: {
      charge: 'Free',
      minimumOrder: 30,
      isFree: true,
    },
    promotion: '10',
    address: '4839  Reppert Coal Road , Texas',
    products: [
      {
        id: '1001',
        type: 'Burgers',
        name: 'Classic Cheese Burger',
        description:
          'Prepared with a patty, a slice of cheese and special sauce',
        price: 6.0,
      },
      {
        id: '2002',
        type: 'steak',
        name: 'Rib Eye',
        description:
          'Prepared with chickpea, garlic and tahini blend of happiness is perfect for nibbles before dinne',
        price: 25.0,
      },
      {
        id: '1002',
        type: 'Sandwich',
        name: 'Grilled Chicken Sub',
        description:
          'Serverd with fresh vegetables, mashed potatoes and special sauce',
        price: 15.0,
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  }),

  createVendor({
    id: '1010',
    name: 'Cafe Chinese',
    slug: 'cafe-chinese',
    previewUrl: 'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/cafe.jpg',
    thumbnailUrl:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/cafe_thumb.jpg',
    type: 'restaurant', // fixed don't change
    //must be lowercase and - separated
    categories: [
      'chinese',
      'sea-food',
      'fast-food',
      'pizza',
      'indian',
      'kebab',
      'thai',
    ],
    description: 'Have it your way ',
    deliveryDetails: {
      charge: '5 ',
      minimumOrder: 40,
      isFree: false,
    },
    promotion: '10',
    address: '4793  Plainfield Avenue, New York',
    products: [
      {
        id: '6041',
        type: 'Burgers',
        name: 'Classic Cheese Burger',
        description:
          'Prepared with a patty, a slice of cheese and special sauce',
        price: 15.0,
      },
      {
        id: '6042',
        type: 'Pizza',
        name: 'Beff Supremo ',
        description:
          'Prepared with a spicy beef, cheese, chedder, jalepinos, onions, capcicum and special sauce',
        price: 25.0,
      },
      {
        id: '6043',
        type: 'Biriyani',
        name: 'Lamb Biriyani',
        description:
          'Prepared with fresh Lamb, chili, onion , garlic, rice,  and house signature spices',
        price: 20.0,
      },
      {
        id: '6044',
        type: 'Biriyani',
        name: 'Chicken Biriyani',
        description:
          'Prepared with fresh chicken, chili, onion , garlic, rice,  and house signature spices',
        price: 15.0,
      },
      {
        id: '6045',
        type: 'Rice',
        name: 'Chicken Fried Rice',
        description:
          'Prepared with chinese masala and rice and chicken with fresh vegetable',
        price: 12.0,
      },
    ],

    createdAt: new Date(),
    updatedAt: new Date(),
  }),

  createVendor({
    id: '1011',
    name: 'Bida Manda Restaurant',
    slug: 'bida manda',
    previewUrl: 'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/bida.jpg',
    thumbnailUrl:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/bida_thumb.jpg',
    type: 'restaurant', // fixed don't change
    //must be lowercase and - separated
    categories: ['caribbean', 'lebanese', 'vegetarian', 'vegan', 'barista'],
    description: 'It takes two hands to hold a Whopper',
    deliveryDetails: {
      charge: 'Free',
      minimumOrder: 20,
      isFree: true,
    },
    promotion: '10',
    address: '191  Davis Place, Missouri',
    products: [
      {
        id: '6046',
        type: 'Pasta',
        name: 'Vegetable pasta',
        description: 'Prepared with a frsh vegetables with chedder and cheese',
        price: 12.0,
      },
      {
        id: '6047',
        type: 'Chicken',
        name: 'Jerk Chicken',
        description:
          'Chicken prepared wth spices and slow-cooked over a fire or grill',
        price: 20.0,
      },
      {
        id: '6048',
        type: 'Sandwich',
        name: 'Grilled Chicken Sub',
        description:
          'Prepared with grilled chicken patty, salad and house signature sauce',
        price: 8.0,
      },
      {
        id: '6049 ',
        type: 'Coffee',
        name: 'Cappuccino',
        description: 'Prepared with freshly ground cofee beans ',
        price: 4.0,
      },
    ],

    createdAt: new Date(),
    updatedAt: new Date(),
  }),

  createVendor({
    id: '1012',
    name: 'Ateras',
    slug: 'atera',
    previewUrl:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/atera.jpg',
    thumbnailUrl:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/atera_thumb.jpg',
    type: 'restaurant', // fixed don't change
    //must be lowercase and - separated
    categories: [
      'italian',
      'steak-house',
      'traditional-english',
      'caribbean',
      'lebanese',
      'vegetarian',
    ],
    description: 'Food with integrity',
    deliveryDetails: {
      charge: 'Free',
      minimumOrder: 30,
      isFree: true,
    },
    promotion: '10',
    address: '2802  Barnes Avenue, Missouri',
    products: [
      {
        id: '6051',
        type: 'Steak',
        name: 'T Bone Steak',
        description:
          'Serverd with fresh vegetables, mashed potatoes and special sauce',
        price: 30.0,
      },
      {
        id: '6052',
        type: 'Breakfast',
        name: 'full English breakfast',
        description:
          'includes bacon (traditionally back bacon), fried, poached or scrambled eggs, fried or grilled tomatoes, fried mushrooms, fried bread or buttered toast, and sausages',
        price: 15.0,
      },
      {
        id: '6053',
        type: 'Chicken',
        name: 'Jerk Chicken',
        description:
          'Chicken prepared wth spices and slow-cooked over a fire or grill',
        price: 20.0,
      },
      {
        id: '6054',
        type: 'Pasta',
        name: 'Vegetable pasta',
        description: 'Prepared with a frsh vegetables with chedder and cheese',
        price: 12.0,
      },
      {
        id: '6055',
        type: 'Meat',
        name: 'Kibbeh',
        description:
          'Lebanon’s National Dish is calling your name, tempting you to crunch into its crazy delicious fried exterior to let those sautéed pine nuts and spicy minced meat waken up your tongue.',
        price: 8.0,
      },
    ],

    createdAt: new Date(),
    updatedAt: new Date(),
  }),

  createVendor({
    id: '1013',
    name: 'Fish & Co',
    slug: 'fish-co',
    previewUrl: 'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/fish.jpg',
    thumbnailUrl:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/fish_thumb.jpg',
    type: 'restaurant', // fixed don't change
    //must be lowercase and - separated
    categories: ['chinese', 'sea-food', 'vegetarian', 'vegan', 'barista'],
    description: 'We speak fish',
    deliveryDetails: {
      charge: '20',
      minimumOrder: 30,
      isFree: false,
    },
    promotion: '10',
    address: '2021  State Street, Michigan',
    products: [
      {
        id: '6056',
        type: 'Burgers',
        name: 'Classic Cheese Burger',
        description:
          'Prepared with a patty, a slice of cheese and special sauce',
        price: 8.0,
      },
      {
        id: '6057',
        type: 'Coffee',
        name: 'Lattee',
        description: 'Prepared with freshly ground cofee beans',
        price: 5.0,
      },
      {
        id: '6058',
        type: 'Pasta',
        name: 'Vegetable pasta',
        description: 'Prepared with a frsh vegetables with chedder and cheese',
        price: 12.0,
      },
      {
        id: '6059',
        type: 'Rice',
        name: 'Chicken Fried Rice',
        description:
          'Prepared with chinese masala and rice and chicken with fresh vegetable',
        price: 10.0,
      },
      {
        id: '6060',
        type: 'Rice',
        name: 'Egg Fried Rice',
        description:
          'Prepared with chinese masala and rice and egg with fresh vegetable',
        price: 8.0,
      },
    ],

    createdAt: new Date(),
    updatedAt: new Date(),
  }),

  createVendor({
    id: '1014',
    name: 'Bella Italia',
    slug: 'bela-italia',
    previewUrl: 'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/bela.jpg',
    thumbnailUrl:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/bela_thumb.jpg',
    type: 'restaurant', // fixed don't change
    //must be lowercase and - separated
    categories: ['indian', 'kebab', 'thai', 'italian'],
    description: 'Come hungry, leave happy',
    deliveryDetails: {
      charge: 'Free',
      minimumOrder: 30,
      isFree: true,
    },
    promotion: '10',
    address: '1088  Grasselli Street, New Hampshire',
    products: [
      {
        id: '6061',
        type: 'kebab',
        name: 'Shiekh Kebab',
        description: 'Prepared marinated beef and made on a coal bed',
        price: 8.0,
      },
      {
        id: '6062',
        type: 'Kebab',
        name: 'Lamb Doner',
        description:
          'Prepared with a marinated lamb fry, fresh vegetables, tomato sauce, mayonese, and fresh pitta bread',
        price: 12.0,
      },
      {
        id: '6063',
        type: 'Soup',
        name: 'Corn Soup',
        description:
          'Prepared in a large pot over medium heat, combine chicken, water, onions, celery, salt, nutmeg and pepper. Bring to a boil, then reduce heat and simmer 2 hours, adding water as needed,',
        price: 8.0,
      },

      {
        id: '6064',
        type: 'Noodles',
        name: 'Masala Noodles',
        description:
          'made with boiled noodles with egg, fresh vegetables, butter and special house sauce',
        price: 12.0,
      },
      {
        id: '6065',
        type: 'Noodles',
        name: 'Chicken Noodles',
        description:
          'made with boiled noodles with egg, fresh vegetables, chicken, butter and special house sauce',
        price: 10.0,
      },
    ],

    createdAt: new Date(),
    updatedAt: new Date(),
  }),

  createVendor({
    id: '1015',
    name: 'Village Square Restaurant',
    slug: 'village-square',
    previewUrl:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/village.jpg',
    thumbnailUrl:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/village_thumb.jpg',
    type: 'restaurant', // fixed don't change
    //must be lowercase and - separated
    categories: [
      'fast-food',
      'pizza',
      'indian',
      'kebab',
      'thai',
      'italian',
      'barista',
    ],
    description: 'Always fresh, never frozen',
    deliveryDetails: {
      charge: 'Free',
      minimumOrder: 20,
      isFree: true,
    },
    promotion: '10',
    address: '2592  Hickory Heights Drive, Maryland',
    products: [
      {
        id: '6066',
        type: 'Burgers',
        name: 'Classic Cheese Burger',
        description:
          'Prepared with a patty, a slice of cheese and special sauce',
        price: 6.0,
      },
      {
        id: '6067',
        type: 'Biriyani',
        name: 'Hydrabadi Biriyani',
        description:
          'Slow cooked with fresh beef, chili, onion , garlic and house signature spices',
        price: 15.0,
      },
      {
        id: '6068',
        type: 'Sandwich',
        name: 'Grilled Chicken Sub',
        description:
          'Prepared with grilled chicken patty, salad and house signature sauce',
        price: 5.0,
      },
      {
        id: '6069',
        type: 'Kebab',
        name: 'Lamb Doner',
        description:
          'Prepared with a marinated lamb fry, fresh vegetables, tomato sauce, mayonese, and fresh pitta bread',
        price: 12.0,
      },
    ],

    createdAt: new Date(),
    updatedAt: new Date(),
  }),

  createVendor({
    id: '1016',
    name: 'Little India NY',
    slug: 'little-india',
    previewUrl:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/little.jpg',
    thumbnailUrl:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/little_thumb.jpg',
    type: 'restaurant', // fixed don't change
    //must be lowercase and - separated
    categories: [
      'chinese',
      'indian',
      'kebab',
      'thai',
      'italian',
      'steak-house',
      'barista',
    ],
    description: 'Life tastes better with Little India',
    deliveryDetails: {
      charge: '5',
      minimumOrder: 30,
      isFree: false,
    },
    promotion: '10',
    address: '2110  Goodwin Avenue, Washington',
    products: [
      {
        id: '6071',
        type: 'Biriyani',
        name: 'Hydrabadi Biriyani',
        description:
          'Slow cooked with fresh beef, chili, onion , garlic and house signature spices',
        price: 25.0,
      },
      {
        id: '6072',
        type: 'Biriyani',
        name: 'Chicken Biriyani',
        description:
          'Prepared with fresh chicken, chili, onion ,rice, garlic and house signature spices',
        price: 22.0,
      },
      {
        id: '6073',
        type: 'Sandwich',
        name: 'Grilled Chicken Sub',
        description:
          'Prepared with grilled chicken patty, salad and house signature sauce',
        price: 8.0,
      },

      {
        id: '6074',
        type: 'Coffee',
        name: 'Lattee',
        description: 'Prepared with freshly ground cofee beans',
        price: 5.0,
      },
      {
        id: '6075',
        type: 'Curry',
        name: 'Chicken Curry',
        description:
          'Prepared with fresh chicken, chili, onion , garlic and house signature spices',
        price: 12.0,
      },
      {
        id: '6070',
        type: ' Kebab',
        name: 'Boti Kebab',
        description:
          'Grillec with fresh chicken, chili, onion , garlic and house signature spices',
        price: 15.0,
      },
    ],

    createdAt: new Date(),
    updatedAt: new Date(),
  }),

  createVendor({
    id: '1017',
    name: 'Pizza Inn',
    slug: 'pizza-inn',
    previewUrl:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/pizza.jpg',
    thumbnailUrl:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/pizza_thumb.jpg',
    type: 'restaurant', // fixed don't change
    //must be lowercase and - separated
    categories: [
      'fast-food',
      'pizza',
      'indian',
      'kebab',
      'thai',
      'italian',
      'steak-house',
    ],
    description: 'Better ingredients. Better pizza',
    deliveryDetails: {
      charge: 'Free',
      minimumOrder: 20,
      isFree: true,
    },
    promotion: '10',
    address: '1258  Rogers Street, Ohio',
    products: [
      {
        id: '6076',
        type: 'Burgers',
        name: 'Classic Cheese Burger',
        description:
          'Prepared with a patty, a slice of cheese and special sauce',
        price: 8.0,
      },
      {
        id: '6077',
        type: 'Breakfast',
        name: 'full English breakfast',
        description:
          'includes bacon (traditionally back bacon), fried, poached or scrambled eggs, fried or grilled tomatoes, fried mushrooms, fried bread or buttered toast, and sausages',
        price: 15.0,
      },
      {
        id: '6078',
        type: 'Steak',
        name: 'T Bone Steak',
        description:
          'Serverd with fresh vegetables, mashed potatoes and special sauce',
        price: 30.0,
      },
      {
        id: '6079',
        type: 'Fish',
        name: 'Fish & Chips',
        description: 'Fried fresh cod fish, chips  and house signature sauce',
        price: 20.0,
      },
      {
        id: '6080',
        type: 'Pizza',
        name: 'Classic Chicken Sausage',
        description: 'Prepared with chicken sausage, onion & green chilies',
        price: 12.0,
      },
      {
        id: '6081',
        type: 'Pizza',
        name: 'Red N Hot',
        description:
          'Prepared with spicy chicken, beef, onions, tomatoes & green chilies',
        price: 12.0,
      },
    ],

    createdAt: new Date(),
    updatedAt: new Date(),
  }),

  createVendor({
    id: '1018',
    name: 'Pizza Hut',
    slug: 'pizza-hut',
    previewUrl:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/pizza-hut.jpg',
    thumbnailUrl:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/pizza-hut_thumb.jpg',
    type: 'restaurant', // fixed don't change
    //must be lowercase and - separated
    categories: ['fast-food', 'pizza', 'thai', 'lebanese'],
    description: 'Think outside the bun',
    deliveryDetails: {
      charge: '5 ',
      minimumOrder: 40,
      isFree: false,
    },
    promotion: '10',
    address: '1750  Coolidge Street, New York',
    products: [
      {
        id: '6082',
        type: 'Burgers',
        name: 'Classic Cheese Burger',
        description:
          'Prepared with a patty, a slice of cheese and special sauce',
        price: 5.0,
      },
      {
        id: '6083',
        type: 'Pizza',
        name: 'Supreme',
        description:
          'The ultimate pizza for all meat lovers,spicy chicken,chicken & beef topped with onions,mushrooms,capsicum & lots of cheese',
        price: 15.0,
      },
      {
        id: '6084',
        type: 'Pizza',
        name: 'BBQ Temptation',
        description:
          'Prepared with spicy chicken marinated in BBQ sauce, onions, capsicum, tomatoes & green chilies',
        price: 18.0,
      },
      {
        id: '6085',
        type: 'Meat',
        name: 'Kibbeh',
        description:
          'Lebanon’s National Dish is calling your name, tempting you to crunch into its crazy delicious fried exterior to let those sautéed pine nuts and spicy minced meat waken up your tongue.',
        price: 8.0,
      },
    ],

    createdAt: new Date(),
    updatedAt: new Date(),
  }),

  createVendor({
    id: '1019',
    name: 'Glazed NY',
    slug: 'glazed-ny',
    previewUrl:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/glazed.jpg',
    thumbnailUrl:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/glazed_thumb.jpg',
    type: 'restaurant', // fixed don't change
    //must be lowercase and - separated
    categories: ['chinese', 'indian', 'kebab', 'arabic', 'thai'],
    description: 'America runs on Glazed',
    deliveryDetails: {
      charge: 'Free',
      minimumOrder: 20,
      isFree: true,
    },
    promotion: '10',
    address: '919  Black Stallion Road, Kentucky',
    products: [
      {
        id: '6086',
        type: 'Chicken',
        name: 'Chicken fry',
        description: 'Deep fried crispy chicken',
        price: 8.0,
      },
      {
        id: '6087',
        type: 'Biriyani',
        name: 'Mutton Biriyani',
        description:
          'Prepared with fresh mutton, chili, onion , garlic rice,and house signature spices',
        price: 20.0,
      },
      {
        id: '6088',
        type: 'Sandwich',
        name: 'Grilled Chicken Sub',
        description:
          'Prepared with grilled chicken patty, salad and house signature sauce',
        price: 6.0,
      },
      {
        id: '6089',
        type: 'Soup',
        name: 'Thai Soup',
        description: 'Thai clear soup with prawn and chicken',
        price: 8.0,
      },
    ],

    createdAt: new Date(),
    updatedAt: new Date(),
  }),

  createVendor({
    id: '1020',
    name: 'Thai Signature',
    slug: 'thai-signature',
    previewUrl: 'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/thai.jpg',
    thumbnailUrl:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/thai_thumb.jpg',
    type: 'restaurant', // fixed don't change
    //must be lowercase and - separated
    categories: ['chinese', 'kebab', 'arabic', 'thai', 'italian', 'barista'],
    description: 'The future of tradition',
    deliveryDetails: {
      charge: '5 ',
      minimumOrder: 25,
      isFree: false,
    },
    promotion: '10',
    address: '343  Anthony Avenue , Texas',
    products: [
      {
        id: '6007',
        type: 'Rice',
        name: 'Chicken Fried Rice',
        description:
          'Prepared with chinese masala and rice and chicken with fresh vegetable',
        price: 15.0,
      },
      {
        id: '6061',
        type: 'kebab',
        name: 'Shiekh Kebab',
        description: 'Prepared marinated beef and made on a coal bed',
        price: 12.0,
      },
      {
        id: '6036',
        type: 'Pasta',
        name: 'Classic Cheese Pasta',
        description:
          'Prepared with fresh chicken , cheese, tomatoes and special sauce',
        price: 10.0,
      },
      {
        id: '6036',
        type: 'Pasta',
        name: 'Fresh Vegetable  Pasta',
        description:
          'Prepared with fresh vegetables  , cheese, tomatoes and special sauce',
        price: 8.0,
      },
    ],

    createdAt: new Date(),
    updatedAt: new Date(),
  }),
];
