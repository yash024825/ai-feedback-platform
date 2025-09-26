import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background:
          "linear-gradient(to right, #e0c3fc, #8ec5fc)", // soft gradient like screenshot
      }}
    >
      {/* Navbar */}
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem 2rem",
          backgroundColor: "white",
          boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
        }}
      >
      </header>

      {/* Hero Section */}
      <main
        style={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.3)",
            backdropFilter: "blur(12px)",
            padding: "3rem",
            borderRadius: "20px",
            boxShadow: "0 6px 20px rgba(5, 1, 1, 0.1)",
            textAlign: "center",
            maxWidth: "500px",
          }}
        >
          <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>🔗</div>
          <h2 style={{ fontSize: "2rem", fontWeight: "700", color: "white" }}>
            My-App
          </h2>
          <p
            style={{
              marginTop: "1rem",
              marginBottom: "2rem",
              fontSize: "1.1rem",
              color: "white",
              opacity: 0.9,
            }}
          >
            Shorten. Share. Track. Simplify your links in one click.
          </p>
          <button
            style={{
              padding: "12px 28px",
              border: "none",
              borderRadius: "30px",
              background: "linear-gradient(to right, #9333ea, #3b82f6)",
              color: "white",
              fontSize: "1rem",
              fontWeight: "500",
              cursor: "pointer",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
            onClick={() => navigate("/profile")} // navigate to profile on click
          >
            Get Started
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
