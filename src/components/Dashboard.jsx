import "./Dashboard.css";

function Dashboard() {
  return (
    <section className="dashboard">

      <div className="dashboard-header">
        <h2>AI Recommendation Dashboard</h2>
        <p>Monitor AI model performance and recommendation insights.</p>
      </div>

      <div className="stats">

        <div className="card">
          <div className="icon">🤖</div>
          <h3>152</h3>
          <span>Recommendations</span>
        </div>

        <div className="card">
          <div className="icon">⭐</div>
          <h3>18</h3>
          <span>Saved Models</span>
        </div>

        <div className="card">
          <div className="icon">⚡</div>
          <h3>GPT-5.5</h3>
          <span>Most Used Model</span>
        </div>

        <div className="card">
          <div className="icon">📈</div>
          <h3>1.8 s</h3>
          <span>Average Response</span>
        </div>

      </div>

      <div className="dashboard-grid">

        <div className="panel">
          <h3>Recent Recommendations</h3>

          <ul>
            <li>✅ GPT-5.5 → Coding Assistant</li>
            <li>✅ Claude → Research Assistant</li>
            <li>✅ Gemini → Chatbot Development</li>
            <li>✅ Llama → Local AI Project</li>
          </ul>
        </div>

        <div className="panel">
          <h3>Top AI Models</h3>

          <div className="progress">
            <span>GPT-5.5</span>
            <div><div style={{width:"95%"}}></div></div>
          </div>

          <div className="progress">
            <span>Claude</span>
            <div><div style={{width:"82%"}}></div></div>
          </div>

          <div className="progress">
            <span>Gemini</span>
            <div><div style={{width:"75%"}}></div></div>
          </div>

          <div className="progress">
            <span>Llama</span>
            <div><div style={{width:"60%"}}></div></div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Dashboard;