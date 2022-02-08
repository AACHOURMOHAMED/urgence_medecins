import React, { useEffect,useState } from 'react';
import back from '../images/back2.png';
import './Pharmacies.css'
import {FaPhoneAlt} from 'react-icons/fa'
import { Button } from '../buttons/Button';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';
import 'normalize.css';
import ph from '../images/ph.jpg'
export const Pharmacies = () => {
  
  


const [repo, setRepo] = useState([]);

const getRepo = () =>{
  axios.get('http://localhost:8000/api/pharmacies')
  .then(response => {
  const myRepo = response.data[0];
  console.log(myRepo)
  setRepo(myRepo);
  })
}


useEffect(() => getRepo(),[]);








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
{/* ***************************************************************************************** */}

    <section id="data">
      <div className="container">
        <h1 className="title">Pharmacies de gard</h1>
        <div className="content-f">
          
        {repo.map((pharmacies) => (
          
            <div className="content">  
            
            <h3>{pharmacies.designation}</h3>
            <b>{pharmacies.date}</b><br />
             {pharmacies.description}
          </div>
          
          
          

        ))}
        </div>
        <img className='ph' src={ph} alt="" />
      </div>
    </section>
{/* ***************************************************************************************** */}

</div>



  );
};
