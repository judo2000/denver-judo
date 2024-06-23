import mongoose from "mongoose";

const eventSchema = mongoose.Schema(
  {
    eventName: {
      type: String,
      trim: true,
      required: true,
    },
    instructors: {
      type: String,
      trim: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
      required: true,
    },
    shortDesc: {
      type: String,
      trim: true,
      required: true,
    },
    longDesc: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);

export default Event;
