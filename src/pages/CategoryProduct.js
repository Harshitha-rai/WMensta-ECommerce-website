import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';
import '../asset/layout.css';
import CategoryBanner from '../components/CategoryBanner';

const CategoryProduct = () => {
    const {categorystate, ProductDB, categoryType} = useContext(ShopContext);
    return (
        <>
        <Header />
        <CategoryBanner />
        <div className='category-type'>
            <p>{categoryType}</p>
        </div>
        <div className='container' onClick={window.scrollTo({top:0, behavior:'smooth'})}>
            {ProductDB?.map((product) => {
                if(categorystate === product.category && categoryType === product.productCategory) {
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

export default CategoryProduct;