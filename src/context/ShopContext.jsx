import React, { createContext, useState } from 'react';
import { ProductDB } from '../data/ProductDB';

export const ShopContext = createContext();

const getDefaultCart = () => {
    let cart = {};
    for(let index=0; index<ProductDB.length; index++) {
        cart[index] = 0;
    }
    return cart;
}
const getDefaultWhishlist = () => {
    let wishlist = {};
    for(let index=0; index<ProductDB.length; index++) {
        wishlist[index] = 0;
    }
    return wishlist;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart()); 
    const [wishlistItem, setWishlistItem] = useState(getDefaultWhishlist());
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const [psize , setPsize] = useState();

    const handleClick = (curSize, itemId) => {
        setPsize(curSize);
        
    }

    const addToCart = (itemId,itemPrice) => {
        setCartItems((prev) => (
            {...prev, [itemId]: prev[itemId] + 1}));
        setCartSubTotal(cartSubTotal + Number(itemPrice));
    }

    const removeFromCart = (itemId,itemPrice) => {
        setCartItems((prev) => (
            {...prev, [itemId]: prev[itemId] - 1}));
        setCartSubTotal(cartSubTotal - Number(itemPrice));
    }

    const deleteCartProduct = (itemId,itemPrice) => {
        setCartItems((prev) => (
            {...prev, [itemId]: 0}));
        setCartSubTotal(cartSubTotal - Number(itemPrice));
    }
   
    const getTotalCartItems = () => {
        let totalItems = 0;
        for(const item in cartItems) {
            if(cartItems[item] > 0) {
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }

    const addToWishlist = (itemId) => {
        setWishlistItem((prev) => (
            {...prev, [itemId]: prev[itemId]+1}
        ))
    }
    const getTotalWishlistItems = () => {
        let totalItems = 0;
        for(const item in wishlistItem) {
            if(wishlistItem[item] > 0) {
                totalItems += wishlistItem[item];
            }
        }
        return totalItems;
    }
    const removeFromWishlist = (itemId) => {
        setWishlistItem((prev) => (
            {...prev, [itemId]: 0}
        ))
    }

    const contextValue ={ProductDB, cartItems, psize, handleClick, addToCart, removeFromCart, deleteCartProduct, cartSubTotal, getTotalCartItems, addToWishlist, wishlistItem, removeFromWishlist, getTotalWishlistItems}
    return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
    )
}
export default ShopContextProvider;