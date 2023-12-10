import React, { useContext } from 'react';
import '../asset/layout.css';
import {ProductDB} from '../data/ProductDB';
import Card from '../components/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ShopContext } from '../context/ShopContext';
import CategoryBanner from '../components/CategoryBanner';

const Product = () => {
  const {categorystate} = useContext(ShopContext);
  return (
    <>
      <Header />
      <CategoryBanner />
      <div className='category-type'>
            <p>All products</p>
        </div>
      <div className='container' onClick={window.scrollTo({top:0, behavior:'smooth'})}>
          {ProductDB?.map((product) => {
            if(categorystate === product.category) {
              return <Card 
                key = {product.id}
                id = {product.id}
                name = {product.name} 
                description = {product.description}
                price = {product.price} 
                image = {product.imgURL}
              />
            }else{
              return null
            }
        })}   
        </div>
      <Footer />
      </>
  )
}

export default Product