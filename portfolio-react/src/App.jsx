// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Navigation from './components/navigation';
import AboutMe from './routes/aboutme'; // Navigation section
import Portfolio from './routes/portfolio'; // Navigation section
import Contact from './routes/contact'; // Navigation section
import Resume from './routes/resume'; // Navigation section
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" exact component={AboutMe} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
      </Routes>
    </Router>
  )
}

export default App;
