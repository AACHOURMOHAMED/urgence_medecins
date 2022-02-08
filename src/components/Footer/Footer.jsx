import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { Button } from '../buttons/Button';
import logo from '../images/logo-white.png'
import { Link } from 'react-router-dom';
import './Footer.css'
import 'normalize.css';

const Footer = () => {
  return (
    <footer id="Footer">
        <div className="container">
            <div className="content">
               <div className="left-content">{/*this the left content of the footer */}
                    <img className='logo' src={logo} alt="logo" />
                    <div className="text">
                    SOS MEDECINS KENITRA est une structure médicale d’urgence qui assure une permanence de soins 24h/24 et 7j/7 sur Kenitra, Salé, sidi yahya el gharb, Sidi Slimane  et Sidi Kacem.<br></br>
                        SOS MEDECINS KENITRA est un service de garde de médecins généralistes et urgentistes. Nos médecins se déplacent à domicile sur un simple appel téléphonique à notre centrale.<br></br>
                        SOS MEDECINS KENITRA fait le lien entre le patient et le système de soins, dans une situation d’urgence ou le patient n’a pas accès à son médecin traitant.
                    </div>
                    <div className="button-footer">
                        <label className="call">appelez-nous!</label>
                        <a id="btn" href="tel:0537777333"><FaPhoneAlt className='icon' id="ic"/> 0537777333 </a>
                    </div>
                </div>
                <div className="right-content">{/*this the right content of the footer */}
                <div className="firstlink">
                     <Link className='link' to='/Acceuil'>Acceuil</Link>
                 
                    <Link className='link' to='/Sommenous'>Qui sommes-nous ?</Link>
              
                    <Link className='link' to='/'>Nos services</Link>
               
                    <Link className='link' to='/'>Visite a domicile</Link>
                    <Link className='link' to='/'>Consultations</Link>
                    <Link className='link' to='/'></Link>
                    <Link className='link' to='/'></Link>
                    <Link className='link' to='/'></Link>
                </div>
                   <div className="slink">
                     <Link className='link' to='/'>Pharmacies de garde</Link>
                    <Link className='link' to='/'>Recrutement</Link>
                    <Link className='link' to='/'>Contact</Link>  
                   </div>
                    
      

                </div>



               
            </div>
             <div className="bottom-footer">
                    <label className='text-bottom'><span>©</span> 2022 SOS MEDECINS - Mentions légales - Protection de la vie privée - Cookies - Réalisé par Solocal</label>
                </div>
        </div>
    </footer>
  );
};

export default Footer;
