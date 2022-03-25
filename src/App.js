import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection/HeroSection";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/offer" />
        <Route path="/contact" />
      </Routes>
      <HeroSection />
    </Router>
  );
}

export default App;
