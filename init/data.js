const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    category: "home",
  },

  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    category: "iconic-cities",
  },

  {
    title: "Mountain Retreat",
    description:
      "Peaceful mountain cabin surrounded by nature.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    category: "mountains",
  },

  {
    title: "Historic Villa in Tuscany",
    description:
      "Beautifully restored villa in Tuscany.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    category: "iconic-cities",
  },

  {
    title: "Secluded Treehouse Getaway",
    description:
      "Unique treehouse retreat for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    category: "camping",
  },

  {
    title: "Beachfront Paradise",
    description:
      "Relaxing beachfront condo with pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    category: "amazing-pools",
  },

  {
    title: "Rustic Cabin by the Lake",
    description:
      "Cozy lakeside cabin for outdoor adventures.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    category: "camping",
  },

  {
    title: "Luxury Penthouse with City Views",
    description:
      "Luxury penthouse with panoramic city skyline.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    category: "trending",
  },

  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Swiss Alps chalet with direct ski access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    category: "mountains",
  },

  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Luxury safari lodge in the wild.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
    },
    price: 4000,
    location: "Serengeti",
    country: "Tanzania",
    category: "camping",
  },

  {
    title: "Historic Canal House",
    description:
      "Historic canal house in Amsterdam.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    category: "iconic-cities",
  },

  {
    title: "Private Island Retreat",
    description:
      "Entire private island vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    category: "trending",
  },

  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Quaint cottage in the countryside.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    category: "home",
  },

  {
    title: "Historic Brownstone in Boston",
    description:
      "Elegant historic brownstone home.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
    category: "iconic-cities",
  },

  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Beachfront bungalow with private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    category: "amazing-pools",
  },

  {
    title: "Mountain View Cabin in Banff",
    description:
      "Cabin with breathtaking mountain views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
    category: "mountains",
  },

  {
    title: "Art Deco Apartment in Miami",
    description:
      "Stylish Art Deco apartment in Miami.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1670963964797-942df1804579",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
    category: "iconic-cities",
  },

  {
    title: "Tropical Villa in Phuket",
    description:
      "Luxury villa with infinity pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    category: "amazing-pools",
  },

  {
    title: "Historic Castle in Scotland",
    description:
      "Historic castle in the Scottish Highlands.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98",
    },
    price: 4000,
    location: "Scotland",
    country: "United Kingdom",
    category: "castles",
  },

  {
    title: "Desert Oasis in Dubai",
    description:
      "Luxury desert oasis with private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
    },
    price: 5000,
    location: "Dubai",
    country: "UAE",
    category: "trending",
  },

  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Cozy log cabin in the wilderness.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
    category: "camping",
  },

  {
    title: "Beachfront Villa in Greece",
    description:
      "Beautiful villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    category: "home",
  },

  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Eco-friendly forest treehouse retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "camping",
  },

  {
    title: "Historic Cottage in Charleston",
    description:
      "Historic cottage with private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
    category: "home",
  },

  {
    title: "Modern Apartment in Tokyo",
    description:
      "Modern apartment in central Tokyo.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    category: "iconic-cities",
  },

  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Relaxing lakefront mountain cabin.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    category: "camping",
  },

  {
    title: "Luxury Villa in the Maldives",
    description:
      "Luxury overwater villa in Maldives.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    category: "trending",
  },

  {
    title: "Ski Chalet in Aspen",
    description:
      "Luxury ski chalet in Aspen.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
    category: "mountains",
  },

  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Secluded beach house by the ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "arctic",
  },
];

module.exports = { data: sampleListings };