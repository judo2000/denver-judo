import express from "express";
import {
  createEvent,
  getEventsByMonthAndYear,
} from "../controllers/eventController.js";

const router = express.Router();

router.route("/").post(createEvent);
router.route("/:year/:month").get(getEventsByMonthAndYear);

export default router;
