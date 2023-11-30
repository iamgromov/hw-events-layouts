import React, { useState } from "react";
import IconSwitch from "./IconSwitch";
import CardsView from "./CadrsView";
import ListView from "./ListView";

export default function Store( {products}) {
    const [icon, setIcon] = useState('view_list');

    const onSwitch = () => {
        setIcon(() => {
          return (icon === 'view_module') ? 'view_list' : 'view_module';
        })
      }
      
      return (
        <div className='container'>
          <IconSwitch 
            icon={icon}
            onSwitch={onSwitch}
          />
          <main className='main'>
            {icon === 'view_list' ? <CardsView cards={products}/> : <ListView items={products}/>}
          </main>
        </div>
      )
}

