import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Navigation from './Navigation';
import AboutMe from './AboutMe'; // Navigation section
import Portfolio from './Portfolio'; // Navigation section
import Contact from './Contact'; // Navigation section
import Resume from './Resume'; // Navigation section
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <Navigation />
      <Switch>
        <Route path="/" exact component={AboutMe} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
      </Switch>
    </Router>
  )
}

export default App;
