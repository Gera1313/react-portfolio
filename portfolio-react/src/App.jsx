// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Navigation from './components/navigation';
import Project from './components/project';
import Footer from './components/footer';
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
        <Route path="/" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        {/* <Route path="/projects" element={<Project />} />  */}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
