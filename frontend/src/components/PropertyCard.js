import React from 'react';
import { Link } from "react-router-dom";

import Slider from './Slider';
import '../assets/styles/components/PropertyCard.scss'

const PropertyCard = () => {
  return (
      <div className='propiety'>
          <div className='propiety__slider'>
            <Slider />
          </div>
          <Link to='#'>
            <div className='propiety__description'>
              <p className='propiety__description--title'>Casa en Arriendo, TEUSAQUILLO Bogotá D.C.</p>
              <p className='propiety__description--subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
              <p className='propiety__description--details'>see more details</p>
            </div>
          </Link>
      </div>
  )
};

export default PropertyCard;