import React, {useState, useEffect} from 'react';
import Slider from '../components/Slider';
import PropertyDescription from '../components/PropertyDescription';
import Map from '../components/Map';
import '../assets/styles/pages/Detail.scss';
import { properties } from '../../initialState.json'

const Detail = ({ match }) => {
  const [ liked, setLiked ] = useState(false)
  // const [ property, setProperty ] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:3000/property')
  //     .then(response => response.json())
  //     .then(data => setProperty(data.filter(function(e) {
  //       return (e.id == match.params.Id)
  //     })));
  // }, []);

  console.log(properties[match.params.Id-1].type)

  return (
    <>
      <div className='detail'>
        <div className='detail__container'>
          <div className='detail__presentation'>
            <div className='detail__presentation--slider'>
              <Slider photos={properties[match.params.Id-1].photos} />
            </div>
            <PropertyDescription 
              city={properties[match.params.Id-1].city}
              sector={properties[match.params.Id-1].sector}
              type={properties[match.params.Id-1].type}
              category={properties[match.params.Id-1].category}
              description={properties[match.params.Id-1].description}
            />
          </div>
          <button aria-label="Agregar a favoritos" className='detail__fav' onClick={() => setLiked(!liked)}>
            { 
              (liked)? <i className="fas fa-star"></i> : <i className="far fa-star"></i>
            }
          </button>
          <div className='detail__description'>
            <div className='detail__description--characteristics'>
              <h3>Tipo de Inmueble:</h3>
              <p>{properties[match.params.Id-1].type} en {properties[match.params.Id].category}</p>
              <h3>Precio:</h3>
              <p>${properties[match.params.Id-1].value}</p>
              <div className='detail__description--items'>
                <p>Baños: {properties[match.params.Id-1].bathrooms}</p>
                <p>Habitaciones: {properties[match.params.Id-1].rooms}</p>
              </div>
            </div>
            <div className='detail__description--services'>
              <h3>Servicios:</h3>
              <ul>
                {
                  properties[match.params.Id-1].services.map((item, index) => <li key={index} >{item} </li>)
                }
              </ul>           
            </div>
          </div>
        </div>
        <div className='map'>
          <Map />
        </div>
      </div>
    </>
  )
};

export default Detail;