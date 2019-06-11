import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from './components/landing';
import Footer from './components/footer';
import { useLax } from 'use-lax';
import './App.scss';

function App() {

  useLax()

  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Landing} /> 
      </Router>
      <Footer />
    </div>
  );
}

export default App;
