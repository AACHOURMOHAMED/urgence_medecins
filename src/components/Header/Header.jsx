import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo-white.png'
import { Button } from '../buttons/Button';
import "./Header.css";
import 'normalize.css';

import { FaPhoneAlt } from 'react-icons/fa';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar container-body">
        <img src={logo} alt="" className="nav-logo" />
        <div className={`nav-items ${isOpen && "open"}`}>
        
        <Link className='item' to='/Acceuil'>Accueil</Link> 
        <Link className='item' to='/Sommenous'>Qui sommes-nous ?</Link>  
        <Link className='item' to='/Nosservices'>Nos services</Link>  
        <Link className='item' to='/'>Pharmacies de garde</Link>  
        <Link className='item' to='/'>Recrutement</Link>  
        <Link className='item' to='/'>Contact</Link>  
  
      </div>
      <div className="btn">
              <Button className='btn' buttonSize={'btn--small'}><FaPhoneAlt className='icon'/> 47 07 77 77</Button>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      > <div className="bar"></div></div>
              

    
  </div>
  );
};

export default Header;
