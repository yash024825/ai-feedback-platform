import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    message: { type: String, required: true },
    sentiment: { type: String }, // optional (positive/negative/neutral)
  },
  { timestamps: true }
);

const Feedback = mongoose.model("Feedback", feedbackSchema);
export default Feedback;
