import React from 'react';
import PropertCard from './PropertyCard';

import '../assets/styles/components/PropertyList.scss';

const PropertyList = () => {
  return (
    <ul className='propertyList'>
      {
        [1, 2, 3, 4, 5, 6, 7].map(property => <li className='propertyList__Item' key={property}><PropertCard /></li>)
      }
    </ul>
  )
};

export default PropertyList;