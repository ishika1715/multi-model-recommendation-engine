import "./RecommendationResult.css";

function RecommendationResult() {
  return (
    <section className="result">
      <h2>Your Recommended AI Stack</h2>
      <p>Based on your project requirements.</p>

      <div className="result-container">

        <div className="result-card">
          <h3>🧠 GPT-5.5</h3>
          <span className="tag">Primary Model</span>

          <p>
            Excellent reasoning and coding capabilities.
          </p>

          <div className="score">
            Match Score <strong>98%</strong>
          </div>
        </div>

        <div className="result-card">
          <h3>⚡ Gemini Flash</h3>
          <span className="tag secondary">
            Fast Response
          </span>

          <p>
            Best for lightweight requests and quick replies.
          </p>

          <div className="score">
            Match Score <strong>92%</strong>
          </div>
        </div>

        <div className="result-card">
          <h3>📖 Llama 4</h3>
          <span className="tag open">
            Open Source
          </span>

          <p>
            Deploy locally when privacy is important.
          </p>

          <div className="score">
            Match Score <strong>88%</strong>
          </div>
        </div>

      </div>
    </section>
  );
}

export default RecommendationResult;