import React from 'react'
import Element from './Element.jsx';
import { useState } from 'react';


const Accordian = ({title,itemCards,showItems,setShowIndex}) => {

  const handleClick=()=>{

    setShowIndex();


  }




  return (
    <div className="flex w-[100%] justify-center items-center flex-col ">

    

        <div onClick={handleClick}  className=" cursor-pointer header w-[50%] flex justify-between bg-gray-300 shadow-lg">
            <span className="p-3 m-3">{title} {itemCards.length}</span>
            <span className="p-3 m-3">↓</span>




        </div>
        <div className="body w-[50%] flex-col justify-between  shadow-lg">
            {showItems && itemCards.map((ele) =>  <Element key={title} item={ele.card.info}></Element> )}

        </div>

    
    





      
    </div>
  )
}

export default Accordian;

