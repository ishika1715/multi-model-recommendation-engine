import "./Working.css";

function HowItWorks() {
  return (
    <section className="how-it-works" id="how">
      <h2>How It Works</h2>
      <p className="subtitle">
        Get the best AI model architecture in four simple steps.
      </p>

      <div className="steps">

        <div className="step-card">
          <div className="step-number">1</div>
          <h3>Describe Your Project</h3>
          <p>
            Enter your project type, budget, latency requirements and hardware.
          </p>
        </div>

        <div className="arrow">➜</div>

        <div className="step-card">
          <div className="step-number">2</div>
          <h3>AI Analysis</h3>
          <p>
            Our recommendation engine analyzes hundreds of AI models.
          </p>
        </div>

        <div className="arrow">➜</div>

        <div className="step-card">
          <div className="step-number">3</div>
          <h3>Compare Models</h3>
          <p>
            Compare models using pricing, speed, context window and accuracy.
          </p>
        </div>

        <div className="arrow">➜</div>

        <div className="step-card">
          <div className="step-number">4</div>
          <h3>Get AI Roadmap</h3>
          <p>
            Receive the best multi-model architecture for your application.
          </p>
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;