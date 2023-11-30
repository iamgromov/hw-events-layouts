import React from 'react';

export default function ShopCard( {card} ) {
    return (
        <div className='card'>
            <h2 className='name'>{card.name}</h2>
            <p>{card.color}</p>
            <img src={card.img} alt='' />
            <div className='cardInfo'>
                <span className='price'>${card.price}</span>
                <button className='button'>Add to Cart</button>
            </div>
        </div>
    )
}