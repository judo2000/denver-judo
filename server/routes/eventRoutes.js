import express from "express";
import {
  createEvent,
  getEventsByMonthAndYear,
} from "../controllers/eventController.js";

const router = express.Router();

router.route("/").post(createEvent).get(getEventsByMonthAndYear);

export default router;
