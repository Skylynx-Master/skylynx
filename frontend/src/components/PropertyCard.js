import React from 'react';
import { Link } from "react-router-dom";

import Slider from './Slider';
import PropertyDescription from '../components/PropertyDescription';
import '../assets/styles/components/PropertyCard.scss';

const PropertyCard = ({city, sector, type, category, photos, description, id}) => {
  return (
    <div className='property'>
      <div className='property__slider'>
        <Slider photos={photos}/>
      </div>
      <div className='property__description' >
        <PropertyDescription 
          city={city}
          sector={sector}
          type={type}
          category={category}
          description={description}
        />
        <Link
          className='property__description--details'
          to={`/detail/${id}`}
          >Ver más detalles
        </Link>
      </div>
    </div>
  )
};

export default PropertyCard;