import React from 'react';
import back from '../images/back2.png';
import './Pharmacies.css'
import {FaHeartbeat} from 'react-icons/fa'
import {ImArrowRight2} from 'react-icons/im'
import {FaPhoneAlt} from 'react-icons/fa'
import image1 from '../images/image1.png'
import { Button } from '../buttons/Button';
import medecin from '../images/medecin.png';
import { Link } from 'react-router-dom';
import Map from '../Map/Map'
import 'normalize.css';
export const Pharmacies = () => {
  return (



<div className='container-body'>
    {/* // this is main section  */}
    <section className="main" id="main-Pharmacies">
      <div className="black"></div>
        <img className='back' src={back} alt="" />
        
        
            <div className="container">
                <div className="content">
                    <h1 className="title">RETROUVEZ TOUTES LES PHARMACIES
                          DE GARDE 24H/24

                      </h1>
                    <p className="text">de Kenitra (75) et en Île-de-Maroc</p>
                   

                    <div className="call"><label className="sidetext">appelez-nous!</label>
                     <Button className='btn' buttonSize={'btn--small'}><FaPhoneAlt className='icon'/> 47 07 77 77</Button>

                    </div>
                </div>
                
              
            </div>
   
          <Map/>
          
    </section> 
</div>



  );
};
