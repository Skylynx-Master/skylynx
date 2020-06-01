import React, { useState } from 'react';
import '../assets/styles/components/Slider.scss';

const DEFAULT_ARRAY = [
  "https://saposyprincesas.elmundo.es/wp-content/uploads/2016/07/versalles1.jpg",
  "https://www.eluniversal.com.mx/sites/default/files/styles/f01-1023x630/public/2017/02/10/1destinos_palacio_versalles2.jpg"
]

const Slider = ({photos = DEFAULT_ARRAY}) => {
  let sliderArrow = [];

  photos.map((photo, index) => (
    sliderArrow.push(<img key={index} src={photo} className='container__img' alt='apartment photo'></img>)
  ))

  const [x, setX] = useState(0);
  const handleLeft = () => {
    x === 0 
      ? setX(-100 * (sliderArrow.length - 1)) 
      : setX(x + 100);
  };
  const handleRight = () => {
    ( x === -100 * (sliderArrow.length - 1) )
      ? setX(0) 
      : setX(x - 100);
  };
  return (
    <div className='container'>
      {
        sliderArrow.map((item, index) => {
          return (
            <div key={index} className='container__slide' style={{transform: `translateX(${x}%)`}}>
              {item}
            </div>
          )
        })
      }
      <button id='goLeft' onClick={handleLeft}>
        <i className="fas fa-angle-left"></i>
      </button>
      <button id='goRight' onClick={handleRight}>
        <i className="fas fa-angle-right"></i>
      </button>
    </div>
  );
};

export default Slider;