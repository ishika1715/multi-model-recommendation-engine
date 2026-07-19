import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        AI Model Engine
      </div>


      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/recommendation">
            Recommendation
          </Link>
        </li>

        <li>
          <Link to="/compare">
            Compare
          </Link>
        </li>

        <li>
          <Link to="/dashboard">
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/about">
            About
          </Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;