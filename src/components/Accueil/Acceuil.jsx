import React, { Component} from 'react';
import { FacebookProvider, Page } from 'react-facebook';
import { Card } from '../cards/card';
import back from '../images/back-medecins.jpg';
import './Acceuil.css'
 import {FaHeartbeat} from 'react-icons/fa'
import {ImArrowRight2} from 'react-icons/im'
import {FaPhoneAlt} from 'react-icons/fa'
import image1 from '../images/image1.png'
import { Button } from '../buttons/Button';


const Acceuil = () => {


  
  return(
      
    <div className='container-body'>
    {/* // this is main section  */}
    <section className="main" id="main">
      <div className="black"></div>
        <img className='back' src={back} alt="" />
        
        
            <div className="container">
                <div className="content">
                    <h1 className="title">SOS médecins Kenitra </h1>
                    <p className="text">Visites médicales à domicile</p>
                    <p className="text">consultations</p>
                    <p className="text">téléconsultations</p>
                    <p className="text">24h/24, 7j/7</p>

                    
                </div>
                <div className="content-card">
                        <Card className='card' cardstyle={'card--primary'} cardsize={'card--default'} >
                            <h1>Demander une visite
                            a domicile</h1>
                            <div className="buttom-content">
                     
                                <FaHeartbeat className='icon'></FaHeartbeat>
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
                        <Card className='card' cardstyle={'card--primary'} cardsize={'card--default'} >

                            <h1>Avez vous une Urgence?</h1>
                            
                            <div className="buttom-content">
                                <FaHeartbeat className='icon'></FaHeartbeat>
                                <button className='btn-circle'>
                                    <ImArrowRight2 className='icon1'></ImArrowRight2>
                                </button>
                            </div>
                        </Card>

                    </div>
            </div>
        
        
    </section>
        



    {/* //this sos mediecns kenitra section  */}
    
    <section id="sos-medecins">
        <div className="colorgrad"></div>
        <img src={image1} alt="the first image" className="image1" />
        <div className="container">
            <div className="content-sos">
                <h1 className="title">SOS médecins Kenitra  </h1>
                <div className="content-small">
                    <div className="contentt content1">
                        SOS MEDECINS KENITRA est une structure médicale d’urgence qui assure une permanence de soins 24h/24 et 7j/7 sur Rabat, Salé et Temara Skhirat et ce depuis 2008.
                        SOS MEDECINS KENITRA est un service de garde de médecins généralistes et urgentistes. Nos médecins se déplacent à domicile sur un simple appel téléphonique à notre centrale.
                        SOS MEDECINS KENITRA fait le lien entre le patient et le système de soins, dans une situation d’urgence ou le patient n’a pas accès à son médecin traitant.
                    </div>
                    <div className="contentt content2">
                        Nos assistants à la régulation médicale bénéficient d’une formation continue à la prise d’appel téléphonique et au traitement de l’information médicale.
                        Nous disposons d’un système informatique de gestion des appels et de la géolocalisation qui permet d’adapter au mieux la réponse donnée aux demandes de visites. Les médecins de garde sont dirigés vers les celles-ci en fonction de leur proximité et du niveau d’urgence de celle-ci.
                    </div>
                    <div className="contentt content3">
                        Proposant une prise en charge des urgences médicales  et des soins de médecine générale non programmés, 7j/7 et 24h/24 à Paris (75) ainsi que dans la plupart des communes des départements suivants : Seine-Saint-Denis (93), Hauts-de-Seine (92) et Val-de-Marne (94), SOS Médecins assure les visites de médecine générale, d’urgence , de permanence et de continuité des soins, à votre domicile, sur votre lieu de travail ou encore en l’absence de votre médecin traitant.
                    </div>
                    <div className="contentt content4">
                        et des soins de médecine générale non programmés 7j/7 et 24h/24 à Paris (75) ainsi que dans la plupart des communes des départements suivants : Seine-Saint-Denis (93), Hauts-de-Seine (92) et Val-de-Marne (94), SOS Médecins assure le
                    </div>
                </div>
                <div className="call"><label className="sidetext">appelez-nous!</label>
                    <Button className='btn' buttonSize={'btn--small'}><FaPhoneAlt className='icon'/> 47 07 77 77</Button>
                
                </div>
                

            </div>
        </div>
    </section>
    {/*The end of sos medecins section kenitra*/}

    
    {/*vous etes praticien section */}

    <section id="showcase-praticien">
        <img src={back} alt="backgound of the page" className="backk" />
        <div className="colorgrad"></div>
        <div className="container">
            <div className="content-praticien">
                <h1 className="title">VOUS ÊTES PRATICIEN ?</h1>
                <p className="titre">Rejoignez les équipes de SOS MÉDECINS Kenitra</p>
                <div className="text-content">
                    <p className="text">
                        Vous souhaitez mettre vos compétences médicales au service de particuliers en Île-de-maroc ?.
                        Nous recherchons régulièrement des médecins généralistes et urgentistes pour assurer des visites à domicile. Ainsi que des téléopérateurs pour la prise en charge des demandes de nos patients et la régulation médicale.
                    </p>
                    <div className="button-text">
                     <Button className='btn-text' buttonStyle={'btn--primary'} buttonSize={'btn--med'}>
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

        <div className="content">
            <FacebookProvider  appId="346420270442551">
                <Page href="https://www.facebook.com/أفضل-ألعاب-الحاسوب-و-الأندرويد-مجانا-675234572628729/" tabs="timeline"  />
            </FacebookProvider>  
        </div>
    


   

    </section>

   

    {/*This is the end of page*/}
   

    </div>
  );
};

export default Acceuil;
