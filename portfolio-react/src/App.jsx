import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Navigation from './components/navigation';
import AboutMe from './components/aboutme'; // Navigation section
import Portfolio from './components/portfolio'; // Navigation section
import Contact from './components/contact'; // Navigation section
import Resume from './components/resume'; // Navigation section
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
