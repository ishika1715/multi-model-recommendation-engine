import "./About.css";

function About() {
  return (
    <section className="about">

      <div className="about-hero">

        <h1>
          Multi-Model Recommendation Engine
        </h1>

        <p>
          An intelligent AI decision-support platform that helps
          developers select the most suitable AI model based on
          project requirements.
        </p>

      </div>


      <div className="about-grid">

        <div className="about-card">

          <h2>
            Problem
          </h2>

          <p>
            With hundreds of AI models available today, developers
            struggle to choose the right model based on accuracy,
            cost, speed and context requirements.
          </p>

        </div>


        <div className="about-card">

          <h2>
            Solution
          </h2>

          <p>
            Our system analyzes project requirements and recommends
            the most suitable AI models using intelligent ranking
            and multi-criteria evaluation.
          </p>

        </div>


        <div className="about-card">

          <h2>
            Technology Stack
          </h2>

          <p>
            React, Java, Machine Learning algorithms, AI APIs,
            database systems and modern web technologies.
          </p>

        </div>


        <div className="about-card">

          <h2>
            Future Scope
          </h2>

          <p>
            Real-time model comparison, personalized recommendations,
            cost optimization and continuous learning.
          </p>

        </div>


      </div>

    </section>
  );
}

export default About;