//Url Routes

import express from "express";
import {
  redirectToOrignalUrl,
  urlGenerator,
} from "../controllers/urlController.js";
const router = express.Router();

router.post("/generateUrl", urlGenerator);
router.get("/:code", redirectToOrignalUrl);

export default router;


// code completed , thanks 