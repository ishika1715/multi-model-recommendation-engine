import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="badge">
        🚀 AI Powered Recommendation System
      </div>

      <h1>
        Find the Perfect AI Model
        <br />
        For Your Project
      </h1>

      <p>
        Compare hundreds of AI models based on budget,
        speed, latency, context window,
        hardware and project requirements.
      </p>

      <div className="hero-buttons">

        <button className="btn-primary">
          Get Started
        </button>

        <button className="btn-secondary">
          Explore Models
        </button>

      </div>

    </section>
  );
}

export default Hero;