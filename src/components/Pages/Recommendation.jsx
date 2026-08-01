import { useState } from "react";
import RecommendationForm from "../RecommendationForm";
import RecommendationResult from "../RecommendationResult";

function Recommendation() {
  const [result, setResult] = useState(null);

  const handleRecommendation = (formData) => {
    let recommendation = {};

    if (formData.project === "Code Generation") {
      recommendation = {
        name: "GPT-5.5",
        icon: "🧠",
        tag: "Primary Model",
        description: "Excellent reasoning and coding capabilities.",
        score: "98%",
      };
    }

    else if (formData.project === "Chatbot") {
      recommendation = {
        name: "Claude",
        icon: "🤖",
        tag: "Best Chatbot",
        description: "Natural conversations with strong reasoning.",
        score: "96%",
      };
    }

    else if (formData.project === "Image Generation") {
      recommendation = {
        name: "GPT Image",
        icon: "🎨",
        tag: "Image AI",
        description: "High-quality image generation.",
        score: "95%",
      };
    }

    else if (formData.budget === "Free") {
      recommendation = {
        name: "DeepSeek",
        icon: "💡",
        tag: "Budget Friendly",
        description: "Best free open-source AI model.",
        score: "92%",
      };
    }

    else if (formData.latency === "Fast") {
      recommendation = {
        name: "Groq",
        icon: "⚡",
        tag: "Ultra Fast",
        description: "Extremely low latency inference.",
        score: "97%",
      };
    }

    else {
      recommendation = {
        name: "Gemini",
        icon: "✨",
        tag: "Recommended",
        description: "Balanced performance for most applications.",
        score: "94%",
      };
    }

    setResult(recommendation);
  };

  return (
    <>
      <RecommendationForm onRecommend={handleRecommendation} />
      <RecommendationResult data={result} />
    </>
  );
}

export default Recommendation;