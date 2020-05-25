import React from 'react';
import { Link } from "react-router-dom";

import Slider from './Slider';
import PropertyDescription from '../components/PropertyDescription';
import '../assets/styles/components/PropertyCard.scss';

const PropertyCard = () => {
  return (
      <div className='property'>
        <div className='property__slider'>
          <Slider />
        </div>
        <div className='property__description' >
          <PropertyDescription />
          <Link to='#' className='property__description--details'><p>see more details</p></Link>
        </div>
      </div>
  )
};

export default PropertyCard;