import React from 'react';
import back from '../images/back2.png';
import './Pharmacies.css'
import {FaPhoneAlt} from 'react-icons/fa'
import { Button } from '../buttons/Button';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';
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
                    <p className="text">Urgence medecins kenitra</p>
                   

                    <div className="call"><label className="sidetext">appelez-nous!</label>
                     <Button className='btn' buttonSize={'btn--med'}><FaPhoneAlt className='icon'/> 47 07 77 77</Button>

                    </div>
                </div>
                
              
            </div>
   

    </section> 
    <section id="data">
      <div className="container">
        <h1 className="title">test</h1>
        <h3 className="date">
          15/55/0111
        </h3>
        <p className="discription">
          tes 
          test
        </p>
      </div>
    </section>
</div>



  );
};
