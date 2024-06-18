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
