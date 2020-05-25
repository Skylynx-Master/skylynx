import React from 'react';
import { Link } from "react-router-dom";

import Slider from './Slider';
import PropertyDescription from '../components/PropertyDescription';
import '../assets/styles/components/PropertyCard.scss';

const PropertyCard = () => {
  return (
      <div className='propiety'>
        <div className='propiety__slider'>
          <Slider />
        </div>
        <div>
          <PropertyDescription />
          <Link to='#' className='propiety__details'><p>see more details</p></Link>
        </div>
      </div>
  )
};

export default PropertyCard;