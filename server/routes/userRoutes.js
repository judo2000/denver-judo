import express from "express";
import { isAdmin, protect } from "../middleware/authMiddleware.js";
import { registerUser } from "../controllers/userController.js";

const router = express.Router();

router.route("/").post(registerUser);

export default router;
