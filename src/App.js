import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/footer';
import { useLax } from 'use-lax';
import './App.scss';

// Routes
import Landing from './components/landing';
import Projects from './components/projects';


const App = () => {
  
  useLax()

  return (
    <div className="App">
      {/* <Router>
        <Navbar scroll={false} />
          <Switch>
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/' component={Landing} /> 
          </Switch>
        <Footer />
      </Router> */}

      <Landing />
    </div>
  );
}

export default App;
