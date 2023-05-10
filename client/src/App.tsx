import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {NavBar} from './components/NavBar/NavBar'
import { Banner } from './components/Banner/Banner';
import {Skills} from './components/Skills/Skills'
import {Project} from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact';
import {Footer} from './components/Footer/Footer'

function App() {
    return(
  <div className='App'>
    <NavBar />
    <Banner />
    <Skills />
    <Project />
    <Contact />
    <Footer/>
  </div>

    )
}

export default App;
