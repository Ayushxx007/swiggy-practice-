import React from 'react';
import Accordian from './Accordian';
import {useState} from "react";

import Shimmer from './Shimmer';
import useRestaurantMenu from '../Hooks/useRestaurantMenu';
import {useParams} from  "react-router";


const RestaurantMenu = () => {

  const [showIndex, setShowIndex] = useState(null);

  const {resId}=useParams();

    const  data=useRestaurantMenu(resId);



    


    if(data===null){
      return <Shimmer/>;
    }

    const {id,name,city}=data?.data?.cards[2]?.card?.card?.info;

    const itemCards= data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    
      const card=itemCards.filter(ele=>ele.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
     

    

    
   
   
    
      return (
        <div>

        <div className=" flex justify-center  font-extrabold "> 
           
            <div className='p-5 m-5 bg-amber-600'>{id}</div>
            <div className='p-5 m-5'>{name}</div>
            <div className='p-5 m-5 bg-green-600'>{city}</div>
          
            
         
        </div>
        <div className="Accordian">

          {
            card.map((ele,index)=><Accordian setShowIndex={()=>{setShowIndex(index) }}  showItems={index===showIndex && true} itemCards={ele.card.card.itemCards} title={ele.card.card.title}/> )

          }


        </div>



        </div>

      )

    



  
}

export default RestaurantMenu;
