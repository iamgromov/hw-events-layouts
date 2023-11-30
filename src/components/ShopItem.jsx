import React from 'react';

export default function ShopItem( {item} ) {
    return (
        <div className='item'>
            <img src={item.img} alt='' />
            <h2 className='name'>{item.name}</h2>
            <p>{item.color}</p>
            <span className='price'>${item.price}</span>
            <button className='button'>Add to Cart</button>
        </div>
    )
}