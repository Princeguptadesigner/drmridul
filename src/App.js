import React from 'react';
import { 
  Routes, // instead of "Switch"
  Route
} from "react-router-dom";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './icofont.min.css';
import './index.css';
import './responsive.css';
import './mobilemenu.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import About from './About';
import Services from './Services';
import Blog from './Blog';
import Contact from './Contact';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/drmridul/' element={<Home />} />
        <Route path='/drmridul/About' element={<About />} />
        <Route path='/drmridul/Services' element={<Services />} />
        <Route path='/drmridul/Blog' element={<Blog />} />
        <Route path='/drmridul/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;