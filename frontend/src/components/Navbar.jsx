import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css"; // we'll add styles here

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      {/* Left: Logo/Title */}
      <div className="nav-left">My-App</div>

      {/* Center: Nav links */}
      <div className="nav-center">
        <NavLink to="/" end className="nav-link">Home</NavLink>
        <NavLink to="/profile" className="nav-link">Profile</NavLink>
        <NavLink to="/feedback" className="nav-link">Feedback</NavLink>
        <NavLink to="/reports" className="nav-link">Reports</NavLink>
      </div>

      {/* Right: Logout */}
      <div className="nav-right">
        <button className="logout-btn" onClick={() => navigate("/logout")}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
