import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import sanitize from "mongo-sanitize";
import generateToken from "../utils/generateToken.js";

// @desc     Register user
// @route    POST /api/users
// @access   Public
export const registerUser = asyncHandler(async (req, res) => {
  // sanitize user input from req.body
  const firstName = sanitize(req.body.firstName);
  const lastName = sanitize(req.body.lastName);
  const email = sanitize(req.body.email);
  const password = sanitize(req.body.password);

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
    password,
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

// @desc     Auth User and get tomen
// @route    POST /api/users/login
// @access   Public
export const authUser = asyncHandler(async (req, res) => {
  const email = sanitize(req.body.email);
  const password = sanitize(req.body.password);

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    const lastLoggedIn = await User.findOneAndUpdate(
      { email: req.body.email },
      { lastLogin: Date.now() }
    );
    console.log(lastLoggedIn);
    res.status(200).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password.");
  }
});
