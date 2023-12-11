import React, { useState } from 'react';
import '../asset/searchProduct.css';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import { ProductDB } from '../data/ProductDB';
import Card from './Card';
import '../asset/layout.css';

const SearchProduct = ({setSearchModal}) => {
    const [inputText, setInputText] = useState("");
    console.log(inputText);
  return (
    <>
        <div className='search-modal'>
            <div className='seach-modal-conrainer'>
            <div className='input-field'>
                <div className='search-field'>
                    <SearchIcon fontSize='0.8rem' style={{color:'rgb(71, 71, 71)'}} />
                    <input type='text' placeholder='Search for products' onChange={(event) => setInputText(event.target.value)} value={inputText}/>
                </div>
                <div className='search-close-btn'>
                    <ClearIcon onClick = {() => setSearchModal(false)} style={{color:'rgb(71, 71, 71)'}} />
                </div>
            </div>
            <div className='search-content'>
            <div className='container' onClick={window.scrollTo({top:0, behavior:'smooth'})}>
                {ProductDB
                .filter((item) => {
                    if(inputText === "") {
                        return null;
                    }else if((item.name.toLowerCase().includes(inputText.toLowerCase())) || (item.productCategory.toLowerCase().includes(inputText.toLowerCase()))) {
                        return item;
                    }else {
                        return null;
                    }
                })
                .map((item) => {
                    return (
                        
                        <Card 
                        key = {item.id}
                        id = {item.id}
                        name = {item.name} 
                        description = {item.description}
                        price = {item.price} 
                        image = {item.imgURL}
                        />
                    
                    )
                })}
            </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default SearchProduct