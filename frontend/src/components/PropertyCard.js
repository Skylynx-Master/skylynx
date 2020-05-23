import React from 'react';
import Slider from './Slider';

import '../assets/styles/components/PropertyCard.scss'

const PropertyCard = () => {
  return (
    <div className='propiety'>
      <div className='propiety__slider'>
        <Slider />
      </div>
      <div className='propiety__description'>

      </div>
    </div>
  )
};

export default PropertyCard;