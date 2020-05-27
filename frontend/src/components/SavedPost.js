import React from 'react';
import {Link} from 'react-router-dom'
import '../assets/styles/components/SavedPost.scss'
import checkIcon from '../assets/static/checkIcon.png';
import clockIcon from '../assets/static/clockIcon.png';


const SavedPost = () => {
  return (
    <div className="SavedPost">

      <h2>Se ha guardado su publicación</h2>
      <img src={checkIcon} alt="" className="SavedPost-check"></img>
      <p>Espere a que uno de nuestros asesores revise y publique su inmueble.</p>
      <img src={clockIcon} alt="clock icon" className="SavedPost-clock"></img>
      <Link to="/dashboard">Regresar a mi tablero</Link>
    </div>
  )
}

export default SavedPost;