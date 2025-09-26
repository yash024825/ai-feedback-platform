import axios from "axios";

// 🔹 Configure Axios instance
const API = axios.create({
  baseURL: "http://localhost:5000/api", // Adjust if backend URL changes
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔹 Feedback API methods
export const fetchFeedbacks = async () => {
  try {
    const res = await API.get("/feedback");
    return res.data;
  } catch (err) {
    console.error("❌ Error fetching feedbacks:", err);
    throw err;
  }
};

export const createFeedback = async (data) => {
  try {
    const res = await API.post("/feedback", data);
    return res.data;
  } catch (err) {
    console.error("❌ Error creating feedback:", err);
    throw err;
  }
};

export const updateFeedback = async (id, data) => {
  try {
    const res = await API.put(`/feedback/${id}`, data);
    return res.data;
  } catch (err) {
    console.error(`❌ Error updating feedback with id ${id}:`, err);
    throw err;
  }
};

export const deleteFeedback = async (id) => {
  try {
    const res = await API.delete(`/feedback/${id}`);
    return res.data;
  } catch (err) {
    console.error(`❌ Error deleting feedback with id ${id}:`, err);
    throw err;
  }
};
