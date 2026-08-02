import "./About.css";

function About() {
  return (
    <section className="about">

      <div className="about-hero">

        <h1>Multi-Model Recommendation Engine</h1>

        <p>
          An intelligent AI-powered platform that helps developers,
          researchers, and businesses choose the most suitable AI
          model based on project requirements, performance, cost,
          and deployment preferences.
        </p>

      </div>

      <div className="about-grid">

        <div className="about-card">

          <h2>🎯 Problem Statement</h2>

          <p>
            With hundreds of AI models available today, selecting
            the right one has become challenging. Developers often
            struggle to compare pricing, accuracy, latency,
            context window, and deployment options.
          </p>

        </div>

        <div className="about-card">

          <h2>💡 Our Solution</h2>

          <p>
            Our recommendation engine analyzes user requirements
            and intelligently recommends the best AI models using
            multiple evaluation parameters including cost,
            performance, speed, and compatibility.
          </p>

        </div>

        <div className="about-card">

          <h2>🛠 Technology Stack</h2>

          <p>
            React.js, Java, Machine Learning, AI APIs,
            REST APIs, Modern CSS, and Intelligent
            Recommendation Algorithms.
          </p>

        </div>

        <div className="about-card">

          <h2>🚀 Future Scope</h2>

          <p>
            We plan to integrate real-time AI benchmarks,
            personalized recommendations, model comparison,
            API pricing updates, and interactive analytics
            dashboards.
          </p>

        </div>

      </div>

    </section>
  );
}

export default About;