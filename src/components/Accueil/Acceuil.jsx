import React, { useEffect} from 'react';
import { FacebookProvider, Page } from 'react-facebook';
import { Card } from '../cards/card';
import back from '../images/back.png';
import backs from '../images/back-medecins.jpg';

import './Acceuil.css'
 import {FaCentercode, FaHeartbeat} from 'react-icons/fa'
import {ImArrowRight2} from 'react-icons/im'
import {FaPhoneAlt} from 'react-icons/fa'
import {BsCalendarWeekFill} from 'react-icons/bs'

import image1 from '../images/image1.png'
import { Button } from '../buttons/Button';
import AOS from 'aos';
import "aos/dist/aos.css";



const Acceuil = () => {


    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    
  return(
      
    <div className='container-body'>
    {/* // this is main section  */}
    <section className="main" id="main">
      <div className="black"></div>
        <img className='back' src={back} alt="" />
        
        
            <div className="container">
                <div className="content">
                    <h1 className="title">Urgences médecins Kenitra </h1>
                    <p className="text">Visites médicales à domicile</p>
                    <p className="text">consultations</p>
                    <p className="text">24h/24, 7j/7</p>

                    
                </div>
                <div   className="content-card">
                        <Card  className='card' cardstyle={'card--primary'} cardsize={'card--default'} >
                            <h1>Demander une visite
                            a domicile</h1>
                            <div className="buttom-content">
                     
                                <BsCalendarWeekFill className='icon'></BsCalendarWeekFill>
                                <button className='btn-circle'>
                                    <ImArrowRight2 className='icon1'></ImArrowRight2>
                                </button>
                            </div>
                        
                        </Card>
                        <Card className='card' cardstyle={'card--primary'} cardsize={'card--default'} >

                            <h1>Nos Services</h1>

                            <div className="buttom-content">
                                <FaHeartbeat className='icon'></FaHeartbeat>
                                <button className='btn-circle'>
                                    <ImArrowRight2 className='icon1'></ImArrowRight2>
                                </button>
                            </div>

                        </Card>
                        <Card data-aos={"fade-up-right"}  data-aos-duration="800" className='card' cardstyle={'card--primary'} cardsize={'card--default'} >

                            <h1>Avez vous une Urgence?</h1>
                            
                            <div className="buttom-content">
                                <a href="tel:0537777333"><FaPhoneAlt className='icon'></FaPhoneAlt></a>
                                <button className='btn-circle'>
                                    <ImArrowRight2 className='icon1'></ImArrowRight2>
                                </button>
                            </div>
                        </Card>

                    </div>
            </div>
        
        
    </section>
        



    {/* //this Urgences mediecns kenitra section  */}
    
    <section id="sos-medecins">
        <div className="colorgrad"></div>
        <img src={image1} alt="the first image" className="image1" />
        <div className="container">
            <div className="content-sos">
                <h1 className="title">Urgences médecins Kenitra  </h1>
                <div className="content-small">
                    <div data-aos={"fade-up-right"}  data-aos-duration="800" className="contentt content1">
                        Urgences MEDECINS KENITRA est une structure médicale d’urgence qui assure une permanence de soins 24h/24 et 7j/7 sur Kenitra, Salé, sidi yahya el gharb, Sidi Slimane  et Sidi Kacem.
                        Urgences MEDECINS KENITRA est un service de garde de médecins généralistes et urgentistes. Nos médecins se déplacent à domicile sur un simple appel téléphonique à notre centrale.
                        Urgences MEDECINS KENITRA fait le lien entre le patient et le système de soins, dans une situation d’urgence ou le patient n’a pas accès à son médecin traitant.
                    </div>
                    <div data-aos={"fade-up-right"}  data-aos-duration="800" className="contentt content2">
                        Nos assistants à la régulation médicale bénéficient d’une formation continue à la prise d’appel téléphonique et au traitement de l’information médicale.
                        Nous disposons d’un système informatique de gestion des appels et de la géolocalisation qui permet d’adapter au mieux la réponse donnée aux demandes de visites. Les médecins de garde sont dirigés vers les celles-ci en fonction de leur proximité et du niveau d’urgence de celle-ci.
                    </div>
                    <div data-aos={"fade-up-right"}  data-aos-duration="800" className="contentt content3">
                        Proposant une prise en charge des urgences médicales  et des soins de médecine générale non programmés, 7j/7 et 24h/24 à Kenitra  Urgences Médecins assure les visites de médecine générale, d’urgence , de permanence et de continuité des soins, à votre domicile, sur votre lieu de travail ou encore en l’absence de votre médecin traitant.
                    </div>
                    
                </div>
                <div data-aos={"fade-up-right"}  data-aos-duration="800" className="call"><label className="sidetext">appelez-nous!</label>
                <a id="btn" href="tel:0537777333"><FaPhoneAlt className='icon' id="ic"/> 0537777333 </a>
                
                </div>
                

            </div>
        </div>
    </section>
    {/*The end of Urgences medecins section kenitra*/}

    
    {/*vous etes praticien section */}

    <section id="showcase-praticien">
        <img src={backs} alt="backgound of the page" className="backk" />
        <div className="colorgrad"></div>
        <div className="container">
            <div className="content-praticien">
                <h1 data-aos={"fade-up-right"}  data-aos-duration="800" className="title">VOUS ÊTES PRATICIEN ?</h1>
                <p data-aos={"fade-up-right"}  data-aos-duration="800" className="titre">Rejoignez les équipes de Urgences MÉDECINS Kenitra</p>
                <div data-aos={"fade-up-right"}  data-aos-duration="800" className="text-content">
                    <p data-aos={"fade-up-right"}  data-aos-duration="800" className="text">
                        Vous souhaitez mettre vos compétences médicales au service de particuliers en Kenitra ?.
                        Nous recherchons régulièrement des médecins généralistes et urgentistes pour assurer des visites à domicile. Ainsi que des téléopérateurs pour la prise en charge des demandes de nos patients et la régulation médicale.
                    </p>
                    <div data-aos={"fade-up-right"}  data-aos-duration="800" className="button-text">
                     <Button  className='btn-text' buttonStyle={'btn--primary'} buttonSize={'btn--med'}>
                        je depose candidature
                    </Button>   
                    </div>
                    
                </div>
                
            </div>
        </div>

    </section>
    {/*This is the end of vous etes praticien section*/}
    {/*This is the begin of page facebook*/}

    <section id="showcase-facebook">
        <center>
            <h1 className="title">Rejoignez nous sur notre page facebook</h1>
        </center>
        
        <div data-aos={"fade-up-right"}  data-aos-duration="800" className="content">
            <FacebookProvider   appId="346420270442551">
                <Page href="https://www.facebook.com/أفضل-ألعاب-الحاسوب-و-الأندرويد-مجانا-675234572628729/" tabs="timeline"  />
            </FacebookProvider>  
        </div>
    


   

    </section>

   

    {/*This is the end of page*/}
   

    </div>
  );
};

export default Acceuil;
