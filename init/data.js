const sampleListings = [
  {
    title: "Hilltop Villa in Lonavala",
    description:
      "Enjoy panoramic mountain views from this peaceful villa surrounded by lush greenery. Perfect for a weekend getaway with friends or family.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1597072689227-8888cd6b58c5?auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Lonavala",
    country: "India",
  },
  {
    title: "Beachfront Cottage in Alibaug",
    description:
      "Wake up to the sound of waves in this cozy beachfront cottage located just steps from the Arabian Sea.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1551887373-6b7c1de24b2d?auto=format&fit=crop&w=800&q=60",
    },
    price: 4500,
    location: "Alibaug",
    country: "India",
  },
  {
    title: "Luxury Apartment in South Mumbai",
    description:
      "Stay in the heart of Mumbai in this luxurious apartment with a skyline view and all modern amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
    },
    price: 5500,
    location: "Mumbai",
    country: "India",
  },
  {
    title: "Rustic Farm Stay in Nashik Vineyards",
    description:
      "Experience vineyard life in this rustic farmhouse surrounded by grapes and greenery. Wine tasting available nearby.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Nashik",
    country: "India",
  },
  {
    title: "Lakeview Resort in Bhandardara",
    description:
      "Relax in a serene lakefront resort surrounded by the Sahyadri ranges. Perfect for couples and nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1595433562696-f4b19a3a1e4c?auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Bhandardara",
    country: "India",
  },
  {
    title: "Luxury Homestay in Mahabaleshwar",
    description:
      "Unwind amidst strawberry fields in this luxurious homestay offering scenic valley views and organic meals.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
    },
    price: 3800,
    location: "Mahabaleshwar",
    country: "India",
  },
  {
    title: "Seaside Villa in Ratnagiri",
    description:
      "Enjoy the Konkan coastline at this beautiful seaside villa with a private beach and coconut groves.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505692794403-34d4982f88e8?auto=format&fit=crop&w=800&q=60",
    },
    price: 4200,
    location: "Ratnagiri",
    country: "India",
  },
  {
    title: "Modern Loft in Pune City Center",
    description:
      "Stay close to shopping, cafes, and nightlife in this stylish loft apartment located in Koregaon Park, Pune.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154154-5a94b00b1f2b?auto=format&fit=crop&w=800&q=60",
    },
    price: 2600,
    location: "Pune",
    country: "India",
  },
  {
    title: "Treehouse Retreat in Igatpuri",
    description:
      "Live close to nature in this unique treehouse with a scenic view of the misty hills of Igatpuri.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36a?auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Igatpuri",
    country: "India",
  },
  {
    title: "Riverside Cottage in Kolad",
    description:
      "A peaceful riverside cottage perfect for adventure lovers — enjoy white water rafting, kayaking, and camping nearby.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600047509807-ba1e06b2c193?auto=format&fit=crop&w=800&q=60",
    },
    price: 2400,
    location: "Kolad",
    country: "India",
  },
  {
    title: "Cliffside Villa in Dapoli",
    description:
      "Breathtaking sea views await at this cliffside villa offering modern comforts and private access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1617101038296-f3e49fcb0674?auto=format&fit=crop&w=800&q=60",
    },
    price: 3700,
    location: "Dapoli",
    country: "India",
  },
  {
    title: "Eco-Friendly Bamboo Cottage in Palghar",
    description:
      "Stay in a sustainable bamboo cottage surrounded by forest, complete with organic meals and a natural pond.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154517-379b52b2a5b1?auto=format&fit=crop&w=800&q=60",
    },
    price: 2100,
    location: "Palghar",
    country: "India",
  },
  {
    title: "Heritage Mansion in Kolhapur",
    description:
      "Live in royal style in this 150-year-old heritage mansion featuring antique décor and traditional Maharashtrian meals.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Kolhapur",
    country: "India",
  },
  {
    title: "Luxury Tent Stay in Malshej Ghat",
    description:
      "Glamp in style with luxury tents offering stunning valley views, campfires, and stargazing at night.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=60",
    },
    price: 2700,
    location: "Malshej Ghat",
    country: "India",
  },
  {
    title: "Forest Bungalow in Tadoba",
    description:
      "A cozy forest-side bungalow near Tadoba National Park — perfect for wildlife lovers and adventure seekers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
    },
    price: 3100,
    location: "Chandrapur",
    country: "India",
  },
];
exports.data = sampleListings;