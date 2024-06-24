import mongoose from "mongoose";

const eventSchema = mongoose.Schema(
  {
    eventType: {
      type: String,
      required: true,
      enum: ["Class", "Clinic", "Tournament", "Rank Test", "Other"],
    },
    eventName: {
      type: String,
      trim: true,
      required: true,
    },
    instructors: {
      type: String,
      trim: true,
    },
    eventDate: {
      type: Date,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
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
    repeats: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);

export default Event;
