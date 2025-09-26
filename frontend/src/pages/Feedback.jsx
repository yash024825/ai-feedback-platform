import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { createFeedback } from "../api";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (feedback.trim() === "") {
      alert("Please enter feedback before submitting.");
      return;
    }

    try {
      const savedFeedback = await createFeedback({ message: feedback }); // backend response
      console.log("✅ Feedback saved:", savedFeedback);

      // Navigate to reports page, pass new feedback
      navigate("/reports", { state: { feedback: savedFeedback } });
    } catch (error) {
      console.error("❌ Error saving feedback:", error);
      alert("Failed to save feedback. Please try again.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #e0c3fc, #8ec5fc)",
      }}
    >
      <Card
        style={{
          padding: "2rem 3rem",
          borderRadius: "20px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          background: "white",
          width: "400px",
        }}
      >
        <h2 style={{ marginBottom: "1rem", color: "#333", textAlign: "center" }}>
          Feedback Form
        </h2>

        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Enter your feedback here..."
          style={{
            width: "100%",
            height: "100px",
            marginBottom: "1rem",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            resize: "none",
          }}
        />

        <div style={{ textAlign: "center" }}>
          <button
            onClick={handleSubmit}
            style={{
              padding: "10px 20px",
              border: "none",
              borderRadius: "8px",
              background: "linear-gradient(to right, #9333ea, #3b82f6)",
              color: "white",
              cursor: "pointer",
              fontWeight: "500",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
          >
            Submit
          </button>
        </div>
      </Card>
    </div>
  );
};

export default Feedback;
