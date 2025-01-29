import { v2 as cloudinary } from "cloudinary";
import { config } from "dotenv";
config();
cloudinary.config({
  cloud_name: process.env.CLOUDIANRY_NAME,
  api_key: process.env.CLOUDIANRY_API_KEY,
  api_secret: process.env.CLOUDIANRY_API_SECRET,
});
export default cloudinary;
