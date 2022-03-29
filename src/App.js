import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <>
      <Router basename="/advertising-agency-website">
        <Navbar />
        <ScrollToTop>
          <Routes>
            <Route path="/advertising-agency-website/" element={<Home />} />
            <Route
              path="/advertising-agency-website/offer"
              element={<Offer />}
            />
            <Route
              path="/advertising-agency-website/contact"
              element={<Contact />}
            />
          </Routes>
        </ScrollToTop>
        <Footer />
      </Router>
    </>
  );
}

export default App;
