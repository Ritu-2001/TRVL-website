import React from 'react';
import './App.css';
import bg from './images/img-2.jpg';

export default function Products() {
  return(
    <>
    <div className='hero-container' style={{ backgroundImage: `url(${bg})`  }}>
    <h1 className='products'>PRODUCTS </h1>;
    </div>
      
    </>
  )
}