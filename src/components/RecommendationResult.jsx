import "./RecommendationResult.css";

function RecommendationResult({ data }) {

  const defaultModels = [

    {
      name: "GPT-5.5",
      icon: "🧠",
      tag: "Primary Model",
      description: "Excellent reasoning and coding capabilities.",
      score: "98%"
    },

    {
      name: "Gemini Flash",
      icon: "⚡",
      tag: "Fast Response",
      description: "Best for lightweight requests and quick replies.",
      score: "92%"
    },

    {
      name: "Groq",
      icon: "🚀",
      tag: "Ultra Fast",
      description: "High-speed inference for low latency applications.",
      score: "90%"
    }

  ];

  let models = defaultModels;

  if (data) {

    models = [

      data,

      {
        name: "Gemini Flash",
        icon: "⚡",
        tag: "Alternative",
        description: "Balanced AI model.",
        score: "92%"
      },

      {
        name: "Llama 4",
        icon: "📖",
        tag: "Open Source",
        description: "Deploy locally when privacy is important.",
        score: "88%"
      }

    ];

  }

  return (

    <section className="result">

      <h2>Your Recommended AI Stack</h2>

      <p>Based on your project requirements.</p>

      <div className="result-container">

        {models.map((model, index) => (

          <div className="result-card" key={index}>

            <h3>
              {model.icon} {model.name}
            </h3>

            <span className="tag">
              {model.tag}
            </span>

            <p>
              {model.description}
            </p>

            <div className="score">
              Match Score <strong>{model.score}</strong>
            </div>

          </div>

        ))}

      </div>

    </section>

  );
}

export default RecommendationResult;