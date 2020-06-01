import React, {useState, useEffect} from 'react';
import PropertCard from './PropertyCard';

import '../assets/styles/components/PropertyList.scss';

const PropertyList = () => {

  const [ property, setProperty ] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/property')
      .then(response => response.json())
      .then(data => setProperty(data));
  }, []);

  return (
    <ul className='propertyList'>
      {
        property.map(item => <li className='propertyList__Item' key={item.id}><PropertCard {...item} /></li>)
      }
    </ul>
  )
};

export default PropertyList;