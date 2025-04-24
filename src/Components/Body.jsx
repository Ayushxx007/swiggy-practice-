import React from 'react'
import ResCard from './ResCard';
import { useEffect,useState } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router';
import useOnline from '../Hooks/useOnline.js';

const Body = () => {

  const [restaurant, setRestaurant] = useState([]);
  const[filteredRestaurant,setFilteredRestaurant]=useState([]);
  const [searchText,setSearchText] = useState("");
  const online=useOnline();

  useEffect(() => {

     fetcher();



  },[]);

  async function fetcher(){

    try{
      const data= await  fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8684928&lng=75.7934677&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json= await data.json();
      console.log(json);
      console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      setRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      setFilteredRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      
      
    }
    catch(error){
      console.log(error);
    }

    

  

  }

  if(online===false){
    return <h1 className="text-9xl">you are offline</h1>;
  }


  if(restaurant.length==0){
    return<Shimmer/>;
  }else{
    return (
      <div>
          <div className="search p-5 m-5 flex">
  
              <input value={searchText} onChange={(e)=>setSearchText(e.target.value)} className="p-1 m-1 border-solid border-black border-1" type="text" placeholder="Search Restaurant"></input>
              <button onClick={()=>{

                const filtered=restaurant.filter((ele)=>ele.info.name.toLowerCase().includes(searchText.toLowerCase()) );
                setFilteredRestaurant(filtered);

               



              }}   className="p-1 m-1 border-1 border-solid border-black cursor-pointer">Search</button>
              <button onClick={()=>{

                const filtered=restaurant.filter((ele)=>ele.info.avgRating>=4);
                setFilteredRestaurant(filtered);



              }} className="p-1 m-1 border-solid border-black border-1 cursor-pointer">Filter</button>
  
  
  
  
          </div>
          <div className="resContainer flex p-5 m-5 flex-wrap">
          {filteredRestaurant.map((ele)=> { return <Link key={ele.info.id} to={"restaurants/"+ele.info.id}> < ResCard obx={ele.info}/></Link>} )}
         
           
  
  
  
          </div>
  
        
      </div>
    )

  }





 
}

export default Body;
