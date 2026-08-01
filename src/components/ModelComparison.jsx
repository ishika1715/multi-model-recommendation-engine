import "./ModelComparison.css";

const models = [
  {
    name: "GPT-5.5",
    company: "OpenAI",
    accuracy: "⭐⭐⭐⭐⭐",
    speed: "Fast",
    cost: "$$$$",
    context: "128K",
    best: "Coding & Reasoning",
    color: "blue"
  },
  {
    name: "Claude",
    company: "Anthropic",
    accuracy: "⭐⭐⭐⭐⭐",
    speed: "Fast",
    cost: "$$$",
    context: "200K",
    best: "Documents",
    color: "purple"
  },
  {
    name: "Gemini Flash",
    company: "Google",
    accuracy: "⭐⭐⭐⭐",
    speed: "Very Fast",
    cost: "$$",
    context: "1M",
    best: "Long Context",
    color: "green"
  },
  {
    name: "Groq",
    company: "Groq",
    accuracy: "⭐⭐⭐",
    speed: "Ultra Fast",
    cost: "$",
    context: "128K",
    best: "Low Latency",
    color: "orange"
  },
  {
    name: "Llama 4",
    company: "Meta",
    accuracy: "⭐⭐⭐⭐",
    speed: "Fast",
    cost: "Free",
    context: "128K",
    best: "Open Source",
    color: "red"
  }
];

function ModelComparison() {
  return (
    <section className="comparison">

      <h2>Compare AI Models</h2>

      <p>
        Compare leading AI models based on speed, cost, accuracy,
        context window and ideal use case.
      </p>

      <div className="table-wrapper">

        <table className="comparison-table">

          <thead>

            <tr>

              <th>Model</th>
              <th>Provider</th>
              <th>Accuracy</th>
              <th>Speed</th>
              <th>Cost</th>
              <th>Context</th>
              <th>Best For</th>

            </tr>

          </thead>

          <tbody>

            {models.map((model,index)=>(

              <tr key={index}>

                <td>
                  <strong>{model.name}</strong>
                </td>

                <td>{model.company}</td>

                <td>{model.accuracy}</td>

                <td>{model.speed}</td>

                <td>{model.cost}</td>

                <td>{model.context}</td>

                <td>

                  <span className={`badge ${model.color}`}>
                    {model.best}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
}

export default ModelComparison;