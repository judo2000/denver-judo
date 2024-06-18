import mongoose from "mongoose";

const faqSchema = mongoose.Schema({
  question: {
    type: String,
    required: true,
    trim: true,
  },
  answer: {
    type: String,
    required: true,
    trim: true,
  },
  open: {
    type: Boolean,
    default: false,
  },
});

const FAQ = mongoose.model("FAQ", faqSchema);

export default FAQ;
