import React from 'react';
import '../asset/layout.css';
import {ProductDB} from '../data/ProductDB';
import Card from '../components/Card';
import Hero from '../components/Hero'
import Header from '../components/Header';
import Footer from '../components/Footer';

const Product = (props) => {
  return (
    <>
      <Header />
      <Hero />
      <div className='container'>
          {ProductDB.map((product, index) => {
            if(props.category === product.category) {
              return <Card 
                key = {product.id}
                id = {product.id}
                name = {product.name} 
                description = {product.description}
                price = {product.price} 
                image = {product.imgURL}
              />
            }else {
              return null;
            }
        })}   
        </div>
      <Footer />
      </>
  )
}

export default Product