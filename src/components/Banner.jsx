import React from 'react';
import { Link } from 'react-router-dom';

const Banner = (props) => {
  return (
    <>
        <div className='banner'>
          <Link to='/product' style={{textDecoration:'none'}} >
            
            <div className='banner-image'>
                <img src={props.image} alt='' />
            </div>
            <div className='banner-description'>
                <p>{props.title}</p>
                <button>All products</button>
            </div>
          </Link>
        </div>
    </>
  )
}

export default Banner