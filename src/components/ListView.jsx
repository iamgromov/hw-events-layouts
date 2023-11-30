import React from "react";
import ShopItem from "./ShopItem";

export default function ListView( {items} ) {
    return (
        <div className='items'>
            {items.map((item, index) => (
                <ShopItem item={item} key={index}/>
            ))}
        </div>
    )
}