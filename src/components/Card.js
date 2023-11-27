import React, { useContext } from 'react';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Card = (props) => {
    const {addToWishlist} = useContext(ShopContext);
    return (
        <div className='container-box'>
            <div className='img-container'>
                <Link to={`/item/${props.id}`}><img src={props.image} alt=''/></Link>
                <button className='fav-icon' onClick={() => {addToWishlist(props.id)}}><FavoriteBorderIcon fontSize='medium' /></button>
            </div>
            <div className='box-content'>
                <h4>{props.name}</h4>
                <p className='box-discription'>{props.description}</p>
                <p className='box-rate'>Rs.{props.price}</p>
            </div>
        </div> 
    )
}

export default Card


