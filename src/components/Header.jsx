import React, { useContext } from 'react';
import Logo from '../images/Wmlogo.jpg';
import { Link } from 'react-router-dom';
import '../asset/header.css';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { ShopContext } from '../context/ShopContext';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    const {getTotalCartItems} = useContext(ShopContext);
    return (
        <div className='header'>
            <div className='navbar'>
                <div className='nav-content1'>
                    <div className='nav-title'> 
                        <Link to='/' style={{color: 'rgb(185, 140, 25)', textDecoration:'none'}}><h2>WMensta</h2></Link>
                    </div>
                    
                    <Link to='/men' style={{textDecoration: 'none', marginTop:'24px'}}>
                        <span className='content-title'>Men</span>
                    </Link>
                    <Link to='/women' style={{textDecoration: 'none', marginTop:'24px'}}>
                        <span className='content-title'>Women</span>
                    </Link>
                </div> 
                <div className='nav-logo'>
                    <img src={Logo} alt='logo'/>
                </div>
        
                <div className='nav-content2'>
                    <input className='nav-search-bar' type='text' placeholder='Search for products'/>
                    <Link to='/login' style={{textDecoration:'none'}}><span className='content-cart'>{<PermIdentityOutlinedIcon />}Sign in</span></Link>
                    <Link to='/wishlist' style={{textDecoration:'none'}}><span className='content-cart'>{<FavoriteBorderOutlinedIcon />}Wishlist</span></Link>
                    <Link to='/cart' style={{textDecoration:'none'}}><span className='content-cart'>{<ShoppingBagOutlinedIcon />}Bag</span></Link>
                    <div className='nav-cart-count'>{getTotalCartItems()}</div>
                </div>
            </div>
        </div>
    )
}

export default Header