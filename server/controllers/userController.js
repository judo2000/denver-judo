import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import sanitize from "mongo-sanitize";

// @desc     Register user
// @route    POST /api/users
// @access   Public
export const registerUser = asyncHandler(async (req, res) => {
  // sanitize user input from req.body
  const firstName = sanitize(req.body.firstName);
  const lastName = sanitize(req.body.lastName);
  const email = sanitize(req.body.email);

  // check to see if the user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    lastLogin: Date.now(),
  });

  if (user) {
    res.status(201).json({
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isAdmin: user.isAdmin,
      lastLogin: user.lastLogin,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});
