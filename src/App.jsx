import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./components/Pages/Home";
import Recommendation from "./components/Pages/Recommendation";
import Compare from "./components/Pages/Compare";
import DashboardPage from "./components/Pages/DashboardPage";
import About from "./components/Pages/About";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/recommendation"
          element={<Recommendation />}
        />

        <Route
          path="/compare"
          element={<Compare />}
        />

        <Route
          path="/dashboard"
          element={<DashboardPage />}
        />

        <Route
          path="/about"
          element={<About />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;