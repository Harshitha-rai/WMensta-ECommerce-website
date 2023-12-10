import React,{useEffect, useContext} from 'react';
import {CategoryDB, BannerContenet} from '../data/CategoryDB';
import Hero from '../components/Hero'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Category from '../components/Category';
import '../asset/category.css';
import '../asset/banner.css';
import Banner from '../components/Banner';
import { ShopContext } from '../context/ShopContext';

const Home = (props) => {
    const {setcategory} = useContext(ShopContext);
    
    useEffect(() => {
        setcategory(props.category);
    }, []);
    return (
    <>
        <Header />
        <Hero />

        <div className='category-title'>
            <p>SHOP BY CATEGORY</p>
        </div>
        <div className='category-container'>
            {CategoryDB?.map((product, index) => {
            if(props.category === product.category) {
                return <Category
                    key = {product.id}
                    name = {product.categoryName} 
                    type = {product.categoryType}
                    image = {product.categoryImg}
                />
            }else {
                return null;
            }
        })}   
        </div>
        <div className='banner-container'>
            {BannerContenet.map(product => {
                if(props.category === product.category) {
                    return <Banner 
                        key = {product.id}
                        title = {product.title}
                        image = {product.image}
                        category = {product.category}
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

export default Home