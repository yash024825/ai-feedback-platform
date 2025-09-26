import Feedback from "../models/feedback.model.js";
import { analyzeFeedback } from "../services/nlp.service.js";

// @desc    Submit feedback
// @route   POST /api/feedback
export const submitFeedback = async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Feedback message is required" });
    }

    // Analyze sentiment (NLP)
    const sentiment = analyzeFeedback(message);

    const feedback = await Feedback.create({ message, sentiment });

    res.status(201).json(feedback);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @desc    Get all feedback
// @route   GET /api/feedback
export const getFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.findById(req.params.id);
    if (!feedback) {
      return res.status(404).json({ error: "Feedback not found" });
    }

    await feedback.deleteOne();
    res.json({ message: "Feedback deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateFeedback = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Feedback message is required" });
    }

    const feedback = await Feedback.findById(req.params.id);
    if (!feedback) {
      return res.status(404).json({ error: "Feedback not found" });
    }

    // Update message & re-run sentiment analysis
    feedback.message = message;
    feedback.sentiment = analyzeFeedback(message);

    const updatedFeedback = await feedback.save();
    res.json(updatedFeedback);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
