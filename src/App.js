import React, { useState } from "react";
import Header  from './components/Header/Header';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css';
import Acceuil from "./components/Accueil/Acceuil";


function App() {
  return (
    <Router>

     <Header/>
      <Acceuil/>
    </Router>
    
  );
}

export default App;
