import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        AI Model Recommender
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Features</li>
        <li>Models</li>
        <li>About</li>
      </ul>

    </nav>
  );
}

export default Navbar;