import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/footer';
import { useLax } from 'use-lax';
import './App.scss';

// Routes
import Landing from './components/landing';
import Games from './components/games';


const App = () => {
  
  useLax()

  return (
    <div className="App">
      <Router>
        <Navbar scroll={false} />
          <Switch>
            <Route exact path='/games' component={Games} />
            <Route exact path='/' component={Landing} /> 
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
