import React, { useState } from 'react';
import '../assets/styles/components/Slider.scss';
import i1 from '../assets/static/test/img1.jpg';
import i2 from '../assets/static/test/img2.jpg';
import i3 from '../assets/static/test/img3.jpg';
import i4 from '../assets/static/test/img4.jpg';
import i5 from '../assets/static/test/img5.jpg';

const Slider = () => {
  let sliderArrow = [
    <img src={i1} className='container__img'></img>,
    <img src={i2} className='container__img'></img>,
    <img src={i3} className='container__img'></img>,
    <img src={i4} className='container__img'></img>,
    <img src={i5} className='container__img'></img>
  ];
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
        <i class="fas fa-angle-left"></i>
      </button>
      <button id='goRight' onClick={handleRight}>
        <i class="fas fa-angle-right"></i>
      </button>
    </div>
  );
};

export default Slider;