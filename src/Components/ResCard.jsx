import React from 'react'

let IMG="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const ResCard = (props) => {

  let {obx}=props;
 
  let {id,name,cloudinaryImageId,cuisines,avgRating,costForTwo,deliveryTime}=obx;



 


  return (
    <div>
        <div className="h-[350px] w-[200px] border-2 border-solid border-black p-2 m-2 relative overflow-auto">
            <div className="image h-[180px]">
                <img className="object-cotain w-full h-full " src={IMG+cloudinaryImageId}></img>

            </div>
            <div className="name flex justify-center items-center m-1 p-1">{name}</div>
            <div className=" flex justify-center items-center m-1 p-1">{cuisines.join(", ")}</div>
            <div className="rating flex justify-between">
                <h4>{avgRating}</h4>
                <h4>{deliveryTime}</h4>
                

            </div>
            <div className="flex justify-center items-center m-1 p-1">{costForTwo}</div>
            
       
        </div>
    
    </div>
  )
}

export default ResCard
