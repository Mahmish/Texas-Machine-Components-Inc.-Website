import React from 'react';
import Categories  from './categories';
import Banner from './banner';
import AboutUs from './aboutUs';
import Service from './service';
import Industrial from './industrial';
import Product from './product';
import ContactUs from './contactUs';


export default function home() {
  return (
    <div>
      <Banner/>
      <Categories/>
      <AboutUs/>
      <Service/>
      <Industrial/>
      <Product/>
      <ContactUs/>


    </div>
  )
}
