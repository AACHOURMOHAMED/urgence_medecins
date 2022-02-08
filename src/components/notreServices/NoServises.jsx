import React from 'react';
import pic from '../images/plan_2.png'
import back from '../images/back.png';
import './services.css'
export const NoServises = () => {
  return (
 
    
       
        
        
    <div className="container-body">
        {/* card pages */}
        
        {/*End card pages */}

    {/* section visite a domicile */}
        <section id="visite"> 
        <img className='back' src={back} alt="" />
            <div className="content-visite">
              <div className="container">
              <img className='pic' src={pic} alt="visite a doctor" />
              <div className="content">
                  <label >Urgences medecins kenitra</label>
                  <h1 className="title">VISITES MÉDICALES À DOMICILE</h1>                                         
                  <p className="text-visite">

                    Vous avez besoins de conseils médicaux de toute urgence ?
                    Votre état de santé est préoccupant et vous ne pouvez pas vous déplacer ?

                    Ayez les bons réflexes : faites appel aux équipes d’urgence Urgences MEDECINS kenitra, et bénéficiez de l’intervention à domicile d’un médecin urgentiste parfaitement rodé aux urgences médicales.

                    24h sur 24 tout au long de l’année, nos médecins effectuent des visites à domicile. Nous intervenons sur la plupart des cas de médecine générale mais également les urgences, la pédiatrie et les problèmes psychiatriques
                  </p>

              </div>
              
            

            <div className="content-que">
              <h1 className="title">QUE DOIS-JE FAIRE AVANT D’APPELER ?</h1>
              <p className="text">Lors de la prise en charge de votre appel par l’accueil téléphonique de Urgences MEDECINS kenitra nous allons vous demander :</p>
              <li>L’identité précise du malade</li>
              <li>L’adresse exacte du lieu de visite</li>
              <li>Le motif de votre appel.</li>
              <li>Le numéro de téléphone du lieu de la visite (gardez le téléphone près de vous de façon à être facilement joignable)</li>
              <p className="text">Vous devez impérativement rester à votre domicile, en attendant l’arrivée du médecin.</p>
              <p className="text">Lors de votre appel, indiquez toute information susceptible d’aider le médecin à vous trouver, tout repère géographique.</p>
              <p className="text">Pour préparer efficacement la visite médicale et permettre de gagner du temps, il est important que vous prépariez :</p>
              <li>les ordonnances de votre traitement habituel et les derniers médicaments prescrits.</li>
              <li>Tout document médical permettant de mieux comprendre vos problèmes de santé (bilans biologiques, radiographies, courriers médicaux…)</li>
              <li>Carnet de santé de l’enfant.</li>
              <h1 className="title">VOTRE SANTÉ, NOTRE PRIORITÉ</h1>
              <p className="text">
              Vous pouvez nous joindre au :<a id='t' href='tel:0537777333'>0537.777.333</a> . Nos régulateurs vous assisteront pour obtenir l’aide adaptée au plus vite. Au même numéro et à tout moment vous avez également la possibilité de joindre un médecin pour un conseil téléphonique gratuit.
              Nous prenons en charge tout type de consultation médicale.
              Nos visites sont remboursées par les différentes caisses d’assurance maladie.
              </p>
            </div>
          </div>
        </div>
        </section>
      
    {/*End  section visite a domicile */}
  </div>
  );
};
