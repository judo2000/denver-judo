import express from "express";
import {
  createContent,
  getContentByPageName,
} from "../controllers/contentController.js";

const router = express.Router();

router.route("/").post(createContent);
router.route("/:page").get(getContentByPageName);

export default router;
