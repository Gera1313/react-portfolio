import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Navigation from './Navigation';
import AboutMe from './AboutMe'; // Navigation
import Portfolio from './Portfolio'; // Navigation
import Contact from './Contact'; // Navigation
import Resume from './Resume'; // Navigation
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
