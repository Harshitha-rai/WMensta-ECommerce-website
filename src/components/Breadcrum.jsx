import React from 'react';
import '../asset/breadcrum.css';
import Header from './Header';

const Breadcrum = (props) => {
    const {item} = props;
  return (
    <>
    <Header />
    <div className='breadcrum'>
        HOME / {item.category} / {item.name}
    </div>
    </>
  )
}

export default Breadcrum