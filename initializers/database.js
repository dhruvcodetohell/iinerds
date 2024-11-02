// Initialize your db here
import mongoose from "mongoose";
import { mongoConfig } from "../config/db.js";

mongoose.set("strictQuery", false); // using this for avoid strict matching

export const connectDb = async () => {
  try {
    await mongoose.connect(mongoConfig.mongoURI, mongoConfig.options);
  } catch (e) {

  }
};

// connection events to listen
mongoose.connection.on("connected", () => {
  console.log("Database connected ");
});
mongoose.connection.on("disconnected", () => {
  console.log("Database disconnected ");
});

mongoose.connection.on("error", (e) => {
  console.log("error connecting database", e);
});
