import React from 'react'

const URL="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"

const Element = ({item}) => {

    const final=URL+item.imageId;
   

  return (
   
    
    <div  className="p-5 m-2 bg-amber-200 shadow-lg flex justify-between items-center rounded-lg ">
        <div>
         <div>{item.name}</div>
         <div className=" text-l "> ₹ {item.price ? item.price/100 : item.defaultPrice/100}</div>
         </div>
         
         <div>
         <img className=" object-contain w-[200px] h-[200px]" src={final}></img>
         <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 relative bottom-[25px] right-[10px]">Add</button>
        
        
        

         </div>
        
       
       
         
       
        
       
      
    </div>
   
   
  )
}

export default Element
