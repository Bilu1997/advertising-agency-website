import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection/HeroSection";
import HomeOffer from "./components/HomeOffer/HomeOffer";
import TrustedUs from "./components/TrustedUs/TrustedUs";

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
      <HomeOffer />
      <TrustedUs />
    </Router>
  );
}

export default App;
