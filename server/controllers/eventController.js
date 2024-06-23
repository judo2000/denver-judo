import asyncHandler from "../middleware/asyncHandler.js";
import Event from "../models/eventModel.js";
import sanitize from "mongo-sanitize";

// @desc     Create Event
// @route    POST /api/events
// @access   Private
export const createEvent = asyncHandler(async (req, res) => {
  const {
    eventName,
    startDate,
    startTime,
    endTime,
    instructors,
    shortDesc,
    longDesc,
  } = sanitize(req.body);

  const event = await Event.create({
    eventName,
    instructors,
    startDate,
    startTime,
    endTime,
    shortDesc,
    longDesc,
  });

  if (event) {
    res.status(201).json(event);
  } else {
    throw new Error("Something went wrong");
  }
});
