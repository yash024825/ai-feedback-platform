import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // ✅ import CORS
import connectDB from "./config/db.js";
import feedbackRoutes from "./routes/feedback.routes.js";

dotenv.config();
connectDB();

const app = express();

// ✅ Enable CORS for frontend
app.use(
  cors({
    origin: "http://localhost:5173", // change to 3000 if CRA
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

// ✅ Health check route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Routes
app.use("/api/feedback", feedbackRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
