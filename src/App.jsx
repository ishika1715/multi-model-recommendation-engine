import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Working from "./components/Working";
import Models from "./components/Models";
import RecommendationForm from "./components/RecommendationForm";
import RecommendationResult from "./components/RecommendationResult";
import ModelComparison from "./components/ModelComparison";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Working/>
      <Models />
      <RecommendationForm/>
      <RecommendationResult/>
      <ModelComparison/>
       <Dashboard/>
      <Footer/>
     
    </>
  );
}

export default App;