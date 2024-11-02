//Controller for url routes

import { nanoid } from "nanoid";
import errorMessages from "../json/errorMessages.js";
import Url from "../models/Url.js";
import { BASE_URL } from "../config/config.js";

export const urlGenerator = async (req, res) => {
  const { orignalUrl } = req.body;
  if (!orignalUrl) return res.status(400).send(errorMessages.missingOrignalUrl);
  let code = nanoid(5); // generating unique code each time
  try {
    let url = await Url.findOne({ orignalUrl });
    let shortUrl = `${BASE_URL}/${code}`; // appending code with base url to generate a short urlS
    if (url) return res.status(200).send(url);
    url = new Url({ orignalUrl, shortUrl, code });
    await url.save().catch((e) => {
      console.log(errorMessages.errorSavingurl);
    });
    res.status(200).send(url);
  } catch (e) {
    res.status(500).send(errorMessages.internalServerError);
  }
};

export const redirectToOrignalUrl = async (req, res) => {
  try {
    //find url associated with code and redirect to orignal url
    let url = await Url.findOne({ code: req.params.code });
    if (!url) return res.status(400).send(errorMessages.noUrlFound);
    if (url) return res.redirect(url.orignalUrl);
  } catch (e) {
    res.status(500).send(errorMessages.internalServerError);
  }
};
