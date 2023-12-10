import React, { useContext } from 'react';
import '../asset/cartitems.css';
import { ShopContext } from '../context/ShopContext';
import ClearIcon from '@mui/icons-material/Clear';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import RedeemIcon from '@mui/icons-material/Redeem';

const CartItems = () => {
    const {ProductDB, cartItems, addToCart, removeFromCart, deleteCartProduct, cartSubTotal, getTotalCartItems} = useContext(ShopContext);

  return (
    <>
    <Header />
      <div className='cart-container'>
        <div className='cart-content-product'>
          <div className='cart-product-item'>
          {ProductDB?.map((item) => {
            if(cartItems[item.id] > 0) {
              return (
                <div  key = {item.id} className='cart-product'>
                  <div className='cart-details'>
                    <div className='cart-img'>
                      <Link to={`/item/${item.id}`}><img src={item.imgURL} alt=''/></Link>
                    </div>
                    
                    <div className='cart-content'>
                      <Link to={`/item/${item.id}`} style={{textDecoration:'none', color: 'black'}}>
                      <h4>{item.name}</h4>
                      <p className='description'>{item.description}</p>
                      </Link>
                      <div className='cart-product-quantity'>
                        <span onClick={() => {addToCart(item.id,item.price)}}>+</span>
                        <span>{cartItems[item.id]}</span>
                        <span onClick={() => {cartItems[item.id] > 1 && removeFromCart(item.id,item.price)}}>-</span>
                      </div>
                      <p className='price'>Rs.{item.price}</p>
                      <p className='total-price'>Total: Rs. {Number(item.price)* cartItems[item.id]}</p>
                    </div>
                  </div>

                  <div className='remove-item'>
                      <button className='cart-remove-icon' onClick={() => {deleteCartProduct(item.id, Number(item.price)* cartItems[item.id])}}><ClearIcon fontSize='medium'/></button>
                  </div>
                  
                </div>   
            )
            }else {
              return null;
            }
          })}
        </div>
        
        {getTotalCartItems() > 0 ? 
        <div className='price-detail-container'>
          <div className='price-detail-total'>
            <h5>PRICE DETAILS</h5>
            <div className='price-mrp priceTotal'>
              <p>Total MRP</p>
              <p>&#8377;{cartSubTotal}</p>
            </div>
            <div className='price-discount priceTotal'>
              <p>Discount</p>
              <p>&#8377;0</p>
            </div>
            <div className='price-delivery priceTotal'>
              <p>Delivery</p>
              <p>Free</p>
            </div>
            <hr />
            <div className='price-total priceTotal'>
              <p>Total amount</p>
              <p>&#8377;{cartSubTotal}</p>
            </div>
            <div className='cart-item-btn'>
              <button>PLACE ORDER</button>
            </div>
          </div>
        </div>
        : <>
        <div className='no-item-cart'>
          <div className='no-item-cart-icon'>
            <RedeemIcon fontSize='5rem' />
          </div>
          
          <h3>Hey, it feels so light!</h3>
          <p>Your shopping bag is empty</p>
        </div>
        </>
      }
      </div>
        
    </div> 
    <Footer />
    </>
  )
}

export default CartItems