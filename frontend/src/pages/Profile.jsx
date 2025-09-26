import { useNavigate } from "react-router-dom";
import Card from "../components/card";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #e0c3fc, #8ec5fc)", // match Home style
      }}
    >
      <Card
        style={{
          background: "rgba(255, 255, 255, 0.25)", // glassy background
          backdropFilter: "blur(12px)",
          padding: "2rem 3rem",
          borderRadius: "20px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          cursor: "pointer", // show pointer for clickable
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
        onClick={() => navigate("/feedback")} // ✅ navigate to feedback page
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.03)";
          e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
        }}
      >
        <h2 style={{ marginBottom: "1rem", color: "#6a0dad", textAlign: "center" }}>
          User Profile
        </h2>
        <div style={{ lineHeight: "1.8", color: "#333", textAlign: "center" }}>
          <p><strong style={{ color: "#9333ea" }}>Name:</strong> Tatikonda Yeshwanth</p>
          <p><strong style={{ color: "#9333ea" }}>Email:</strong> tatikonda2005@gmail.com</p>
          <p><strong style={{ color: "#9333ea" }}>Role:</strong> Student</p>
          <p><strong style={{ color: "#9333ea" }}>Batch:</strong> Batch A</p>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
