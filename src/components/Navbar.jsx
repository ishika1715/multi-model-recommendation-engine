import { NavLink } from "react-router-dom";
import { useTheme } from "./context/ThemeContext";
import "./Navbar.css";

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className={`navbar ${darkMode ? "dark" : ""}`}>
      <div className="logo">
        AI Model Engine
      </div>

      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/recommendation">Recommendation</NavLink>
        </li>

        <li>
          <NavLink to="/compare">Compare</NavLink>
        </li>

        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>

        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>

      <button
        className="theme-btn"
        onClick={toggleTheme}
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}

export default Navbar;