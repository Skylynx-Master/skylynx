import React, {useState, useEffect} from 'react';
import Slider from '../components/Slider';
import PropertyDescription from '../components/PropertyDescription';
import Map from '../components/Map';
import '../assets/styles/pages/Detail.scss';

const Detail = ({ match }) => {
  const [ property, setProperty ] = useState([]);
  const [ liked, setLiked ] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3000/property')
      .then(response => response.json())
      .then(data => setProperty(data.filter(function(e) {
        return (e.id == match.params.Id)
      })));
  }, []);

  return (
    <>
    { 
      (property.length > 0) 
      ? (<div className='detail'>
          <div className='detail__container'>
            <div className='detail__presentation'>
              <div className='detail__presentation--slider'>
                <Slider photos={property[0].photos} />
              </div>
              <PropertyDescription 
                city={property[0].city}
                sector={property[0].sector}
                type={property[0].type}
                category={property[0].category}
                description={property[0].description}
              />
            </div>
            <button aria-label="Agregar a favoritos" className='detail__fav' onClick={() => setLiked(!liked)}>
              { 
                (liked)? <i class="fas fa-star"></i> : <i class="far fa-star"></i>
              }
            </button>
            <div className='detail__description'>
              <div className='detail__description--characteristics'>
                <h3>Tipo de Inmueble:</h3>
                <p>{property[0].type} en {property[0].category}</p>
                <h3>Precio:</h3>
                <p>${property[0].value}</p>
                <div className='detail__description--items'>
                  <p>Baños: {property[0].bathrooms}</p>
                  <p>Habitaciones: {property[0].rooms}</p>
                </div>
              </div>
              <div className='detail__description--services'>
                <h3>Servicios:</h3>
                <ul>
                  {
                    property[0].services.map((item, index) => <li key={index} >{item} </li>)
                  }
                </ul>           
              </div>
            </div>
          </div>
          <div className='map'>
            <Map />
          </div>
        </div>)
        : 'Loading...'
    }
    </>
  )
};

export default Detail;