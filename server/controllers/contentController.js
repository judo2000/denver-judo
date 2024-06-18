import asyncHandler from "../middleware/asyncHandler.js";
import Content from "../models/contentModel.js";
import sanitize from "mongo-sanitize";

// @desc     Create Content
// @route    POST /api/content
// @access   Private
export const createContent = asyncHandler(async (req, res) => {
  const { page, section, contentHeading, contentText } = sanitize(req.body);

  const content = await Content.create({
    page,
    section,
    contentHeading,
    contentText,
  });

  if (content) {
    res.status(201).json({ message: "Page created successfully" });
  } else {
    res.status(400);
    throw new Error("Could not create the page.");
  }
});

// @desc     Get page content
// @route    GET /api/content
// @route    public
export const getContentByPageName = asyncHandler(async (req, res) => {
  const { page } = sanitize(req.params);

  const content = await Content.find({ page: page });

  if (content) {
    res.status(200).json({ content });
  } else {
    throw new Error("No page with that name found");
  }
});
