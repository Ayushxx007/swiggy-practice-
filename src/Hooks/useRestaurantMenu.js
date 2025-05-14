import {useEffect, useState} from "react";
const URL="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8684928&lng=75.7934677&restaurantId=";

const useRestaurantMenu=(resId)=>{

  const [data, setData] = useState(null);

  useEffect(() => {

    fetchData();

    

},[]);

async function fetchData(){
    const  data  = await fetch(URL+resId);
    const json = await data.json();
   
    setData(json);

    

}
return data;




};


export default useRestaurantMenu;