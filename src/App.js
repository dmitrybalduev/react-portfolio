import logo from './logo.svg';
import './App.css';
import About from './components/About'
import Contact from './components/Contactform';
import Portfolio from './components/Portfolio';
import Header from './components/Header';
import Footer from './components/Footer';
import Resume from './components/Resume';

import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Route exact path="/">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/resume">
              <Resume />
            </Route>
          </div>
          <Footer />
        </div>
      </Router>
  )
}

export default App;
