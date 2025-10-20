

const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// Configure Cloudinary with your credentials
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

// Configure multer storage to Cloudinary
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "Roomora", // folder in Cloudinary
    allowed_formats: ["jpeg", "png", "jpg", "webp"]
  }
});

module.exports = { cloudinary, storage };
