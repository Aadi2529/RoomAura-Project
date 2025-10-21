const sampleListings = [
  {
    title: "Hilltop Villa in Lonavala",
    description:
      "Enjoy breathtaking valley views from this private villa surrounded by misty hills. Ideal for families and couples seeking a serene weekend escape.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1597072689227-8888cd6b58c5?auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Lonavala",
    country: "India",
  },
  {
    title: "Sea Breeze Cottage in Alibaug",
    description:
      "Wake up to the sound of waves in this beachside cottage located minutes away from Alibaug’s pristine beaches.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    },
    price: 4100,
    location: "Alibaug",
    country: "India",
  },
  {
    title: "Luxury Apartment in South Mumbai",
    description:
      "Stay in the heart of the city with skyline views and modern interiors. Perfect for business trips or luxury vacations.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
    },
    price: 5800,
    location: "Mumbai",
    country: "India",
  },
  {
    title: "Farm Stay near Nashik Vineyards",
    description:
      "Unwind in a countryside farmhouse surrounded by vineyards. Great for wine lovers and those seeking a rustic experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Nashik",
    country: "India",
  },
  {
    title: "Lakefront Resort in Bhandardara",
    description:
      "Relax by the calm waters of Bhandardara Lake in this peaceful resort. Ideal for stargazing and trekking enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1595433562696-f4b19a3a1e4c?auto=format&fit=crop&w=800&q=60",
    },
    price: 3400,
    location: "Bhandardara",
    country: "India",
  },
  {
    title: "Mountain Cabin in Mahabaleshwar",
    description:
      "A wooden cabin surrounded by strawberry farms and valleys. Enjoy bonfires and cool breezes all year round.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
    },
    price: 3900,
    location: "Mahabaleshwar",
    country: "India",
  },
  {
    title: "Konkan Seaside Villa in Ratnagiri",
    description:
      "Enjoy sunsets over the Arabian Sea from this coastal villa surrounded by coconut trees.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505692794403-34d4982f88e8?auto=format&fit=crop&w=800&q=60",
    },
    price: 4200,
    location: "Ratnagiri",
    country: "India",
  },
  {
    title: "Stylish Loft in Koregaon Park",
    description:
      "Modern and cozy loft located in the heart of Pune’s nightlife district, close to cafés and boutiques.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154154-5a94b00b1f2b?auto=format&fit=crop&w=800&q=60",
    },
    price: 2700,
    location: "Pune",
    country: "India",
  },
  {
    title: "Treehouse Stay in Igatpuri Hills",
    description:
      "Stay among the treetops with beautiful views of misty mountains. Great for couples and photographers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36a?auto=format&fit=crop&w=800&q=60",
    },
    price: 3100,
    location: "Igatpuri",
    country: "India",
  },
  {
    title: "Riverside Cottage in Kolad",
    description:
      "Adventure meets comfort — stay beside the Kundalika River and enjoy rafting and kayaking activities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600047509807-ba1e06b2c193?auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Kolad",
    country: "India",
  },
  {
    title: "Eco Bamboo Hut in Palghar",
    description:
      "A sustainable retreat built entirely from bamboo, with a nearby organic farm and natural pond.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154517-379b52b2a5b1?auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Palghar",
    country: "India",
  },
  {
    title: "Royal Heritage Stay in Kolhapur",
    description:
      "Live like royalty in this restored palace featuring antique furniture and traditional Maharashtrian meals.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=60",
    },
    price: 4400,
    location: "Kolhapur",
    country: "India",
  },
  {
    title: "Luxury Tent in Malshej Ghat",
    description:
      "Camp in style with fully furnished tents offering panoramic views of the Western Ghats.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1614853035986-96d5ad9d0c8c?auto=format&fit=crop&w=800&q=60",
    },
    price: 2900,
    location: "Malshej Ghat",
    country: "India",
  },
  {
    title: "Forest Lodge near Tadoba National Park",
    description:
      "Perfect for wildlife lovers — enjoy morning safaris and evenings around the bonfire in this jungle lodge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1551887373-6b7c1de24b2d?auto=format&fit=crop&w=800&q=60",
    },
    price: 3300,
    location: "Chandrapur",
    country: "India",
  },
  {
    title: "Cliff View Villa in Dapoli",
    description:
      "Overlooking the ocean cliffs, this villa offers unmatched sea views and a private path to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1617101038296-f3e49fcb0674?auto=format&fit=crop&w=800&q=60",
    },
    price: 3800,
    location: "Dapoli",
    country: "India",
  },
  {
    title: "Budget Studio near Nagpur Central",
    description:
      "Comfortable stay for solo travelers or students. Close to restaurants and markets in central Nagpur.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Nagpur",
    country: "India",
  },
  {
    title: "Heritage Haveli Stay in Aurangabad",
    description:
      "Experience old-world charm in this restored haveli near Ajanta and Ellora caves.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586374579358-9e8adf7e7abf?auto=format&fit=crop&w=800&q=60",
    },
    price: 2900,
    location: "Aurangabad",
    country: "India",
  },
  {
    title: "Luxury Penthouse in Worli Sea Face",
    description:
      "A modern penthouse with floor-to-ceiling windows offering breathtaking sea views and a private jacuzzi.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=60",
    },
    price: 6900,
    location: "Mumbai",
    country: "India",
  },
  {
    title: "Countryside Homestay in Satara",
    description:
      "Stay amidst fields and hills in this peaceful homestay with home-cooked Maharashtrian meals.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60",
    },
    price: 2100,
    location: "Satara",
    country: "India",
  },
  {
    title: "Luxury Resort in Panchgani",
    description:
      "A serene retreat with infinity pool, valley views, and lush gardens, perfect for relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1551887373-6b7c1de24b2d?auto=format&fit=crop&w=800&q=60",
    },
    price: 4300,
    location: "Panchgani",
    country: "India",
  },
  {
    title: "Hill Retreat in Amboli Ghat",
    description:
      "Escape into the misty mountains of Amboli in this nature-friendly stay with waterfalls nearby.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1595594201119-9ecae4049a3b?auto=format&fit=crop&w=800&q=60",
    },
    price: 2400,
    location: "Amboli",
    country: "India",
  },
  {
    title: "Private Chalet in Mulshi",
    description:
      "A secluded hillside chalet overlooking Mulshi Lake — great for meditation and nature walks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600047509807-ba1e06b2c193?auto=format&fit=crop&w=800&q=60",
    },
    price: 3700,
    location: "Mulshi",
    country: "India",
  },
  {
    title: "Boutique Homestay in Shirdi",
    description:
      "Modern stay near Sai Baba Temple with vegetarian meals and peaceful surroundings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600047509807-ba1e06b2c193?auto=format&fit=crop&w=800&q=60",
    },
    price: 2300,
    location: "Shirdi",
    country: "India",
  },
  {
    title: "Backwater Stay in Tarkarli",
    description:
      "Beautiful cottage by the backwaters near the beach. Enjoy kayaking and dolphin watching.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1551887373-6b7c1de24b2d?auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Tarkarli",
    country: "India",
  },
  {
    title: "Hill Cottage in Matheran",
    description:
      "A colonial-era cottage surrounded by forests and viewpoints in car-free Matheran.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
    },
    price: 2700,
    location: "Matheran",
    country: "India",
  },
  {
    title: "Urban Studio in Thane",
    description:
      "Compact, clean, and modern studio ideal for business travelers, located near Thane station.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
    },
    price: 1900,
    location: "Thane",
    country: "India",
  },
  {
    title: "Coastal Resort in Ganpatipule",
    description:
      "A beachfront resort offering panoramic sea views, spa treatments, and Konkan cuisine.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=60",
    },
    price: 3600,
    location: "Ganpatipule",
    country: "India",
  },
  {
    title: "Rural Getaway in Karjat",
    description:
      "Experience simple village life with fresh air, organic food, and nearby waterfalls.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560184897-5efc8d5ca3a9?auto=format&fit=crop&w=800&q=60",
    },
    price: 2300,
    location: "Karjat",
    country: "India",
  },
  {
    title: "Riverfront Camp in Bhira",
    description:
      "Enjoy starlit nights in luxury tents near the river with adventure sports nearby.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1582979512210-99aa4a171e90?auto=format&fit=crop&w=800&q=60",
    },
    price: 2600,
    location: "Bhira",
    country: "India",
  },
  {
    title: "Artistic Stay in Bandra West",
    description:
      "Creative apartment decorated with local art pieces, located in Mumbai’s most vibrant suburb.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=60",
    },
    price: 4900,
    location: "Mumbai",
    country: "India",
  },
   {
    title: "Hilltop Villa in Lonavala",
    description:
      "Enjoy breathtaking valley views from this private villa surrounded by misty hills. Ideal for families and couples seeking a serene weekend escape.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1597072689227-8888cd6b58c5?auto=format&fit=crop&w=800&q=60" },
    price: 3200,
    location: "Lonavala",
    country: "India",
  },
  {
    title: "Sea Breeze Cottage in Alibaug",
    description:
      "Wake up to the sound of waves in this beachside cottage located minutes away from Alibaug’s pristine beaches.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60" },
    price: 4100,
    location: "Alibaug",
    country: "India",
  },
  {
    title: "Luxury Apartment in South Mumbai",
    description:
      "Stay in the heart of the city with skyline views and modern interiors. Perfect for business trips or luxury vacations.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60" },
    price: 5800,
    location: "Mumbai",
    country: "India",
  },
  {
    title: "Farm Stay near Nashik Vineyards",
    description:
      "Unwind in a countryside farmhouse surrounded by vineyards. Great for wine lovers and those seeking a rustic experience.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=60" },
    price: 2800,
    location: "Nashik",
    country: "India",
  },
  {
    title: "Lakefront Resort in Bhandardara",
    description:
      "Relax by the calm waters of Bhandardara Lake in this peaceful resort. Ideal for stargazing and trekking enthusiasts.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1595433562696-f4b19a3a1e4c?auto=format&fit=crop&w=800&q=60" },
    price: 3400,
    location: "Bhandardara",
    country: "India",
  },
  {
    title: "Mountain Cabin in Mahabaleshwar",
    description:
      "A wooden cabin surrounded by strawberry farms and valleys. Enjoy bonfires and cool breezes all year round.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60" },
    price: 3900,
    location: "Mahabaleshwar",
    country: "India",
  },
  {
    title: "Konkan Seaside Villa in Ratnagiri",
    description:
      "Enjoy sunsets over the Arabian Sea from this coastal villa surrounded by coconut trees.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1505692794403-34d4982f88e8?auto=format&fit=crop&w=800&q=60" },
    price: 4200,
    location: "Ratnagiri",
    country: "India",
  },
  {
    title: "Stylish Loft in Koregaon Park",
    description:
      "Modern and cozy loft located in the heart of Pune’s nightlife district, close to cafés and boutiques.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1600585154154-5a94b00b1f2b?auto=format&fit=crop&w=800&q=60" },
    price: 2700,
    location: "Pune",
    country: "India",
  },
  {
    title: "Treehouse Stay in Igatpuri Hills",
    description:
      "Stay among the treetops with beautiful views of misty mountains. Great for couples and photographers.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36a?auto=format&fit=crop&w=800&q=60" },
    price: 3100,
    location: "Igatpuri",
    country: "India",
  },
  {
    title: "Riverside Cottage in Kolad",
    description:
      "Adventure meets comfort — stay beside the Kundalika River and enjoy rafting and kayaking activities.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1600047509807-ba1e06b2c193?auto=format&fit=crop&w=800&q=60" },
    price: 2500,
    location: "Kolad",
    country: "India",
  },

  // 11-20
  {
    title: "Eco Bamboo Hut in Palghar",
    description:
      "A sustainable retreat built entirely from bamboo, with a nearby organic farm and natural pond.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1600585154517-379b52b2a5b1?auto=format&fit=crop&w=800&q=60" },
    price: 2200,
    location: "Palghar",
    country: "India",
  },
  {
    title: "Royal Heritage Stay in Kolhapur",
    description:
      "Live like royalty in this restored palace featuring antique furniture and traditional Maharashtrian meals.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=60" },
    price: 4400,
    location: "Kolhapur",
    country: "India",
  },
  {
    title: "Luxury Tent in Malshej Ghat",
    description:
      "Camp in style with fully furnished tents offering panoramic views of the Western Ghats.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1614853035986-96d5ad9d0c8c?auto=format&fit=crop&w=800&q=60" },
    price: 2900,
    location: "Malshej Ghat",
    country: "India",
  },
  {
    title: "Forest Lodge near Tadoba National Park",
    description:
      "Perfect for wildlife lovers — enjoy morning safaris and evenings around the bonfire in this jungle lodge.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1551887373-6b7c1de24b2d?auto=format&fit=crop&w=800&q=60" },
    price: 3300,
    location: "Chandrapur",
    country: "India",
  },
  {
    title: "Cliff View Villa in Dapoli",
    description:
      "Overlooking the ocean cliffs, this villa offers unmatched sea views and a private path to the beach.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1617101038296-f3e49fcb0674?auto=format&fit=crop&w=800&q=60" },
    price: 3800,
    location: "Dapoli",
    country: "India",
  },
  {
    title: "Budget Studio near Nagpur Central",
    description:
      "Comfortable stay for solo travelers or students. Close to restaurants and markets in central Nagpur.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=60" },
    price: 1500,
    location: "Nagpur",
    country: "India",
  },
  {
    title: "Heritage Haveli Stay in Aurangabad",
    description:
      "Experience old-world charm in this restored haveli near Ajanta and Ellora caves.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1586374579358-9e8adf7e7abf?auto=format&fit=crop&w=800&q=60" },
    price: 2900,
    location: "Chhatrapati Sambhaji Nagar",
    country: "India",
  },
  {
    title: "Luxury Penthouse in Worli Sea Face",
    description:
      "A modern penthouse with floor-to-ceiling windows offering breathtaking sea views and a private jacuzzi.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=60" },
    price: 6900,
    location: "Mumbai",
    country: "India",
  },
  {
    title: "Countryside Homestay in Satara",
    description:
      "Stay amidst fields and hills in this peaceful homestay with home-cooked Maharashtrian meals.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60" },
    price: 2100,
    location: "Satara",
    country: "India",
  },
  {
    title: "Luxury Resort in Panchgani",
    description:
      "A serene retreat with infinity pool, valley views, and lush gardens, perfect for relaxation.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1551887373-6b7c1de24b2d?auto=format&fit=crop&w=800&q=60" },
    price: 4300,
    location: "Panchgani",
    country: "India",
  },

  // 21-30
  {
    title: "Hill Retreat in Amboli Ghat",
    description:
      "Escape into the misty mountains of Amboli in this nature-friendly stay with waterfalls nearby.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1595594201119-9ecae4049a3b?auto=format&fit=crop&w=800&q=60" },
    price: 2400,
    location: "Amboli",
    country: "India",
  },
  {
    title: "Private Chalet in Mulshi",
    description:
      "A secluded hillside chalet overlooking Mulshi Lake — great for meditation and nature walks.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1600047509807-ba1e06b2c193?auto=format&fit=crop&w=800&q=60" },
    price: 3700,
    location: "Mulshi",
    country: "India",
  },
  {
    title: "Boutique Homestay in Shirdi",
    description:
      "Modern stay near Sai Baba Temple with vegetarian meals and peaceful surroundings.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1600047509807-ba1e06b2c193?auto=format&fit=crop&w=800&q=60" },
    price: 2300,
    location: "Shirdi",
    country: "India",
  },
  {
    title: "Backwater Stay in Tarkarli",
    description:
      "Beautiful cottage by the backwaters near the beach. Enjoy kayaking and dolphin watching.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1551887373-6b7c1de24b2d?auto=format&fit=crop&w=800&q=60" },
    price: 3200,
    location: "Tarkarli",
    country: "India",
  },
  {
    title: "Hill Cottage in Matheran",
    description:
      "A colonial-era cottage surrounded by forests and viewpoints in car-free Matheran.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60" },
    price: 2700,
    location: "Matheran",
    country: "India",
  },
  {
    title: "Urban Studio in Thane",
    description:
      "Compact, clean, and modern studio ideal for business travelers, located near Thane station.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60" },
    price: 1900,
    location: "Thane",
    country: "India",
  },
  {
    title: "Coastal Resort in Ganpatipule",
    description:
      "A beachfront resort offering panoramic sea views, spa treatments, and Konkan cuisine.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=60" },
    price: 3600,
    location: "Ganpatipule",
    country: "India",
  },
  {
    title: "Rural Getaway in Karjat",
    description:
      "Experience simple village life with fresh air, organic food, and nearby waterfalls.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1560184897-5efc8d5ca3a9?auto=format&fit=crop&w=800&q=60" },
    price: 2300,
    location: "Karjat",
    country: "India",
  },
  {
    title: "Riverfront Camp in Bhira",
    description:
      "Enjoy starlit nights in luxury tents near the river with adventure sports nearby.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1582979512210-99aa4a171e90?auto=format&fit=crop&w=800&q=60" },
    price: 2600,
    location: "Bhira",
    country: "India",
  },
  {
    title: "Artistic Stay in Bandra West",
    description:
      "Creative apartment decorated with local art pieces, located in Mumbai’s most vibrant suburb.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=60" },
    price: 4900,
    location: "Mumbai",
    country: "India",
  },
  {
    title: "Luxury Apartment in Koregaon Park, Pune",
    description: "Modern apartment near cafes and nightlife. Ideal for business and leisure stays.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1598928506312-99d6f0ebf20b?auto=format&fit=crop&w=800&q=60" },
    price: 5200,
    location: "Pune",
    country: "India",
  },
  {
    title: "Heritage Mansion in Aurangabad",
    description: "Live like royalty in this 200-year-old mansion with traditional decor and courtyards.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1600585154517-379b52b2a5b1?auto=format&fit=crop&w=800&q=60" },
    price: 4000,
    location: "Chhatrapati Sambhaji Nagar",
    country: "India",
  },
  {
    title: "Beachfront Villa in Alibaug",
    description: "Private villa steps from the beach with sea views, perfect for family vacations.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60" },
    price: 4600,
    location: "Alibaug",
    country: "India",
  },
  {
    title: "Hilltop Cabin in Lonavala",
    description: "Secluded cabin with valley views and nature trails nearby. Ideal for weekend getaways.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1597072689227-8888cd6b58c5?auto=format&fit=crop&w=800&q=60" },
    price: 3100,
    location: "Lonavala",
    country: "India",
  },
  {
    title: "Riverside Cottage in Kolad",
    description: "Perfect for adventure seekers with white water rafting and kayaking nearby.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1600047509807-ba1e06b2c193?auto=format&fit=crop&w=800&q=60" },
    price: 2600,
    location: "Kolad",
    country: "India",
  },
  {
    title: "Seaside Villa in Ratnagiri",
    description: "Beachfront villa with private access to the Arabian Sea and coconut groves.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1505692794403-34d4982f88e8?auto=format&fit=crop&w=800&q=60" },
    price: 4200,
    location: "Ratnagiri",
    country: "India",
  },
  {
    title: "Forest Lodge in Chandrapur",
    description: "Cozy lodge near Tadoba National Park for wildlife enthusiasts.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1551887373-6b7c1de24b2d?auto=format&fit=crop&w=800&q=60" },
    price: 3100,
    location: "Chandrapur",
    country: "India",
  },
  {
    title: "Luxury Penthouse in Worli, Mumbai",
    description: "Penthouse with floor-to-ceiling windows, skyline view, and private jacuzzi.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=60" },
    price: 7000,
    location: "Mumbai",
    country: "India",
  },
  {
    title: "Eco Bamboo Hut in Palghar",
    description: "Sustainable bamboo retreat with natural pond and organic meals.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1600585154517-379b52b2a5b1?auto=format&fit=crop&w=800&q=60" },
    price: 2200,
    location: "Palghar",
    country: "India",
  },
  {
    title: "Luxury Tent Stay in Malshej Ghat",
    description: "Glamorous camping with panoramic valley views, bonfires, and stargazing.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1614853035986-96d5ad9d0c8c?auto=format&fit=crop&w=800&q=60" },
    price: 2800,
    location: "Malshej Ghat",
    country: "India",
  }
];

exports.data = sampleListings;
