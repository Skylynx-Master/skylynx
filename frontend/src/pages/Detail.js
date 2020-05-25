import React from 'react';
import Slider from '../components/Slider';
import PropertyDescription from '../components/PropertyDescription'
import '../assets/styles/pages/Detail.scss'

const Detail = () => {
  return (
      <div className='detail'>
        <div className='detail__container'>
          <div className='detail__presentation'>
            <div className='detail__presentation--slider'>
              <Slider  />
            </div>
            <PropertyDescription />
          </div>
          <div className='detail__description'>
            <div className='detail__description--characteristics'>
              <h3>Tipo de Inmueble:</h3>
              <p>Casa </p>
              <h3>Precio:</h3>
              <p>$ 2'422.234</p>
              <div className='detail__description--items'>
                <p>Baños: 1</p>
                <p>Habitaciones: 1</p>
              </div>
            </div>
            <div className='detail__description--services'>
              <h3>Servicios:</h3>
              <ul>
                <li>Ascensor</li>
                <li>Bodega</li>
                <li>Estacionamiento</li>
                <li>Seguridad</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='map'>
          <h1>map</h1>
        </div>
      </div>
  )
};

export default Detail;