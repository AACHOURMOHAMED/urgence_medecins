import React, { useState } from "react";
import Header  from './components/Header/Header';
import {BrowserRouter as Router,Switch,Route, Redirect} from 'react-router-dom'
import './App.css';
import 'normalize.css';

import Acceuil from "./components/Accueil/Acceuil";
import Footer from "./components/Footer/Footer";
import { Sommesnous } from "./components/Que-sommes-nous/sommesnous";
import { Pharmacies } from "./components/Pharmacies-de-garde/Pharmacies";


function App() {
  return (
    <Router>

     <Header/>
     <Switch>
     

      <Route exact path='/' component={Acceuil}>
        <Acceuil/>
      </Route>
      <Route exact path='/acceuil'>
        <Acceuil/>
      </Route>
      <Route  path='/Sommenous'>
        <Sommesnous/>
      </Route>
      <Route  path='/Pharmacies'>
        <Pharmacies/>
      </Route>
     </Switch>
      
      
      <Footer/>

    </Router>
    
  );
}

export default App;
