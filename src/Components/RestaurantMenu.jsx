import React from 'react';

import Shimmer from './Shimmer';
import useRestaurantMenu from '../Hooks/useRestaurantMenu';
import {useParams} from  "react-router";


const RestaurantMenu = () => {

  const {resId}=useParams();


   

    const  data=useRestaurantMenu(resId);



    


    if(data===null){
      return <Shimmer/>;
    }

    const {id,name,city}=data?.data?.cards[2]?.card?.card?.info;

    const itemCards= data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[7]?.card?.card?.itemCards;


    
   
   
    
      return (
        <div>
            RestaurantMenu
            <div>{id}</div>
            <div>{name}</div>
            <div>{city}</div>
            {itemCards.map((card)=>{ return <div key={id}>{card.card.info.name}</div>})}
            
         
        </div>
      )

    



  
}

export default RestaurantMenu;
