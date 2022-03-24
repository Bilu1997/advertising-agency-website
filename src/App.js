import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./styles/Colorpallete";
function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
