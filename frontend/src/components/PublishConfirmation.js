import React from 'react';
import checkIcon from '../assets/static/checkIcon.png';
import {Link} from 'react-router-dom';
import '../assets/styles/components/PublishConfirmation.scss';

const PublishConfirmation = () =>{
  return(
    <div className="PublishConfirmation">
      
      <h2>Se ha publicado el inmueble!!!</h2>
      <img src={checkIcon}></img>
      <Link to="/dashboard">Regresar a mi tablero</Link>
    </div>
    )
}

export default PublishConfirmation; 