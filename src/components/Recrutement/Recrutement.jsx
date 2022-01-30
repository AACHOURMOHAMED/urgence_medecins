import React from 'react';
import back from '../images/back2.png';
import './Recrutement.css'
import {FaPhoneAlt} from 'react-icons/fa'
import { Button } from '../buttons/Button';
import 'normalize.css';
import { Link } from 'react-router-dom';
import {ReCAPTCHAForm} from '../Recaptcha/ReCAPTCHAForm'
import {Card} from '../cards/card'
export const Recrutement = () => {
  return (



<div className='container-body'>
    {/* // this is main section  */}
    <section className="main" id="main-Recrutement">
      <div className="black"></div>
        <img className='back' src={back} alt="" />
        
        
            <div className="container">
                <div className="content">
                    <h1 className="title">VOUS SOUHAITEZ REJOINDRE SOS MÉDECINS ?</h1>
                    <p className="text">Découvrez nos annonces médicales et nos modalités de recrutement SOS Médecins à Kenitra</p>
                    <div className="call"><label className="sidetext">appelez-nous!</label>
                     <Button className='btn' buttonSize={'btn--small'}><FaPhoneAlt className='icon'/> 47 07 77 77</Button>
                    </div>
                </div>
            </div>
    

    <div className="container">
      {/*contact start*/}
      <div className="contact-m">
      {/* medecin content */}
          <div className="medecin">
            <div className="title">
              <Link className='title'>
                Je suis un medecin
              </Link>
            </div>
              <br /><br />
              <form autoComplete='off'>
              {/* Field-warpper */}
              <div className="field-wrapper">
                <input type="text" placeholder='prenom' name='prenom' />
              </div>
              {/* Field-warpper */}


               {/* Field-warpper */}
               <div className="field-wrapper">
                <input type="text" placeholder='Nom' name='Nom' />
              </div>
              {/* Field-warpper */}



               {/* Field-warpper */}
              <div className="field-wrapper">
                <input className='check check1' type="checkbox"  name='medecin' />
                <label htmlFor="medecin">Medecin</label>
              </div>
              {/* Field-warpper */}



               {/* Field-warpper */}
              <div className="field-wrapper">
                <input className='check check2' type="checkbox"  name='teleperateur' />
                <label htmlFor="teleperateur">Teleperateur</label>
              </div>
              {/* Field-warpper */}

               {/* Field-warpper */}
              <div className="field-wrapper">
                <input type="text" placeholder='Adresse postale' name='Adresse' />
              </div>
              {/* Field-warpper */}


               {/* Field-warpper */}
              <div className="field-wrapper">
                <input type="text" placeholder="Complement d'adress" name='Cadresse' />
              </div>
              {/* Field-warpper */}


               {/* Field-warpper */}
              <div className="field-wrapper">
                <input type="text" placeholder='Ville' name='ville' />
              </div>
              {/* Field-warpper */}


               {/* Field-warpper */}
              <div className="field-wrapper">
                <input type="text" placeholder='Code postal' name='codepostal' />
              </div>
              {/* Field-warpper */}



              {/* Field-warpper */}
              <div className="field-wrapper">
                <input type="text" placeholder='E-mail' name='email' />
              </div>
              {/* Field-warpper */}




              {/* Field-warpper */}
              <div className="field-wrapper">
                <input type="text" placeholder='Telephone' name='tel' />
              </div>
              {/* Field-warpper */}




              {/* Field-warpper */}
              <div className="field-wrapper">
              <label for="up_file"></label>
                <input type="file" name='up_file' />
              </div>
              {/* Field-warpper */}



              {/* Field-warpper */}
              <div className="field-wrapper">
                <textarea name="message"  cols="30" rows="10" placeholder='Votre message'></textarea>
              </div>
              {/* Field-warpper */}

              <ReCAPTCHAForm />

              <br /><br />
              {/* btn Submit */}
              <div className="btnSubmit">
                <input type="submit" className="btn" />
              </div>
              {/* Field-warpper */}
              </form>
          </div>

        {/*the end of medecin content */}

        {/*Je souhaite travailler au centre d’appel SOS Médecins */}
            

            <div className="content-appel">
              <div className="title">
                <Link className='title'>
                Je souhaite travailler au centre d’appel SOS Médecins                </Link>
              </div>
            </div>
        {/*The End Je souhaite travailler au centre d’appel SOS Médecins */}

        </div>
   </div>
    {/*contact End*/}
      
    </section> 
    {/* // this is the end of  main section  */}


    {/* // this is conditions section  */}

    <section id="conditions">
    <div className="container">
      <div className="content">
        <h1 className="title">LES CONDITIONS D'EMBAUCHE</h1>
        <p className="titre">pour les médecins non titulaires d’une thèse</p>
        <p className="text">
        SOS Médecins recrute régulièrement de nouveau praticiens. Pour cela vous devez être un étudiant en médecine :
        </p>


        <div className="card-conditions">
          <div className='card-cond' >
              <p>Titulaire d’une licence de remplacement et avoir effectué au moins 5 semestres d’internat de médecine générale dont au mieux un stage dans un service de pédiatrie, dans un service d’urgence ou chez le patricien.</p>
          </div>
          <h1>OU</h1>
          <div className='card-cond' >
              <p>Avoir terminé votre internat de médecin générale, en cours de thèse</p>
          </div>
        </div>
      </div>
    </div>
    </section>
    <br />
    {/* // this is the end of  conditions section  */}

</div>



  );
};
