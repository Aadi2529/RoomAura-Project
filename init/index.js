if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "../.env" });
}

const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("./data.js");

const db_url = process.env.ATLAS_URL;

async function main() {
  console.log("Data INIT");
  await mongoose.connect(db_url);
  console.log("✅ Connected to MongoDB Atlas");
}

const seedDB = async () => {
  await Listing.deleteMany({});
  console.log("🗑️ Deleted old listings");

  const listings = initData.data.map((obj) => ({
    ...obj,
    owner: "68f7a8ca3614a71d77a40faf" // Replace with your actual user ID
  }));

  await Listing.insertMany(listings);
  console.log("🌱 Data inserted successfully!");
};

main()
  .then(() => seedDB())
  .then(() => mongoose.connection.close())
  .catch((err) => console.log("❌ Error:", err));
