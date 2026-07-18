import "./RecommendationForm.css";

function RecommendationForm() {
  return (
    <section className="recommendation">
      <h2>Find Your Perfect AI Model</h2>
      <p>
        Enter your project requirements and get the best AI model
        recommendation.
      </p>

      <div className="form-container">

        <div className="form-group">
          <label>Project Type</label>
          <select>
            <option>Chatbot</option>
            <option>Code Generation</option>
            <option>Document QA</option>
            <option>Content Writing</option>
            <option>Image Generation</option>
          </select>
        </div>

        <div className="form-group">
          <label>Budget</label>
          <select>
            <option>Free</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <div className="form-group">
          <label>Latency</label>
          <select>
            <option>Fast</option>
            <option>Balanced</option>
            <option>Highest Accuracy</option>
          </select>
        </div>

        <div className="form-group">
          <label>Context Window</label>
          <select>
            <option>8K</option>
            <option>32K</option>
            <option>128K</option>
            <option>1M+</option>
          </select>
        </div>

        <div className="form-group">
          <label>Hardware</label>
          <select>
            <option>CPU</option>
            <option>GPU</option>
            <option>Cloud</option>
          </select>
        </div>

        <button className="recommend-btn">
          Generate Recommendation
        </button>

      </div>
    </section>
  );
}

export default RecommendationForm;