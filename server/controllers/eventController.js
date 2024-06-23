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

// @desc     Get events
// @route    GET /api/events
// @access   Public
export const getEventsByMonthAndYear = asyncHandler(async (req, res) => {
  const { month, year } = sanitize(req.body);

  const events = await Event.find();

  const myEvents = [];
  events.map((event) => {
    const dateString = event.startDate.toString().split(" ");

    if (dateString[3] === year && dateString[1] === month) {
      myEvents.push(event);
    }
  });

  res.status(200).json(myEvents);
});
