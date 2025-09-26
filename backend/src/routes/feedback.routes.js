import express from "express";
import { submitFeedback, getFeedback, deleteFeedback, updateFeedback} from "../controllers/feedback.controller.js";

console.log("✅ feedback.routes.js loaded"); // Debug log

const router = express.Router();

router.post("/", submitFeedback);
router.get("/", getFeedback);
router.delete("/:id", deleteFeedback);
router.put("/:id", updateFeedback); 

export default router;
