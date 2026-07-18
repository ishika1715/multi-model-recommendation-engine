import "./ModelComparison.css";

function ModelComparison() {
  return (
    <section className="comparison">
      <h2>Compare AI Models</h2>
      <p>Quickly compare performance and pricing.</p>

      <table className="comparison-table">
        <thead>
          <tr>
            <th>Model</th>
            <th>Accuracy</th>
            <th>Speed</th>
            <th>Cost</th>
            <th>Context</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>GPT-5.5</td>
            <td>⭐⭐⭐⭐⭐</td>
            <td>Fast</td>
            <td>$$$$</td>
            <td>128K</td>
          </tr>

          <tr>
            <td>Gemini Flash</td>
            <td>⭐⭐⭐⭐</td>
            <td>Very Fast</td>
            <td>$$</td>
            <td>1M</td>
          </tr>

          <tr>
            <td>Llama 4</td>
            <td>⭐⭐⭐⭐</td>
            <td>Fast</td>
            <td>Free</td>
            <td>128K</td>
          </tr>

          <tr>
            <td>Claude</td>
            <td>⭐⭐⭐⭐⭐</td>
            <td>Fast</td>
            <td>$$$</td>
            <td>200K</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default ModelComparison;