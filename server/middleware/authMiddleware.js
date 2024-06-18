import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../models/userModel.js";

// Protect routes
export // Protect routes
const protect = asyncHandler(async (req, res, next) => {
  let token;

  // read jwt from the cookie
  token = req.cookies.jwt;
  console.log(token);
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized - token failed");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized - no token");
  }
});

export const isAdmin = (req, res, next) => {
  console.log("isAdmin ", req.user.isAdmin);
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as admin");
  }
};
