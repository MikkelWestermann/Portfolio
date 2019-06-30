import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/footer';
import { useLax } from 'use-lax';
import './App.scss';

import { 
  watchViewport, 
  unwatchViewport
} from 'tornis';

// Routes
import Landing from './components/landing';
import Projects from './components/projects';


const App = () => {
  useLax()

  const [scroll, setScroll] = useState();
  
  useEffect(() => {
    watchViewport(tornis)

    return () => {
      unwatchViewport(tornis)
    }
  }, [])

  const tornis = ({ scroll }) => {
    if (scroll.changed) {
      setScroll(scroll)
    }
  }


  return (
    <div className="App">
      <Router>
        <Navbar scroll={scroll} />
          <Switch>
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/' component={Landing} /> 
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
