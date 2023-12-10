import React from 'react';
import '../asset/categoryBanner.css';
import Banner from '../images/women/CategeryBanner.jpg';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const CategoryBanner = () => {
  return (
    <>
        <div className='category-banner-container'>
            <div className='cat-banner-image'>
                <img src={Banner} alt=''/>
            </div>
            <div className='cat-banner-description'>
                <div className='cat-banner-text'>
                    <p>DRESS LIKE</p>
                    <p>IT'S</p>
                    <p>THE BEST DAY</p>
                    <p>OF</p>
                    <p>YOUR LIFE</p>
                    <p><FavoriteBorderIcon fontSize='2rem'/></p>
                    {/* <p>DRESS LIKE<br/>IT'S<br/>
                    THE BEST DAY OF <br/>YOUR LIFE <FavoriteBorderIcon style={{fontSize:'0.9rem'}}/></p> */}
                </div>
            </div>
        </div>
    </>
  )
}

export default CategoryBanner