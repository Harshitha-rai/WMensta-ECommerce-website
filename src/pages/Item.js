import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrum';
import ProductDisplay from './ProductDisplay';



const Item = () => {
    const {ProductDB} = useContext(ShopContext);
    const {itemId} = useParams();
    const item = ProductDB.find((e) => e.id === Number(itemId));
    console.log(item);
  return (
    <div>
        <Breadcrum item={item} />
        <ProductDisplay item={item} />
    </div>
  )
}

export default Item