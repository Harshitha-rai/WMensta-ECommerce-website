import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';


const Category = (props) => {
  const {setCategoryType} = useContext(ShopContext);
 
  return (
    <>
        <div className='category-box' onClick={() => setCategoryType(props.type)}>
          <Link to='/category' style={{textDecoration:'none'}}>
            <div className='category-image'>
                <img src={props.image} alt='' />
            </div>
            <div className='category-description'>
                <h4>{props.name}</h4>
                <p>Shop now</p>
            </div>
          </Link>
        </div>
    </>
  )
}

export default Category