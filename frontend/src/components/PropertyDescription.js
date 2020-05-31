import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/PropertyDescription.scss';

const PropertyDescription = ({city, sector, type, category, description}) => {
  return (
      <div className='description'>
        <h2 className='description__title'>{type} en {category}, {sector} {city}</h2>
        <p className='description__subtitle'>{description}</p>
      </div>
  )
};

export default PropertyDescription;