import React from 'react';
import '../assets/styles/components/Landing.scss'

const Landing = () => {

  return (
    <section className="landing">

      <div className="description">
        <h1 className="description--title" >Apartacho</h1>
        <p className="description--intro"> Todos tenemos un sitio, nosotros te ayudamos a conseguirlo</p>
      </div>
      <div className="search">
      <input
          type="text"
          className="search--ubication"
          placeholder="Ubicacion"
        ></input>
      </div>
      <div className="button">
      <button type="button" className="button--send">
          Encontrar
        </button>
      </div>

    </section>

  )
}

export default Landing;