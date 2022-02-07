import React, { useState } from "react";
import Header  from './components/Header/Header';
import {BrowserRouter as Router,Switch,Route, Redirect} from 'react-router-dom'
import './App.css';
import 'normalize.css';

import Acceuil from "./components/Accueil/Acceuil";
import Footer from "./components/Footer/Footer";
import { Sommesnous } from "./components/Que-sommes-nous/sommesnous";
import { Pharmacies } from "./components/Pharmacies-de-garde/Pharmacies";
import  {Contact} from "./components/contact/Contact";
import  Recrutement  from "./components/Recrutement/Recrutement";
import { Btn } from "./components/btn-call/btn";




function App() {


  

  return (
    <Router>
     <Header/>
     <hr></hr>
     <Btn/>
     <Redirect path="/"/>
     <Switch>
     

      <Route exact path='/' component={Acceuil}>
        <Acceuil/>
      </Route>
      <Route exact path='/Acceuil' component={Acceuil}>
        <Acceuil/>
      </Route>
      <Route  path='/Sommenous' component={Sommesnous}>
        <Sommesnous/>
      </Route>
      <Route  path='/Pharmacies' component={Pharmacies}>
        <Pharmacies/>
      </Route>
      <Route  path='/Contact' component={Contact}>
        <Contact/>
      </Route>
      <Route  path='/Recrutement' component={Recrutement}>
        <Recrutement/>
      </Route>
     </Switch>
      
      
      <Footer/>

    </Router>
    
  );
}

export default App;
