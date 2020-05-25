import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/PropertyDescription.scss';

const PropertyDescription = () => {
  return (
    <Link to='#'>
      <div className='description'>
        <h2 className='description__title'>Casa en Arriendo, TEUSAQUILLO Bogotá D.C.</h2>
        <p className='description__subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
      </div>
    </Link>
  )
};

export default PropertyDescription;