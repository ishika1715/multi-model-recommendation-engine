import { useState } from "react";
import "./RecommendationForm.css";

function RecommendationForm({ onRecommend }) {

  const [formData, setFormData] = useState({
    project: "Chatbot",
    budget: "Free",
    latency: "Fast",
    context: "8K",
    hardware: "CPU"
  });


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };


  const handleSubmit = () => {

    onRecommend(formData);

  };


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

          <select
            name="project"
            value={formData.project}
            onChange={handleChange}
          >

            <option value="Chatbot">Chatbot</option>
            <option value="Code Generation">Code Generation</option>
            <option value="Document QA">Document QA</option>
            <option value="Content Writing">Content Writing</option>
            <option value="Image Generation">Image Generation</option>

          </select>

        </div>



        <div className="form-group">

          <label>Budget</label>

          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
          >

            <option value="Free">Free</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>

          </select>

        </div>



        <div className="form-group">

          <label>Latency</label>

          <select
            name="latency"
            value={formData.latency}
            onChange={handleChange}
          >

            <option value="Fast">Fast</option>
            <option value="Balanced">Balanced</option>
            <option value="Highest Accuracy">
              Highest Accuracy
            </option>

          </select>

        </div>



        <div className="form-group">

          <label>Context Window</label>

          <select
            name="context"
            value={formData.context}
            onChange={handleChange}
          >

            <option value="8K">8K</option>
            <option value="32K">32K</option>
            <option value="128K">128K</option>
            <option value="1M+">1M+</option>

          </select>

        </div>



        <div className="form-group">

          <label>Hardware</label>

          <select
            name="hardware"
            value={formData.hardware}
            onChange={handleChange}
          >

            <option value="CPU">CPU</option>
            <option value="GPU">GPU</option>
            <option value="Cloud">Cloud</option>

          </select>

        </div>



        <button
          className="recommend-btn"
          onClick={handleSubmit}
        >

          Generate Recommendation

        </button>


      </div>

    </section>
  );
}


export default RecommendationForm;