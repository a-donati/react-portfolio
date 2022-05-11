import React from 'react';
import About from './containers/About';
import Portfolio from './containers/Portfolio';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Contact from './containers/Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <About />
      <Footer />
    </div>
  );
}

export default App;
