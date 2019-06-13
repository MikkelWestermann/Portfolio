import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/footer';
import { useLax } from 'use-lax';
import './App.scss';

// Routes
import Landing from './components/landing';


function App() {

  useLax()

  return (
    <div className="App">
      <Navbar />
      <Router>
        <Route exact path='/' component={Landing} /> 
      </Router>
      <Footer />
    </div>
  );
}

export default App;
