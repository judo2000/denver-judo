import asyncHandler from "../middleware/asyncHandler.js";
import FAQ from "../models/FAQ.js";
import sanitize from "mongo-sanitize";

// @desc     Create FAQ
// @route    POST /api/faq
// @access   Private
export const createFAQ = asyncHandler(async (req, res) => {
  const { question, answer } = sanitize(req.body);

  const newFaq = await FAQ.create({
    question,
    answer,
  });

  if (newFaq) {
    res.status(201).json({ message: "FAQ created successfully!" });
  }
});

export const getFAQs = asyncHandler(async (req, res) => {
  const faqs = await FAQ.find();

  if (faqs) {
    res.status(200).json({ faqs });
  } else {
    res.status(404);
    throw new Error("No FAQ's found.");
  }
});
