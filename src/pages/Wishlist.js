import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import '../asset/wishlist.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ShopContext } from '../context/ShopContext';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Wishlist = () => {
  const {ProductDB, wishlistItem, addToCart, removeFromWishlist, getTotalWishlistItems} = useContext(ShopContext);
  return (
    <>
    <Header />

    {getTotalWishlistItems() > 0 ? 
    <div className='wishlist-container'>
      {ProductDB?.map((item) => {
      if(wishlistItem[item.id] > 0) {
        return (
          <div key={item.id} className='wishlist-container-box'>
            <div className='wishlist-img-container'>
              <Link to={`/item/${item.id}`}><img onClick={window.scrollTo(0,0)} src={item.imgURL} alt=''/></Link>
              <button className='wishlist-fav-icon' onClick={() => {removeFromWishlist(item.id)}}><CloseIcon fontSize='medium' /></button>
            </div>
            <div className='wishlist-box-content'>
              <h4>{item.name}</h4>
              <p className='wishlist-box-discription'>{item.description}</p>
              <p className='wishlist-box-rate'>Rs.{item.price}</p>
              <button className='wishlist-cart-btn' onClick={() => {addToCart(item.id, item.price)}}>ADD</button>
            </div>
          </div>
        )
      }else {
        return null;
      }
    })}
    </div>
    : <>
      <div className='no-wishlist-item'>
        <div className='no-wishlist-item-icon'>
          <FavoriteBorderIcon fontSize='5rem'/>
        </div>
        <h3>SAVE YOUR FAVORITE ITEMS</h3>
        <p>Want to save the items that you love? Just click on the <br />heart symbol beside the item and it will show up here.</p>
      </div>
    </>
    }
    <Footer />
    </>
  )
}

export default Wishlist