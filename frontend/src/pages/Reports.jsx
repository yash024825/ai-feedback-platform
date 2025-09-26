import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Card from "../components/Card";
import { fetchFeedbacks } from "../api";

const Reports = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const newFeedback = location.state?.feedback; // feedback passed from Feedback.jsx

  useEffect(() => {
    const loadFeedbacks = async () => {
      try {
        const data = await fetchFeedbacks();
        setFeedbacks(data);
      } catch (error) {
        console.error("❌ Error fetching feedbacks:", error);
      }
    };
    loadFeedbacks();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #8ec5fc, #e0c3fc)",
        padding: "2rem",
      }}
    >
      <Card
        style={{
          padding: "2rem 3rem",
          borderRadius: "20px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          background: "white",
          width: "700px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
          Feedback Reports
        </h2>

        {feedbacks.length === 0 ? (
          <p style={{ textAlign: "center" }}>No feedback available yet.</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {feedbacks.map((item) => (
              <li
                key={item._id}
                style={{
                  marginBottom: "1rem",
                  padding: "1rem",
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  background:
                    newFeedback && newFeedback._id === item._id
                      ? "#d1fae5" // ✅ highlight new feedback
                      : "#f9f9f9",
                }}
              >
                <p>
                  <strong>Message:</strong> {item.message}
                </p>
                <p>
                  <strong>Sentiment:</strong> {item.sentiment}
                </p>
                <p>
                  <small>
                    Created: {new Date(item.createdAt).toLocaleString()}
                  </small>
                </p>
              </li>
            ))}
          </ul>
        )}

        <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <button
            onClick={() => navigate("/feedback")}
            style={{
              padding: "10px 20px",
              border: "none",
              borderRadius: "8px",
              background: "linear-gradient(to right, #3b82f6, #9333ea)",
              color: "white",
              cursor: "pointer",
              fontWeight: "500",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
          >
            Back to Feedback
          </button>
        </div>
      </Card>
    </div>
  );
};

export default Reports;
