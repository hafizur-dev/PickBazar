import { plainToClass } from "class-transformer";
import Customer from "../services/customer/customer.type";

const loadCustomers = (): Customer[] => {
  return plainToClass(Customer, [
    {
      id: "1",
      name: "James L. Frank",
      image: "https://randomuser.me/api/portraits/men/80.jpg",
      email: "jameslfrank@jourrapide.com",
      total_order: 20,
      total_order_amount: 2563,
      address: [
        {
          id: "12312",
          type: "primary",
          name: "Home",
          info: "27 Street, 2569 Heritage Road Visalia, CA 93291"
        },
        {
          id: "23423",
          type: "secondary",
          name: "Office",
          info: "33 Baker Street, Crescent Road, CA 65746"
        }
      ],
      contacts: [
        {
          id: "88234",
          type: "primary",
          number: "715-371-3507"
        },
        {
          id: "23439",
          type: "secondary",
          number: "715-371-3507"
        }
      ],
      card: [
        {
          id: "179012",
          type: "primary",
          cardType: "paypal",
          name: "james l. frank",
          lastFourDigit: 2349
        },
        {
          id: "987234",
          type: "secondary",
          cardType: "master",
          name: "james l. frank",
          lastFourDigit: 8724
        },
        {
          id: "424987",
          type: "secondary",
          cardType: "visa",
          name: "james l. frank",
          lastFourDigit: 4535
        },
        {
          id: "455599",
          type: "secondary",
          cardType: "visa",
          name: "james l. frank",
          lastFourDigit: 4585
        }
      ],
      creation_date: new Date()
    },
    {
      id: "2",
      name: "Andre M. Pollock",
      image:
        "https://tinyfac.es/data/avatars/B0298C36-9751-48EF-BE15-80FB9CD11143-500w.jpeg",
      email: "andreMPollock@jourrapide.com",
      total_order: 30,
      total_order_amount: 6583,
      address: [
        {
          id: "265789",
          type: "primary",
          name: "Home",
          info: "43 Street, 2341 Road Visalia, Ny 24252"
        },
        {
          id: "325164",
          type: "secondary",
          name: "Office",
          info: "29 Eve Street, 543 Evenue Road, Ny 87876"
        }
      ],
      contacts: [
        {
          id: "12354",
          type: "primary",
          number: "937-667-7660"
        },
        {
          id: "32156",
          type: "secondary",
          number: "937-667-7660"
        }
      ],
      card: [
        {
          id: "053151",
          cardType: "paypal",
          name: "andre m. pollock",
          lastFourDigit: 8765
        },
        {
          id: "659000",
          cardType: "master",
          name: "andre m. pollock",
          lastFourDigit: 3201
        },
        {
          id: "9856+320",
          cardType: "visa",
          name: "andre m. pollock",
          lastFourDigit: 3245
        }
      ],
      creation_date: new Date()
    },

    {
      id: "3",
      name: "Debra J. Nguyen",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      email: "debraJNguyen@rhyta.com",
      total_order: 40,
      total_order_amount: 7832,
      address: [
        {
          id: "456984",
          type: "primary",
          name: "Home",
          info: "2852 Duck Creek Road Palo Alto, CA 94306"
        },
        {
          id: "657841",
          type: "secondary",
          name: "Office",
          info: "4107 Medical Center Drive Tampa, FL 33602"
        }
      ],
      contacts: [
        {
          id: "320654",
          type: "primary",
          number: "320-692-5287"
        },
        {
          id: "12462",
          type: "secondary",
          number: "320-692-5287"
        }
      ],
      card: [
        {
          id: "78302",
          cardType: "paypal",
          name: "Debra J. Nguyen",
          lastFourDigit: 6325
        },
        {
          id: "852300",
          cardType: "master",
          name: "Debra J. Nguyen",
          lastFourDigit: 5599
        },
        {
          id: "778899",
          cardType: "visa",
          name: "Debra J. Nguyen",
          lastFourDigit: 3210
        }
      ],
      creation_date: new Date()
    },

    {
      id: "4",
      name: "Erin E. Gonzales",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      email: "erinEGonzales@teleworm.us",
      total_order: 5,
      total_order_amount: 3215,
      address: [
        {
          id: "987654",
          type: "primary",
          name: "Home",
          info: "24092 Ocello Street San Diego, CA 92111"
        },
        {
          id: "014785",
          type: "secondary",
          name: "Office",
          info: "24092 Ocello Street San Diego, CA 92111"
        }
      ],
      contacts: [
        {
          id: "397105",
          type: "primary",
          number: "989-981-9455"
        },
        {
          id: "123985",
          type: "secondary",
          number: "989-981-9455"
        }
      ],
      card: [
        {
          id: "64589521",
          cardType: "paypal",
          name: "Erin E. Gonzales",
          lastFourDigit: 6667
        },
        {
          id: "44223659",
          cardType: "master",
          name: "Erin E. Gonzales",
          lastFourDigit: 4414
        },
        {
          id: "00336652155",
          cardType: "visa",
          name: "Erin E. Gonzales",
          lastFourDigit: 3245
        }
      ],
      creation_date: new Date()
    },
    {
      id: "5",
      name: "Carolyn B. Coulter",
      image: "https://randomuser.me/api/portraits/women/21.jpg",
      email: "carolynBCoulter@dayrep.com",
      total_order: 20,
      total_order_amount: 7863,
      address: [
        {
          id: "8956321",
          type: "primary",
          name: "Home",
          info: "2396 Gordon Street Los Angeles, CA 90017"
        },
        {
          id: "0265161",
          type: "secondary",
          name: "Office",
          info: "2396 Gordon Street Los Angeles, CA 90017"
        }
      ],
      contacts: [
        {
          id: "564984643",
          type: "primary",
          number: "352-368-4009"
        },
        {
          id: "65654651",
          type: "secondary",
          number: "352-368-4009"
        }
      ],
      card: [
        {
          id: "6515165",
          cardType: "paypal",
          name: "Carolyn B. Coulter",
          lastFourDigit: 9874
        },
        {
          id: "320125",
          cardType: "master",
          name: "Carolyn B. Coulter",
          lastFourDigit: 9875
        },
        {
          id: "00123655",
          cardType: "visa",
          name: "Carolyn B. Coulter",
          lastFourDigit: 5621
        }
      ],
      creation_date: new Date()
    },

    {
      id: "6",
      name: "Bryan G. Hathaway",
      image:
        "https://tinyfac.es/data/avatars/26CFEFB3-21C8-49FC-8C19-8E6A62B6D2E0-200w.jpeg",
      email: "bryanGHathaway@jourrapide.com",
      total_order: 2,
      total_order_amount: 1257,
      address: [
        {
          id: "654654654",
          type: "primary",
          name: "Home",
          info: "2971 Waldeck Street Arlington, TX 75760"
        },
        {
          id: "014785",
          type: "secondary",
          name: "Office",
          info: "2971 Waldeck Street Arlington, TX 75760"
        }
      ],
      contacts: [
        {
          id: "988965",
          type: "primary",
          number: "215-645-0615"
        },
        {
          id: "12462",
          type: "secondary",
          number: "215-645-0615"
        }
      ],
      card: [
        {
          id: "320120",
          cardType: "paypal",
          name: "Bryan G. Hathaway",
          lastFourDigit: 5555
        },
        {
          id: "852369",
          cardType: "master",
          name: "Bryan G. Hathaway",
          lastFourDigit: 4412
        },
        {
          id: "00123355",
          cardType: "visa",
          name: "Bryan G. Hathaway",
          lastFourDigit: 3245
        }
      ],
      creation_date: new Date()
    },
    {
      id: "7",
      name: "Tony L. Dematteo",
      image: "https://randomuser.me/api/portraits/men/35.jpg",
      email: "tonyLDematteo@jourrapide.com",
      total_order: 25,
      total_order_amount: 5576,
      address: [
        {
          id: "5232031",
          type: "primary",
          name: "Home",
          info: "3090 Marshall Street Baltimore, MD 21202"
        },
        {
          id: "01245456",
          type: "secondary",
          name: "Office",
          info: "3090 Marshall Street Baltimore, MD 21202"
        }
      ],
      contacts: [
        {
          id: "320156",
          type: "primary",
          number: "727-438-6098"
        },
        {
          id: "12462",
          type: "secondary",
          number: "727-438-6098"
        }
      ],
      card: [
        {
          id: "164654684",
          cardType: "paypal",
          name: "Tony L. Dematteo",
          lastFourDigit: 5855
        },
        {
          id: "354687",
          cardType: "master",
          name: "Tony L. Dematteo",
          lastFourDigit: 4413
        },
        {
          id: "563124860",
          cardType: "visa",
          name: "Tony L. Dematteo",
          lastFourDigit: 3452
        }
      ],
      creation_date: new Date()
    },
    {
      id: "8",
      name: "Leah M. Cassella",
      image: "https://randomuser.me/api/portraits/women/17.jpg",
      email: "leahMCassella@rhyta.com",
      total_order: 10,
      total_order_amount: 1102,
      address: [
        {
          id: "89654710",
          type: "primary",
          name: "Home",
          info: "4270 Kennedy Court Mansfield, MA 02048"
        },
        {
          id: "6543287",
          type: "secondary",
          name: "Office",
          info: "4270 Kennedy Court Mansfield, MA 02048"
        }
      ],
      contacts: [
        {
          id: "563201",
          type: "primary",
          number: "208-610-3130"
        },
        {
          id: "0563795",
          type: "secondary",
          number: "208-610-3130"
        }
      ],
      card: [
        {
          id: "8741032",
          cardType: "paypal",
          name: "Leah M. Cassella",
          lastFourDigit: 5885
        },
        {
          id: "8632145",
          cardType: "master",
          name: "Leah M. Cassella",
          lastFourDigit: 4113
        },
        {
          id: "7403694",
          cardType: "visa",
          name: "Leah M. Cassella",
          lastFourDigit: 3455
        }
      ],
      creation_date: new Date()
    },

    {
      id: "9",
      name: "James C. Chambers",
      image:
        "https://tinyfac.es/data/avatars/E0B4CAB3-F491-4322-BEF2-208B46748D4A-200w.jpeg",
      email: "jamesCChambers@teleworm.us",
      total_order: 17,
      total_order_amount: 5698,
      address: [
        {
          id: "6320125485",
          type: "primary",
          name: "Home",
          info: "4270 Kennedy Court Mansfield, MA 02048"
        },
        {
          id: "8541230",
          type: "secondary",
          name: "Office",
          info: "4270 Kennedy Court Mansfield, MA 02048"
        }
      ],
      contacts: [
        {
          id: "563201",
          type: "primary",
          number: "912-345-6071"
        },
        {
          id: "0552095",
          type: "secondary",
          number: "912-345-6071"
        }
      ],
      card: [
        {
          id: "87418962",
          cardType: "paypal",
          name: "James C. Chambers",
          lastFourDigit: 5985
        },
        {
          id: "86369745",
          cardType: "master",
          name: "James C. Chambers",
          lastFourDigit: 1113
        },
        {
          id: "74865694",
          cardType: "visa",
          name: "James C. Chambers",
          lastFourDigit: 3450
        }
      ],
      creation_date: new Date()
    },
    {
      id: "10",
      name: "Mary R. Wills",
      image: "https://randomuser.me/api/portraits/women/82.jpg",
      email: "maryRWills@armyspy.com",
      total_order: 8,
      total_order_amount: 2874,
      address: [
        {
          id: "63896425485",
          type: "primary",
          name: "Home",
          info: "4960 Kennedy Court Mansfield, MA 02048"
        },
        {
          id: "8541230",
          type: "secondary",
          name: "Office",
          info: "4890 Kennedy Court Mansfield, MA 02048"
        }
      ],
      contacts: [
        {
          id: "5632001",
          type: "primary",
          number: "901-268-7845"
        },
        {
          id: "0552085",
          type: "secondary",
          number: "901-268-7845"
        }
      ],
      card: [
        {
          id: "87878962",
          cardType: "paypal",
          name: "Mary R. Wills",
          lastFourDigit: 6985
        },
        {
          id: "86339745",
          cardType: "master",
          name: "Mary R. Wills",
          lastFourDigit: 1111
        },
        {
          id: "74865554",
          cardType: "visa",
          name: "Mary R. Wills",
          lastFourDigit: 3450
        }
      ],
      creation_date: new Date()
    }
  ]);
};

export default loadCustomers;
