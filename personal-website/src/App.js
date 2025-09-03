import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Beyond_Code from "./components/Beyond_Code.jsx";
import Contact from "./components/Contact.jsx";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar id="navBar" />
        <Home id="home" />
        <About id="about" />
        <Project id="project" />
        <Beyond_Code id="artwork" />
        <Contact id="contact" />
      </div>
    </Router>
  );
}

export default App;
