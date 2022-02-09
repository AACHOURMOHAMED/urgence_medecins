import React ,{useState} from 'react';
import back from '../images/back2.png';
import './Contact.css'
import {FaHeartbeat} from 'react-icons/fa'
import {ImArrowRight2} from 'react-icons/im'
import {FaPhoneAlt} from 'react-icons/fa'
import image1 from '../images/image1.png'
import { Button } from '../buttons/Button';
import medecin from '../images/medecin.png';
import { Link } from 'react-router-dom';
import 'normalize.css';
import emailjs from 'emailjs-com'
import axios from 'axios'
import {ReCAPTCHAForm} from '../Recaptcha/ReCAPTCHAForm'
import swal from 'sweetalert';
import { refresh } from 'aos';

export const Contact = () => {
  const [prenom,setPrenom] = useState('')
  const handlePrenom = (e) =>{
    setPrenom(e.target.value);
    console.log(e.target.value);
    }
function sendEmail(e){
  e.preventDefault();
  emailjs.sendForm(
    "service_37yvccr","template_hwn2ato",
    e.target,
    'user_8AEUtOaJf7kJfSiN1nktg',
    
  ).then(res=>{
    swal('Votre message a été envoyé avec succès');
    document.querySelector("#imageForm").reset();
    setPrenom('');
  }).catch(err => console.log(err))
}

 
  return (



<div className='container-body'>
    {/* // this is main section  */}
    <section className="main" id="main-Contact">
      <div className="black"></div>
        <img className='back' src={back} alt="" />
        
        
            <div className="container">
                <div className="content">
                    <h1 className="title">CONTACT ET NUMÉRO DE TÉLÉPHONE</h1>


                    <p className="text">SOS Médecins  Kenitra</p>
                   

                    <div className="call"><label className="sidetext">appelez-nous!</label>
                     <Button className='btn' buttonSize={'btn--med'}><FaPhoneAlt className='icon'/>0537777333</Button>
                    </div>
                </div>
                
              

                {/* /********************************************************************* */ }

                <div className="contact">
                  <h1 className="title">Contact</h1>
                  <p className="par">
                  ATTENTION ! Ce formulaire de contact sert uniquement à la demande de documents administratifs, aucune demande médicale ou autre ne sera prise en compte.
                  </p>
                    <form id='imageForm' autoComplete='off' onSubmit={sendEmail}>
                   
                      {/* Single item */}
                
                        <input className='text-f'
                         type="date" 
                         name='date-visite' 
                         placeholder='Date de visite'
                         required/>
                      
                      {/*End of Single item */}

                      {/* Single item */}
                     
                        <input className='text-f' 
                        type="text" 
                        name='prenom' 
                        placeholder='Prenom du patient' 
                        onChange={handlePrenom}
                        required/>
                     
                      {/*End of Single item */}

                      {/* Single item */}
                 
                        <input className='text-f' 
                        type="text" name='nom' 
                        placeholder='Nom du patient' 
                      
                        required/>
       
                      {/*End of Single item */}

                      {/* Single item */}
          
                        <input className='text-f' 
                        type="text" 
                        name='tel' 
                        placeholder="Téléphone du patient" 
                        required/>
            
                      {/*End of Single item */}

                      {/* Single item */}
            
                        <input className='text-f' 
                        type="email" 
                        name='useremail' 
                        placeholder='E-mail du patient' 
                        required/>
          
                      {/*End of Single item */}


                      

                      {/* Single item */}
              
                        <input className='text-f' 
                        type="text" 
                        name='adress' 
                        placeholder='Adresse postale' 
                      
                        required/>
           
                      {/*End of Single item */}


                      {/* Single item */}
                
                        <input className='text-f' 
                        type="text" 
                        name='C_adress' 
                        placeholder="Complément d'adresse"
                      
                        />
             
                      {/*End of Single item */}


                      {/* Single item */}
       
                        <input className='text-f' 
                        type="text" 
                        name='ville' 
                        placeholder='Ville' 
                     
                        required/>
    
                      {/*End of Single item */}


                      {/* Single item */}
    
                        <input className='text-f' 
                        type="text" 
                        name='codepostal' 
                        placeholder="Code postal" 
                      
                        required/>
      
                      {/* Single item */}

                        <br />
                        <input className='check check1' type="checkbox" value="Duplicata ou problème de feuille de soins" name='check' /> 
                        <label className='text-check'   htmlFor="check">Duplicata ou problème de feuille de soins</label>
                        <br />
                        <input className='check check2'  type="checkbox" value=" Duplicata ou problème d’arrêt de travail" name='check1' />
                        <label className='text-check'     htmlFor="check1">Duplicata ou problème d’arrêt de travail</label>
                        <br />
                        <input className='check check3'  type="checkbox" value="  Congé enfant malade" name='check2' />
                        <label className='text-check' htmlFor="check1">Congé enfant malade</label>
                        <br />  
                        <input className='check check4'  type="checkbox" value=" Certificat enfant malade" name='check3' />
                        <label className='text-check' htmlFor="check1">Certificat enfant malade</label>
                        <br />
                        <input className='check check5'  type="checkbox" value=" Certificat d’absence scolaire" name='check4' />
                        <label className='text-check' htmlFor="check1">Certificat d’absence scolaire</label>
                        <br />
                        <input className='check check6'  type="checkbox" value=" Duplicata ou problème de certificat d’accident du travail" name='check5' />
                        <label className='text-check' htmlFor="check1">Duplicata ou problème de certificat d’accident du travail</label>
                        <br />
                        <input className='check check7'  type="checkbox" value=" Certificat d’ordonnance" name='check6' />
                        <label className='text-check' htmlFor="check1">Certificat d’ordonnance</label>
                        <br />
                        <input className='check check8'  type="checkbox" value=" Duplicata ou problème de bon de transport (Préciser l’hôpital de destination)" name='check7' />
                        <label className='text-check' htmlFor="check1">Duplicata ou problème de bon de transport (Préciser l’hôpital de destination)</label>
                        <br />
                        <input className='check check9'  type="checkbox" value=" Autre" name='check8' />
                        <label className='text-check' htmlFor="check1">Autre</label>
                        <br />
                        <textarea name='messege' rows='4' placeholder='Message'/>
                        <br />

                        
                        <ReCAPTCHAForm />

                        <br />
                      <input className='btn' type="submit" value="Envoyer"
                       />

                    </form>
            
                </div>





                {/* /********************************************************************* */ }








            </div>
   
          
    </section> 
</div>



  );
  
};
