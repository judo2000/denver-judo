import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import path from "path";
import colors from "colors";
// routes
import userRoutes from "./routes/userRoutes.js";
import contentRoutes from "./routes/contentRoutes.js";
dotenv.config();

const port = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use routes
app.use("/api/users", userRoutes);
app.use("/api/content", contentRoutes);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/dist/index.html"));
});

app.listen(port, () =>
  console.log(`Server running on port ${port}`.magenta.bold)
);
