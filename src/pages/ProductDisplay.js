import React, { useContext } from 'react';
import '../asset/productDisplay.css';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Footer from '../components/Footer';
import { ShopContext } from '../context/ShopContext';


const ProductDisplay = (props) => {
  
  const {item} = props;
  const {addToCart, psize, handleClick, addToWishlist} = useContext(ShopContext);
  
  return (
    <>
    <div className='product-main' onClick={window.scrollTo({top:0, behavior:'smooth'})}>
      <div className='product-main-content'>
        <div className='display-image'>
          <img src={item.imgURL} alt='Dress' />
        </div>
        <div className='product-content'>
          <div className='product-name'>
            <span className='name'>{item.name}</span>
            <span className='description'>{item.description}</span>
          </div>
          <span className='price'>Rs.{item.price}</span>
          
          <div className='product-size-content'>
          <span>Select size</span>
            <div className='product-size'>
              {
                item.productSize.map((curSize,index)=> {
                  return <button key={index} className={psize === curSize ? 'size active' : 'size'} onClick={() => handleClick(curSize, item.id)}  value={curSize}>{curSize}</button>
                })
              }
            </div>
          </div>
          
          <div className='shopping-btn'>
            <button onClick={() => {addToCart(item.id,item.price)}} type='button' className='add-btn btn'><ShoppingBagIcon/>ADD TO BAG</button>
            <button type='button' className='wishlist-btn btn' onClick={() => {addToWishlist(item.id)}}><FavoriteIcon/>WISHLIST</button>
          </div>

          <div className='product-detail'>
            <h4>Product Details</h4>
            <br />
            <p>Oversized dress in soft, printed cotton jersey with a ribbed trim around the neckline and dropped shoulders.</p>
            <br/>

            <h5>Sizes:</h5>
            <p>XS : Width: 1.02 m, Length: 61 cm</p>
            <p>S  : Width: 1.10 m, Length: 63 cm</p>
            <p>M  : Width: 1.16 m, Length: 64 cm</p>
            <p>L  : Width: 1.22 m, Length: 66 cm</p>
            <p>XL : Width: 1.30 m, Length: 67 cm</p>
            <p>XXL: Width: 1.40 m, Length: 69 cm</p>
            <p>Length: Regular length</p>
            <p>Sleeve Length: Short sleeve</p>
            <p>Fit: Oversized</p>
            <p>Price (MRP): Rs.{item.price} incl. of all taxes</p>
            <p>Country of production: India</p>
            <p>Net Quantity: 1 N</p>
            <p>Manufactured by: SHAKTHI KNITTING PRIVATE LIMITED SHAKTHI CENTRE, 4/677, NOCHIPALAYAM ROAD,, VEERAPANDI POST, 641605, TIRUPUR</p>
          </div>
        </div>
        
      </div>
    </div>
    <Footer />
    </>
    
  
  )
}

export default ProductDisplay