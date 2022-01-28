import React from 'react';
import back from '../images/back2.png';
import './sommesnous.css'
import {FaHeartbeat} from 'react-icons/fa'
import {ImArrowRight2} from 'react-icons/im'
import {FaPhoneAlt} from 'react-icons/fa'
import image1 from '../images/image1.png'
import { Button } from '../buttons/Button';
import medecin from '../images/medecin.png'
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
            
            {/*Que somme nous */}
             <div className="content-nous">{/*Que somme nous */}
              <h1 className='top-title'>QUE SOMME NOUS ?</h1>
              <h1 className='title'>SOS MEDECINS KENITRA</h1>
              <div className="notre-content">
                <div className="notre">
                  <h1 className="title">nos valeurs</h1>
                  <p className="text">
                  Quotidiennement les équipes de SOS MEDECINS RABAT s’engagent à fournir un service de qualité afin de vous satisfaire.
                  </p>
                </div>



                <div className="notre">
                  <h1 className="title">nos valeurs</h1>
                  <p className="text">
                  Quotidiennement les équipes de SOS MEDECINS RABAT s’engagent à fournir un service de qualité afin de vous satisfaire.
                  </p>
                </div>



                <div className="notre">
                  <h1 className="title">nos valeurs</h1>
                  <p className="text">
                  Quotidiennement les équipes de SOS MEDECINS RABAT s’engagent à fournir un service de qualité afin de vous satisfaire.
                  </p>
                </div>



              </div>
            </div>
            {/*Que somme nous */}
            
          </div>
          {/*LES 5 POINTS DE LA CHARTE SOS MÉDECINS Kenitra */}
              <div id="showcase-points">
                <div className="content-pointskenitra">
                  <img src={image1} className='image1' alt="" />
                  <div className="container">
                    <h1 className="title">LES 5 POINTS DE LA CHARTE SOS 
                    MÉDECINS Kenitra</h1>
                    <div className="content-points">
                      {/* card section */}
                      <div className="card-point">
                        <h1 className="number">01</h1>
                        <p className="text">
                          Disponibilité 24h/24 et 365
                          jours/an
                        </p>
                      </div>
                      {/* card section */}

                      {/* card section */}
                      <div className="card-point">
                        <h1 className="number">02</h1>
                        <p className="text">
                          Médecins urgentistes
                          expérimentéset rodés à l’urgence
                        </p>
                      </div>
                      {/* card section */}

                      {/* card section */}
                      <div className="card-point">
                        <h1 className="number">03</h1>
                        <p className="text">
                          Moyens diagnostiques et 
                          thérapeutiques
                        </p>
                      </div>
                      {/* card section */}

                      {/* card section */}
                      <div className="card-point">
                        <h1 className="number">04</h1>
                        <p className="text">
                          Médecins disponibles tout 
                          au long de leur garde
                        </p>
                      </div>
                      {/* card section */}

                      {/* card section */}
                      <div className="card-point">
                        <h1 className="number">05</h1>
                        <p className="text">
                          Remise d’un bilan d’intervention
                          au médecin traitant
                        </p>
                      </div>
                      {/* card section */}

                    </div>
                  </div>
                </div>
              </div>

          {/*LES 5 POINTS DE LA CHARTE SOS MÉDECINS Kenitra */}


          {/* DERRIÈRE SOS MÉDECINS ? */}
            <section id="derrier">
              <div className="container">
              <h1 className="title">DERRIÈRE SOS MÉDECINS ?</h1>
                  <h2 className="downtitle">Des médecins généralistes à votre écoute !</h2>
              </div>
              <div className="content-derrier">
                <img className='last-image' src={medecin} alt="" />
                
                   <div className="text-derrier">
                    <p className="text">
                        Tous nos médecins généralistes urgentistes abordent leur pratique médicale dans un esprit associatif, en mettant en avant la solidarité et le partage avec les patients, mais aussi envers leurs confrères.
<br /><br />
                        Ces médecins urgentistes donnent de leur expérience, de leur compétence et de leur humanisme pour permettre de développer SOS Médecins Grand Paris et ses services. Et surtout, de vous garantir une écoute, un soutien et un accompagnement à chacune de nos interventions médicales d’urgence.
                    </p>
                  </div>
                </div>
                 
                
         
            </section>



          {/* DERRIÈRE SOS MÉDECINS ? */}

        <div className="colorgrad"></div>
          
        
    </section>
    </div>
  );
};

