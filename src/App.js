import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
// import Skills from './components/Skills';
import Projects from './components/Projects';
// import Work from './components/Work';
// import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <About />
        {/* <Skills /> */}
        <Projects />
        {/* <Work />
        <Contact /> */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
