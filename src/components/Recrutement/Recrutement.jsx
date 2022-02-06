import React, { Component, useEffect, useState } from 'react';
import back from '../images/back2.png';
import './Recrutement.css'
import {FaPhoneAlt} from 'react-icons/fa'
import { Button } from '../buttons/Button';
import 'normalize.css';
import { Link } from 'react-router-dom';
import {ReCAPTCHAForm} from '../Recaptcha/ReCAPTCHAForm'
import axios from 'axios'
import swal from 'sweetalert';
import apell from '../images/icon-apell.png'
import doctor from '../images/doctor.png'
import trav from '../images/52388.jpg'
import calldoctor from '../images/calldoctor.jpg'

export default class Recrutement extends Component {


  constructor(props) {
    super(props);

    this.state = {
        upfile: "",
        prenom:""
    };
}
//handle prenom
handlePrenom = (e) =>
{
  this.setState({
    prenom:e.target.value,
    
  })
  console.log(e.target.value)
}


//handle Input nom
handleNom = (e) =>
{
  this.setState({
    nom:e.target.value,
    
  })
  console.log(e.target.value)
}

//handle Input nom

//handle checkbox medecin

handleMedecin = (e) =>
{
  this.setState({
    medecin:e.target.value,
    
  })
  console.log(e.target.value)
}
//handle checkbox teleperteur


handleTeleperateur = (e) =>
{
  this.setState({
    teleperateur:e.target.value,
    
  })
  console.log(e.target.value)
}

//handle Adresse
handleAdresse = (e) =>
{
  this.setState({
   Adresse:e.target.value,
    
  })
  console.log(e.target.value)
}

//handle complete Adresse
handleCadresse = (e) =>
{
  this.setState({
   Cadresse:e.target.value,
    
  })
  console.log(e.target.value)
}

//handle ville
handleVille = (e) =>
{
  this.setState({
   ville:e.target.value,
    
  })
  console.log(e.target.value)
}

//handle code postal
handleCodepostal = (e) =>
{
  this.setState({
   codepostal:e.target.value,
    
  })
  console.log(e.target.value)
}


// handle email
handleEmail = (e) =>
{
  this.setState({
   email:e.target.value,
    
  })
  console.log(e.target.value)
}
//handle Telephone
handleTel = (e) =>
{
  this.setState({
   tel:e.target.value,
    
  })
  console.log(e.target.value)
}
//handle Message
handleMessage = (e) =>
{
  this.setState({
   message:e.target.value,
    
  })
  console.log(e.target.value)
}

// image onchange hander
handleChange = (e) => {
    this.setState({
        upfile: e.target.files[0],
    })
    console.log(e.target.value)
}

// submit handler
submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData() 
    data.append('images', this.state.upfile)
    data.append('prenom' , this.state.prenom)
    data.append('nom' , this.state.nom)
    data.append('medecin' , this.state.medecin)
    data.append('teleperateur' , this.state.teleperateur)
    data.append('Adresse' , this.state.Adresse)
    data.append('Cadresse' , this.state.Cadresse)
    data.append('ville' , this.state.ville)
    data.append('codepostal' , this.state.codepostal)
    data.append('email' , this.state.email)
    data.append('tel' , this.state.tel)
    data.append('message' , this.state.message)
    axios.post("http://localhost:8000/api/send", data,)
    .then((response) => { 
       console.log(response.data);
       swal('Votre message a été envoyé avec succès');

        if (response.status === 200) {
        this.setState({
           
        });
        setTimeout(() => {
            this.setState({
            upfile: "",
            responseMsg: "",
            });
        }, 2000);

        document.querySelector("#imageForm").reset();
        // getting uploaded images
        // this.refs.child.getImages();
        }
    })
    .catch((error) => {
        console.error(error);
    });
}



render(){

  return (




<div className='container-body'>
    {/* // this is main section  */}
    <section className="main" id="main-Recrutement">
      <div className="black"></div>
        <img className='back' src={back} alt="" />
        
        
            <div className="container">
                <div className="content">
                    <h1 className="title">VOUS SOUHAITEZ REJOINDRE SOS MÉDECINS ?</h1>
                    <p className="text">Découvrez nos annonces médicales et nos modalités de recrutement Urgences Médecins à Kenitra</p>
                    <div className="call"><label className="sidetext">appelez-nous!</label>
                     <Button className='btn' buttonSize={'btn--med'}><FaPhoneAlt className='icon'/>05 37 41 51 55</Button>
                    </div>
                </div>
            </div>
    

    <div className="container">
      {/*contact start*/}
      <div className="contact-m">
        <div className="containe"></div>
      {/* medecin content */}
          <div className="medecin">
            <div className="content-cc">
              <div className="titree">
                <div className="content-titre">
                    <img className='icon-r' src={doctor} alt="centerappel"/>
                    <div className="link">
                     <Link className='title'>
                        Je suis un medecin
                    </Link> 
                    </div>
                    
                </div>
              
              </div>
              
              <div className="titree">
                  <div className="content-titre">
                      <img className='icon-r' src={apell} alt="centerappel"/>
                      <div className="link">
                        <Link className='title'>
                        Je souhaite travailler au centre d’appel Urgence Médecins
                          </Link>
                      </div>
                      
                  </div>
              </div>
              
            </div>
              
              <br /><br />
              <form autoComplete='off'
             
              onSubmit={this.submitHandler}
              id='imageForm' 
               encType="multipart/form-data" >
              {/* Field-warpper */}
              <div className="field-wrapper">
                <input 
                type="text" 
                placeholder='prenom' 
                name='prenom'
              
                onChange={this.handlePrenom}
                
                />
              </div>
              {/* Field-warpper */}


               {/* Field-warpper */}
               <div className="field-wrapper">
                <input 
                type="text" 
                placeholder='Nom' 
                name='nom' 
               
                onChange={this.handleNom}
                />
              </div>
              {/* Field-warpper */}



               {/* Field-warpper */}
              <div className="field-wrapper">
                <input 
                className='check check1' 
                type="checkbox"  
                name='medecin' 
             
                onChange={this.handleMedecin}
                 value='medecin'
                />
                <label htmlFor="medecin">Medecin</label>
                
              </div>
              {/* Field-warpper */}



               {/* Field-warpper */}
              <div className="field-wrapper">
                <input 
                className='check check2' 
                type="checkbox"  
                name='teleperateur' 
            
                onChange={this.handleTeleperateur}
                 value='teleperateur'
                />
                <label htmlFor="teleperateur">Teleperateur</label>
                
              </div>
              {/* Field-warpper */}

               {/* Field-warpper */}
              <div className="field-wrapper">
                <input 
                type="text" 
                placeholder='Adresse postale' 
                name='Adresse' 
                onChange={this.handleAdresse}
          
                />
                
              </div>
              {/* Field-warpper */}


               {/* Field-warpper */}
              <div className="field-wrapper">
                <input 
                type="text" 
                placeholder="Complement d'adress" 
                name='Cadresse'
                onChange={this.handleCadresse}
             
                />
                
              </div>
              {/* Field-warpper */}


               {/* Field-warpper */}
              <div className="field-wrapper">
                <input 
                type="text" 
                placeholder='Ville' 
                name='ville' 
                onChange={this.handleVille}
                
                />
                
              </div>
              {/* Field-warpper */}


               {/* Field-warpper */}
              <div className="field-wrapper">
                <input 
                type="text" 
                placeholder='Code postal' 
                name='codepostal' 
                onChange={this.handleCodepostal}
               
                />
                
              </div>
              {/* Field-warpper */}



              {/* Field-warpper */}
              <div className="field-wrapper">
                <input 
                type="text" 
                placeholder='E-mail'
                 name='email'
                 onChange={this.handleEmail}
            
                 />
              </div>
              {/* Field-warpper */}




              {/* Field-warpper */}
              <div className="field-wrapper">
                <input 
                type="text" 
                placeholder='Telephone' 
                name='tel' 
                onChange={this.handleTel}
                 
                />
              </div>
              {/* Field-warpper */}




              {/* Field-warpper */}
              <div className="field-wrapper">
              <label for="up_file"></label>
                <input 
                type="file" 
                name='upfile' 
        
                onChange={this.handleChange}
                />
              </div>
              {/* Field-warpper */}

             

              {/* Field-warpper */}
              <div className="field-wrapper">
                <textarea 
                name="message"  cols="30" rows="10" 
                placeholder='Votre message'
                onChange={this.handleMessage}
           
                ></textarea>
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
    {/* this is the travailler shez urgence medecins C'est: */}
      <section id="travailler">
        <div className="container">
          <h1 className="title-trav">TRAVAILLER  CHEZ  URGENCES MÉDECINS, C’EST :</h1>
            <div className="content-trav">
              <img className='image-trav' src={trav} alt="test"/>
              <div className="content">
                
                <ol className="list">
                  <li className="lis">Devenir téléopérateur SOS Médecins H/F et être le premier interlocuteur de nos patients</li>

                  <li className="lis">Être le premier maillon de la chaîne de la prise en charge médicale</li>

                  <li className="lis">Savoir accueillir les patients, les rassurer, prioriser le motif d’appel et collecter toutes les informations relatives au bon traitement de celui-ci</li>

                  <li className="lis">Avoir une certaine qualité d’écouteafin d’apporter à nos patients, en plus d’un service médicale accessible et de qualité, un accompagenment et une dimension humaine à notre service médical Urgences Médecins</li>
                </ol>
              </div>
            </div>
        </div>
      </section>
    {/* this is the travailler shez urgence medecins C'est: */}






        {/* this is the LES QUALITÉS ET LES SPÉCIFICITÉS DES TÉLÉOPÉRATEURS SOS MÉDECINS */}
        <section id="telecall">
        <div className="container">
          <h1 className="title-call">LES QUALITÉS ET LES SPÉCIFICITÉS DES TÉLÉOPÉRATEURS SOS MÉDECINS
          </h1>
            <div className="content-call">
           
              <div className="content">
                
                <ol className="list">
                  <li className="lis">Le standard téléphonique SOS Médecins est ouvert 7j/7, 24h/24 : 365 jours/an.</li>

                  <li className="lis">Le travail s’organise en horaires décalés du lundi au dimanche, horaires pouvant convenir également aux étudiants disponibles les week-ends et les vacances scolaires.</li>

                  <li className="lis">La formation de téléopérateur SOS Médecins est assurée en interne</li>

               
                </ol>
              </div>
              <img className='image-call'  src={calldoctor}  alt="test"/>
            </div>
        </div>
      </section>
    {/* this is theLES QUALITÉS ET LES SPÉCIFICITÉS DES TÉLÉOPÉRATEURS SOS MÉDECINS */}
</div>



  );
}
};
