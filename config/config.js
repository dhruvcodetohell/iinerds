// In this file we store our all config information
import dotenv from "dotenv";
// Initialize env variables
dotenv.config();
export const MONGO_DB_URI = process.env.MONGO_DB_URI;
export const BASE_URL = process.env.BASE_URL;
export const PORT = process.env.PORT || 8000;
