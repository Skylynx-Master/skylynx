import React from 'react';
import '../assets/styles/components/GalleryRandom.scss';
import apartment_01 from '../assets/static/apartment_01.jpg';
import apartment_02 from '../assets/static/apartment_02.jpg';
import apartment_03 from '../assets/static/apartment_03.jpg';
import apartment_04 from '../assets/static/apartment_04.jpg';


const GalleryRadom = () => {

  return (


    <section className="gallery">
      <div className="gallery__slider">

        <ul>
          <li><img src={apartment_01} /></li>
          <li><img src={apartment_02} /></li>
          <li><img src={apartment_03} /></li>
          <li><img src={apartment_04} /></li>
        </ul>
      </div> 
    </section>

  )
}

export default GalleryRadom;