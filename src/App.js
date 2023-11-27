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

const App = () => {
  return (
    <div>
        <BrowserRouter>
    
          <Routes>
            <Route path='/' element={<Main />} />
              <Route path='/Men' element={<Product category="men" />} />
              <Route path='/Women' element={<Product category="women"/>} />
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