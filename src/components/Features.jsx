import "./Features.css";

function Features() {
  return (
    <section className="features">
      <h2>Why Choose Our Platform?</h2>

      <div className="feature-container">

        <div className="feature-card">
          <div className="icon">🤖</div>
          <h3>Smart AI Recommendations</h3>
          <p>
            Receive personalized AI model recommendations based on your project requirements.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon">⚡</div>
          <h3>Advanced Model Comparison</h3>
          <p>
            Compare AI models using latency, pricing, accuracy and hardware compatibility.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon">🗺️</div>
          <h3>AI Architecture Roadmap</h3>
          <p>
            Generate an optimized multi-model AI workflow for your application automatically.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Features;