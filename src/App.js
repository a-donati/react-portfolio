import React from "react";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Navigation from './components/Navigation/Navigation';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
      <Navigation />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<About />}
          />
          <Route
            path="/portfolio"
            element={<Portfolio />}
          />
        </Routes>
      
      </div>

    </Router>
  );
}

export default App;

