// components/Card.jsx
const Card = ({ children }) => {
  return (
    <div
      style={{
        background: "white",
        padding: "2.5rem",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        textAlign: "center",
        minWidth: "350px",
        maxWidth: "600px",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
