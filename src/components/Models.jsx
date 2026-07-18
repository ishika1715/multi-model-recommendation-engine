import "./Models.css";

function Models() {

const models = [
  "OpenAI",
  "Claude",
  "Gemini",
  "Llama",
  "DeepSeek",
  "Mistral",
  "Groq",
  "Qwen"
];

return (
<section className="models">

<h2>Supported AI Models</h2>

<p>
Explore popular AI models that our recommendation engine can analyze.
</p>

<div className="model-grid">

{models.map((model,index)=>(

<div className="model-card" key={index}>

<h3>{model}</h3>

<span>Available</span>

</div>

))}

</div>

</section>

);

}

export default Models;