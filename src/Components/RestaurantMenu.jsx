import React from 'react';
import { useEffect,useState } from 'react';
import Shimmer from './Shimmer';
import {useParams} from  "react-router";
const URL="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8684928&lng=75.7934677&restaurantId=";

const RestaurantMenu = () => {

  const {resId}=useParams();


    const [data, setData] = useState(null);

    useEffect(() => {

        fetchData();

        

    },[]);

    async function fetchData(){
        const  data  = await fetch(URL+resId);
        const json = await data.json();
        console.log(json);  
        setData(json);

    }


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
