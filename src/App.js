import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
      <Router>
        <Navbar />
          <Switch>
            <Route exact path='/' component={Landing} /> 
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
