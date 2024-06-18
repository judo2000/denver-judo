import mongoose from "mongoose";

const contentSchema = mongoose.Schema(
  {
    page: {
      type: String,
      required: true,
      trim: true,
    },
    section: {
      type: String,
      required: true,
      trip: true,
    },
    contentHead: {
      type: String,
      trim: true,
    },
    contentText: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Content = mongoose.model("Content", contentSchema);

export default Content;
