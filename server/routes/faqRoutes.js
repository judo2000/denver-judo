import express from "express";
import { isAdmin, protect } from "../middleware/authMiddleware.js";
import { createFAQ, getFAQs } from "../controllers/faqController.js";

const router = express.Router();

router.route("/").post(protect, isAdmin, createFAQ).get(getFAQs);

export default router;
