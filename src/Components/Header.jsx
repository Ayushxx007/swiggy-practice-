import React from 'react'
import { Link } from 'react-router';

const Header = () => {
  return (
    <div>

        <div className="flex justify-between items-center  bg-neutral-100" id="header">

            <div className="left h-[100px] w-[100px] ">
                <img className="rounded-[40%]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7JVh5wy52_SOkuUi4Xl41ZkfufP0Tf3ctAQ&s"></img>

            </div>
            <div className="right">
                <ul className="flex m-5 p-5 justify-between items-center">
                    <li className="p-2 m-2 font-bold cursor-pointer"> <Link to="/">Home</Link></li>
                   
                <li className="p-2 m-2 font-bold cursor-pointer">class</li>
                <li className="p-2 m-2 font-bold cursor-pointer">   <Link to="/contact" >Contact us</Link>  </li>
                <li className="p-2 m-2 font-bold cursor-pointer"> <Link to="/about">About us</Link></li>
                <li className="p-2 m-2 font-bold cursor-pointer">yoyo</li></ul>

            </div>

        </div>




   
    </div>
  )
}

export default Header;
