import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './pages/Main';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import './style.css';
import Item from './pages/Item';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import CategoryProduct from './pages/CategoryProduct';

const App = () => {
  return (
    <div>
        <BrowserRouter>
    
          <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/men' element={<Home category="men" />} />
              <Route path='/women' element={<Home category="women"/>} />

              <Route path='/category' element={<CategoryProduct />} />
              <Route path='/product' element={<Product />} />
              
              <Route path='/item' element={<Item/>}>
                <Route path=':itemId' element={<Item/>}/>
              </Route>
              <Route path='/Cart' element={<Cart />} />
              <Route path='/Wishlist' element={<Wishlist />} />
              <Route path='/login' element ={<Login />} />
              <Route path='/register' element={<Register />} />
          </Routes>
          
        </BrowserRouter>
    </div>
  )
}

export default App