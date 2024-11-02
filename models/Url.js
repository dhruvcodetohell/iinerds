//schema file for url model
import mongoose from "mongoose";

const urlSchema = mongoose.Schema({
  orignalUrl: { type: String, required: true },
  shortUrl: { type: String, required: true },

  code: { type: String, required: true },// this is short code which we will return to client 
  date: { type: Date, default: Date.now() },
});

export  default mongoose.model("urls",urlSchema)
