import React, { useState } from 'react';
import arrow_left from '../assets/images/Arrow/Arrow_left.png';
import arrow_right from '../assets/images/Arrow/Arrow_right.png';
import "../styles/Carrousel/Carrousel.scss";

function Carrousel({ pictures }) {
  const [current, setCurrent] = useState(0);
  const length = pictures.length;
  const alt = "Photo du logement";

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(pictures) || pictures.length <= 0) {
    return null;
  }

  return (
    <div className='carrousel'>
      <button className='carrousel_arrow_left' onClick={prevSlide}>
        <img src={arrow_left} alt="Flèche gauche" />
      </button>
      <button className='carrousel_arrow_right' onClick={nextSlide}>
        <img src={arrow_right} alt='Flèche droite' />
      </button>
      <img src={pictures[current]} alt={alt} className='carrousel_img' />
      <div className='carrousel_counter'>
        {current +1}/{length}
      </div>
    </div>
  );
}

export default Carrousel;