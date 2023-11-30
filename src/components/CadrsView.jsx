import ShopCard from "./ShopCard";

export default function CardsView( {cards} ) {
    return (
        <div className='cards'>
            {cards.map((card, index) => (
                <ShopCard card={card} key={index}/>
            ))}
        </div>  
    )
}