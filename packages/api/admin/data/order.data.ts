import { plainToClass } from "class-transformer";
import Order from "../services/order/order.type";

const loadOrders = (): Order[] => {
  return plainToClass(Order, [
    {
      id: 1,
      customer_id: "1",
      deliveryTime: "13th April",
      amount: 249.7,
      creation_date: new Date(),
      payment_method: "Cash On Delivery",
      delivery_address: "29 Eve Street, 543 Evenue Road, Ny 87876",
      contact_number: "715-371-3507",
      subtotal: 200,
      discount: 0.0,
      delivery_fee: 49.7,
      products: [
        {
          id: 1,
          title: "first product",
          weight: "2lb",
          price: 50,
          image: "https://picsum.photos/200/300",
          quantity: 2
        },
        {
          id: 2,
          title: "second product",
          image: "https://picsum.photos/200/300",
          weight: "2lb",
          price: 100,
          quantity: 1
        }
      ],
      status: "delivered"
    },
    {
      id: 2,
      customer_id: "2",
      amount: 339.0,
      deliveryTime: "17th April",
      payment_method: "Cash On Delivery",

      creation_date: new Date(),
      delivery_address: "29 Eve Street, 543 Evenue Road, Ny 87876",
      contact_number: "937-667-7660",

      subtotal: 300,
      discount: 0.0,
      delivery_fee: 39.0,
      products: [
        {
          id: 1,
          title: "first product",
          image: "https://picsum.photos/200/300",
          weight: "2lb",
          price: 50,
          quantity: 3
        },
        {
          id: 2,
          title: "latest quality ring",
          image: "https://picsum.photos/200/300",
          weight: "2lb",
          price: 50,
          quantity: 3
        }
      ],
      status: "pending"
    },
    {
      id: 3,
      customer_id: "3",
      amount: 339.0,
      deliveryTime: "17th April",
      payment_method: "Cash On Delivery",

      creation_date: new Date(),
      delivery_address: "29 Eve Street, 543 Evenue Road, Ny 87876",
      contact_number: "508-588-6165",

      subtotal: 300,
      discount: 0.0,
      delivery_fee: 39.0,
      products: [
        {
          id: 1,
          title: "first product",
          image: "https://picsum.photos/200/300",
          weight: "2lb",
          price: 50,
          quantity: 3
        },
        {
          id: 2,
          title: "latest quality ring",
          image: "https://picsum.photos/200/300",
          weight: "2lb",
          price: 50,
          quantity: 3
        }
      ],
      status: "failed"
    },

    {
      id: 4,
      customer_id: "1",
      amount: 450.0,
      deliveryTime: "17th November",
      payment_method: "Cash On Delivery",

      creation_date: new Date(),
      delivery_address: "33 Baker Street, Crescent Road, CA 65746",
      contact_number: "989-981-9455",

      subtotal: 400,
      discount: 0.0,
      delivery_fee: 50.0,
      products: [
        {
          id: 226,
          title: "Ozmo Air & Fabric Freshner",
          image:
            "http://s3.amazonaws.com/redqteam.com/pickbazar/air_freshner_acana_ozmo.jpg",
          weight: "2lb",
          price: 5,
          quantity: 30
        },
        {
          id: 274,
          title: "Professional Moth Killer",
          image:
            "http://s3.amazonaws.com/redqteam.com/pickbazar/pest_control_kritterkill.jpg",
          weight: "2lb",
          price: 50,
          quantity: 3
        }
      ],
      status: "delivered"
    },

    {
      id: 5,
      customer_id: "2",
      amount: 250.0,
      deliveryTime: "17th November",
      payment_method: "Cash On Delivery",

      creation_date: new Date(),
      delivery_address: "29 Eve Street, 543 Evenue Road, Ny 87876",
      contact_number: "352-368-4009",

      subtotal: 200,
      discount: 0.0,
      delivery_fee: 50.0,
      products: [
        {
          id: 322,
          title: "Clover Valley Vegetable Oil",
          image:
            "http://s3.amazonaws.com/redqteam.com/pickbazar/oil_clover_valley.jpg",
          weight: "2lb",
          price: 5,
          quantity: 30
        },
        {
          id: 323,
          title: "Daisy Corn Oil",
          image: "http://s3.amazonaws.com/redqteam.com/pickbazar/oil_daisy.jpg",
          weight: "2lb",
          price: 50,
          quantity: 1
        }
      ],
      status: "failed"
    },
    {
      id: 6,
      customer_id: "2",
      amount: 250.0,
      deliveryTime: "17th November",
      payment_method: "Cash On Delivery",

      creation_date: new Date(),
      delivery_address: "29 Eve Street, 543 Evenue Road, Ny 87876",
      contact_number: "215-645-0615",

      subtotal: 200,
      discount: 0.0,
      delivery_fee: 50.0,
      products: [
        {
          id: 376,
          title: "Ballymaloe Mayonnaise",
          image:
            "http://s3.amazonaws.com/redqteam.com/pickbazar/Ballymaloe_Mayonnaise_240g.jpg",
          weight: "2lb",
          price: 5,
          quantity: 30
        },
        {
          id: 398,
          title: "Diet Coke",
          image: "http://s3.amazonaws.com/redqteam.com/pickbazar/oil_daisy.jpg",
          weight: "2lb",
          price: 5,
          quantity: 10
        }
      ],
      status: "processing"
    },
    {
      id: 7,
      customer_id: "4",
      amount: 600.0,
      deliveryTime: "17th November",
      payment_method: "Cash On Delivery",

      creation_date: new Date(),
      delivery_address: "24092 Ocello Street San Diego, CA 92111",
      contact_number: "727-438-6098",

      subtotal: 550,
      discount: 0.0,
      delivery_fee: 50.0,
      products: [
        {
          id: 463,
          title: "Spadet Deodorant",
          image:
            "http://s3.amazonaws.com/redqteam.com/pickbazar/spadet_Deodorant.jpg",
          weight: "2lb",
          price: 50,
          quantity: 4
        },
        {
          id: 464,
          title: "Attitude Bubble Bath",
          image:
            "http://s3.amazonaws.com/redqteam.com/pickbazar/attitude_night_bubble_bath.jpg",
          weight: "2lb",
          price: 50,
          quantity: 6
        }
      ],
      status: "processing"
    },
    {
      id: 8,
      customer_id: "4",
      amount: 600.0,
      deliveryTime: "17th November",
      payment_method: "Cash On Delivery",

      creation_date: new Date(),
      delivery_address: "24092 Ocello Street San Diego, CA 92111",
      contact_number: "208-610-3130",

      subtotal: 550,
      discount: 0.0,
      delivery_fee: 50.0,
      products: [
        {
          id: 334,
          title: "Natures Gift Basmati Rice",
          image:
            "http://s3.amazonaws.com/redqteam.com/pickbazar/nature's_gift_basmati_rice.jpg",
          weight: "2lb",
          price: 50,
          quantity: 4
        },
        {
          id: 266,
          title: "Ecos",
          image:
            "http://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_ecos.jpg",
          weight: "2lb",
          price: 50,
          quantity: 6
        }
      ],
      status: "delivered"
    },
    {
      id: 9,
      customer_id: "6",
      amount: 250.0,
      deliveryTime: "17th November",
      payment_method: "Cash On Delivery",

      creation_date: new Date(),
      delivery_address: "2971 Waldeck Street Arlington, TX 75760",
      contact_number: "208-410-3130",

      subtotal: 250,
      discount: 0.0,
      delivery_fee: 50.0,
      products: [
        {
          id: 250,
          title: "Winni's Natural",
          image:
            "http://s3.amazonaws.com/redqteam.com/pickbazar/dishwasher_winni's_bango_schiuma.jpg",
          weight: "2lb",
          price: 50,
          quantity: 1
        },
        {
          id: 252,
          title: "Camp Cuthlery",
          image:
            "http://s3.amazonaws.com/redqteam.com/pickbazar/kitchen_accessories_camp_cutlery.jpg",
          weight: "2lb",
          price: 150,
          quantity: 1
        }
      ],
      status: "processing"
    },
    {
      id: 10,
      customer_id: "6",
      amount: 350.0,
      deliveryTime: "17th November",
      payment_method: "Cash On Delivery",

      creation_date: new Date(),
      delivery_address: "2971 Waldeck Street Arlington, TX 75760",
      contact_number: "901-268-7845",

      subtotal: 300,
      discount: 0.0,
      delivery_fee: 50.0,
      products: [
        {
          id: 394,
          title: "Tropicana Orange",
          image:
            "http://s3.amazonaws.com/redqteam.com/pickbazar/tropicana_orange_no_pulp.jpg",
          weight: "2lb",
          price: 50,
          quantity: 5
        },
        {
          id: 449,
          title: "Human Nature Shaving Cream",
          image:
            "http://s3.amazonaws.com/redqteam.com/pickbazar/kitchen_accessories_camp_cutlery.jpg",
          weight: "2lb",
          price: 50,
          quantity: 1
        }
      ],
      status: "processing"
    },

    {
      id: 11,
      customer_id: "5",
      amount: 350.0,
      deliveryTime: "17th November",
      payment_method: "Cash On Delivery",

      creation_date: new Date(),
      delivery_address: "2396 Gordon Street Los Angeles, CA 90017",
      contact_number: "715-402-6676",

      subtotal: 300,
      discount: 0.0,
      delivery_fee: 50.0,
      products: [
        {
          id: 451,
          title: "Absolute Plus Meat Dental Set",
          image:
            "http://s3.amazonaws.com/redqteam.com/pickbazar/absolute_plus_Meat_Dental_Set_.jpg",
          weight: "2lb",
          price: 50,
          quantity: 5
        },
        {
          id: 449,
          title: "Human Nature Shaving Cream",
          image:
            "http://s3.amazonaws.com/redqteam.com/pickbazar/kitchen_accessories_camp_cutlery.jpg",
          weight: "2lb",
          price: 50,
          quantity: 1
        }
      ],
      status: "processing"
    },
    {
      id: 12,
      customer_id: "7",
      amount: 850.0,
      deliveryTime: "17th November",
      payment_method: "Cash On Delivery",

      creation_date: new Date(),
      delivery_address: "3090 Marshall Street Baltimore, MD 21202",
      contact_number: "917-536-4332",

      subtotal: 800,
      discount: 0.0,
      delivery_fee: 50.0,
      products: [
        {
          id: 396,
          title: "Coca Cola Botle",
          image:
            "http://s3.amazonaws.com/redqteam.com/pickbazar/Coca_Cola_200ml_Bottle.jpg",
          weight: "2lb",
          price: 10,
          quantity: 50
        },
        {
          id: 253,
          title: "Dinner Spoon ",
          image:
            "http://s3.amazonaws.com/redqteam.com/pickbazar/kitchen_accessories_dinner_spoons.jpg",
          weight: "2lb",
          price: 300,
          quantity: 1
        }
      ],
      status: "pending"
    },
    {
      id: 13,
      customer_id: "2",
      amount: 400.0,
      deliveryTime: "17th November",
      payment_method: "Cash On Delivery",

      creation_date: new Date(),
      delivery_address: "43 Street, 2341 Road Visalia, Ny 24252",
      contact_number: "956-971-8877",

      subtotal: 350,
      discount: 0.0,
      delivery_fee: 50.0,
      products: [
        {
          id: 265,
          title: "Home Made Simple",
          image:
            "http://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_home_made_simple.jpg",
          weight: "2lb",
          price: 50,
          quantity: 5
        },
        {
          id: 402,
          title: "Canadian Maple Syrup",
          image:
            "http://s3.amazonaws.com/redqteam.com/pickbazar/canadian_maple_syrup.jpg",
          weight: "2lb",
          price: 50,
          quantity: 2
        }
      ],
      status: "delivered"
    },
    {
      id: 14,
      customer_id: "3",
      amount: 350.0,
      deliveryTime: "17th November",
      payment_method: "Cash On Delivery",

      creation_date: new Date(),
      delivery_address: "2852 Duck Creek Road Palo Alto, CA 94306",
      contact_number: "870-585-7592",

      subtotal: 350,
      discount: 0.0,
      delivery_fee: 50.0,
      products: [
        {
          id: 394,
          title: "Tropicana Orange",
          image:
            "http://s3.amazonaws.com/redqteam.com/pickbazar/tropicana_orange_no_pulp.jpg",
          weight: "2lb",
          price: 50,
          quantity: 5
        },
        {
          id: 449,
          title: "Human Nature Shaving Cream",
          image:
            "http://s3.amazonaws.com/redqteam.com/pickbazar/kitchen_accessories_camp_cutlery.jpg",
          weight: "2lb",
          price: 50,
          quantity: 1
        }
      ],
      status: "pending"
    },
    {
      id: 15,
      customer_id: "9",
      amount: 730.0,
      deliveryTime: "17th November",
      payment_method: "Cash On Delivery",

      creation_date: new Date(),
      delivery_address: "4270 Kennedy Court Mansfield, MA 02048",
      contact_number: "320-692-5287",

      subtotal: 680,
      discount: 0.0,
      delivery_fee: 50.0,
      products: [
        {
          id: 406,
          title: "Servivita Chocolate Syrup",
          image:
            "http://s3.amazonaws.com/redqteam.com/pickbazar/servivita_chocolate_syrup.jpg",
          weight: "2lb",
          price: 50,
          quantity: 5
        },
        {
          id: 453,
          title: "Gum Oral Care Cleaning Kit",
          image:
            "http://s3.amazonaws.com/redqteam.com/pickbazar/gum_Oral_care_cleaning_kit.jpg",
          weight: "2lb",
          price: 430,
          quantity: 1
        }
      ],
      status: "pending"
    }
  ]);
};

export default loadOrders;
