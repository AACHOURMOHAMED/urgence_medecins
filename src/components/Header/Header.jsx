import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import logo from '../images/logo-white.png'
import { Button } from '../buttons/Button';
import "./Header.css";
import 'normalize.css';
import Navbar from '../Navbar/Navbar'

import { FaPhoneAlt } from 'react-icons/fa';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [navbar, setNavbar] = useState(false)
   


    const changeBackground = () => {
      console.log(window.scrollY)
      if (window.scrollY >= 66) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    }


    useEffect(() => {
      changeBackground()
      // adding the event when scroll change background
      window.addEventListener("scroll", changeBackground)
    })


   





 
  return (
    <header id="header" className={navbar ? "header active" : "header"}>
    <div className="Navbar container-body">
        <img src={logo} alt="" className="nav-logo" />
        <div className={`nav-items ${isOpen && "open"}`}>
        
        <Link className='item' to='/Acceuil'>Accueil</Link> 
        <Link className='item' to='/Sommenous'>Qui sommes-nous ?</Link>  
        <Link className='item' to='/noservices'>Nos services</Link>  
        <Link className='item' to='/Pharmacies'>Pharmacies de garde</Link>  
        <Link className='item' to='/Recrutement'>Recrutement</Link>  
        <Link className='item' to='/Contact'>Contact</Link>  
  
      </div>
      <div className="navbar">
        <div className="btn">
      
             <a id="btn" href="tel:0537777333">0537777333 </a>
              
      </div>
       <Navbar/>
      </div>
      

              


  </div>
  </header>
  );
};

export default Header;
