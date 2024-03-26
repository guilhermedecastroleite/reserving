const hotelDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const facilities = [
  "WIFI",
  "AC",
  "PARKING",
  "BUSINESS",
  "SWIMMING_POOL",
  "TOP_RATED",
];

const standardRoom = {
  roomType: "standard-room",
  name: "Standard room",
  size: "200 sq ft",
  number_guests: 2,
  beds: {
    double: 1,
  },
  price: {
    original: 150,
    discounted: 130,
    discount: 0.05,
    formatted: "$130",
    original_formatted: "$150",
    currency: "$",
  },
};

const standardTwinRoom = {
  roomType: "standard-twin",
  name: "Standard twin room",
  size: "300 sq ft",
  number_guests: 3,
  beds: {
    double: 1,
    single: 1,
  },
  price: {
    original: 200,
    discounted: 170,
    discount: 0.15,
    formatted: "$170",
    original_formatted: "$200",
    currency: "$",
  },
};

const familyRoom = {
  roomType: "family",
  name: "Family room",
  size: "400 sq ft",
  number_guests: 4,
  beds: {
    double: 1,
    single: 2,
  },
  price: {
    original: 220,
    formatted: "$220",
    currency: "$",
  },
};

const deluxe = {
  roomType: "deluxe",
  name: "Deluxe room",
  size: "300 sq ft",
  number_guests: 2,
  beds: {
    double: 1,
  },
  price: {
    original: 350,
    discounted: 320,
    discount: 0.09,
    formatted: "$320",
    original_formatted: "$350",
    currency: "$",
  },
};

const presidential = {
  roomType: "presidential",
  name: "Presidential room",
  size: "1000 sq ft",
  number_guests: 6,
  beds: {
    double: 3,
  },
  price: {
    original: 600,
    formatted: "$600",
    currency: "$",
  },
};

const hotelImages = {
  cover: {
    src: "https://placehold.co/820x452/webp",
    alt: "Alt text",
    width: 820,
    height: 452,
  },
  album: [
    {
      src: "https://placehold.co/820x452/webp",
      alt: "Alt text",
      width: 820,
      height: 452,
    },
    {
      src: "https://placehold.co/820x452/webp",
      alt: "Alt text",
      width: 820,
      height: 452,
    },
  ],
};

const hotels = [
  {
    hotelId: "lakeside-motel-warefront",
    name: "Lakeside Motel Warefront",
    description: hotelDescription,
    category: "hotels-apartments",
    promotion: "book-now",
    rating: {
      rating: 4.5,
      amountReviews: 1200,
    },
    facilities: facilities,
    location: {
      country: "Australia",
      city: "Melbourne",
      address: "Lorem ipsum road, Tantruim-2322, Melbourne, Australia",
      coordinates: [-37.851899, 144.95726],
      nearby: [
        {
          coordinates: [-37.84921182088626, 144.9717504447874],
          name: "Albert Park Grand Prix Circuit",
        },
      ],
    },
    rooms: [standardRoom, familyRoom, standardTwinRoom, deluxe, presidential],
    images: hotelImages,
  },
  {
    hotelId: "julia-dens-resort",
    name: "Julia Dens Resort",
    description: hotelDescription,
    category: "resort",
    rating: {
      rating: 4.8,
      amountReviews: 1300,
    },
    facilities: facilities,
    location: {
      country: "New Zealand",
      city: "Auckland",
      address: "Lorem ipsum road, Tantruim-2322, Auckland, New Zealand",
      coordinates: [-36.84629217114528, 174.72493851636656],
      nearby: [
        {
          coordinates: [-36.846966831795385, 174.72364982434257],
          name: "Bella Vista Reserve",
        },
      ],
    },
    rooms: [standardRoom, familyRoom, standardTwinRoom],
    images: hotelImages,
  },
  {
    hotelId: "asakusa-hostel",
    name: "Asakusa Hostel",
    description: hotelDescription,
    category: "shared-space",
    rating: {
      rating: 4.8,
      amountReviews: 900,
    },
    facilities: facilities,
    location: {
      country: "Japan",
      city: "Tokyo",
      address: "Lorem ipsum road, Tantruim-2322, Tokyo, Japan",
      coordinates: [35.71640580292459, 139.79775315707084],
      nearby: [
        {
          coordinates: [35.71487581129941, 139.7966608709259],
          name: "Sensō-ji",
        },
      ],
    },
    rooms: [standardRoom, familyRoom, standardTwinRoom, deluxe],
    images: hotelImages,
  },
  {
    hotelId: "athens-villa",
    name: "Athens Villa",
    description: hotelDescription,
    category: "residence",
    rating: {
      rating: 4.3,
      amountReviews: 2000,
    },
    facilities: facilities,
    location: {
      country: "Greece",
      city: "Athens",
      address: "Lorem ipsum road, Tantruim-2322, Athens, Greece",
      coordinates: [37.98693684437114, 23.734160180669015],
      nearby: [
        {
          coordinates: [37.989302617184, 23.734975866153736],
          name: "National Archaeological Museum",
        },
      ],
    },
    rooms: [standardRoom, familyRoom, standardTwinRoom, deluxe, presidential],
    images: hotelImages,
  },
];

module.exports = { hotels };
