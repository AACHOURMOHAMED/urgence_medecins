import React from 'react';
import back from '../images/back2.png';
import './sommesnous.css'
import {FaHeartbeat} from 'react-icons/fa'
import {ImArrowRight2} from 'react-icons/im'
import {FaPhoneAlt} from 'react-icons/fa'
import image1 from '../images/image1.png'
import { Button } from '../buttons/Button';
import 'normalize.css';


export const Sommesnous = () => {
  return (
    <div className='container-body'>
    {/* // this is main section  */}
    <section className="main" id="main-nous">
      <div className="black"></div>
        <img className='back' src={back} alt="" />
        
        
            <div className="container">
                <div className="content">
                    <h1 className="title">DÉCOUVREZ NOTRE ASSOCIATION 
                  SOS MÉDECINS KENITRA
                      </h1>
                    <p className="text">SOS Médecins est, depuis sa mise en place par le Docteur Marcel Lascar, une structure associative entièrement autofinancée. Nous intervenons pour des urgences médicales générales, hors urgences vitales, grâce à l’intervention rapide de nos médecins généralistes urgentistes dans l’ensemble du territoire français.</p>
                   

                    
                </div>
                <div className="content-card-nous">
                  <div className="cardd">hi</div>
                  <div className="cardd">hi</div>
                  <div className="cardd">hi</div>
                  <div className="cardd">hi</div>        

                </div>
                <div className="call"><label className="sidetext">appelez-nous!</label>
                    <Button className='btn' buttonSize={'btn--small'}><FaPhoneAlt className='icon'/> 47 07 77 77</Button>
                
                </div>
            
            
            <div className="content-nous">
              <h1 className='top-title'>QUE SOMME NOUS ?</h1>
              <h1 className='title'>QUE MEDECINS KENITRA</h1>
              
            </div>

          </div>
        <div className="colorgrad"></div>
          
        
    </section>
    </div>
  );
};

