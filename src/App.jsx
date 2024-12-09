import React from "react";
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './components/Homepage'
import Project from './components/ProjectCarousel'
import Service from './components/Service'
import Contact from './components/Contact'

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  

  return (
    <>
     
    <Router>
    <Header/>
      <Routes>
      <Route exact path='/' element={<Homepage/>} />
      <Route exact path='/project' element={<Project/>} />
      <Route exact path='/service' element={<Service/>} />
      <Route exact path='/contact' element={<Contact/>} />

      
      
      </Routes>
    </Router>
     <Footer/>

    </>
  )
}

export default App