import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import path from "path";
import colors from "colors";
// routes
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const port = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/dist/index.html"));
});

app.listen(port, () =>
  console.log(`Server running on port ${port}`.magenta.bold)
);
