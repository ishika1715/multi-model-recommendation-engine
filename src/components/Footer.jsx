import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h2>Multi-Model Recommendation Engine</h2>
          <p>
            Helping developers discover the best AI models
            based on their project requirements.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Recommendation</li>
            <li>Compare Models</li>
            <li>Dashboard</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p>Email</p>
          <span>support@aimodel.com</span>

          <p>Version</p>
          <span>v1.0</span>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Multi-Model Recommendation Engine | All Rights Reserved
      </div>

    </footer>
  );
}

export default Footer;