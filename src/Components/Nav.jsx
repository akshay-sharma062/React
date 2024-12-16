import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="shadow sticky z-50 top-0 hover:translate-y-3 hover:shadow-xl hover:shadow-yellow-500 duration-700">
      <div className="sm:flex bg-purple-400 justify-around bg-opacity-50  top-10 ">
        <h1 className="m-3 px-3 font-bold text-yellow-500 text-3xl cursor-pointer hover:text-white duration-700">
          Akshay
        </h1>
        <ul className="sm:flex text-white justify-end content-center items-center">
          <li>
            
            <NavLink to={"/"}
            className={({isActive})=>`m-4 my-2 px-4 ${isActive?"text-yellow-400":"text-white"} font-bold font-serif cursor-pointer hover:text-yellow-400 duration-700 :
           ` }>
            Home
            </NavLink>
          </li>
          <li>
            
            <NavLink to={"/About"}
            className={({isActive})=>`m-4 my-2 px-4 ${isActive?"text-yellow-400":"text-white"} font-bold font-serif cursor-pointer hover:text-yellow-400 duration-700 :
           ` }>
            About
            </NavLink>
          </li>
         
        
          <li>  
          <NavLink to={"/Contact"}
            className={({isActive})=>`m-4 my-2 px-4 ${isActive?"text-yellow-400":"text-white"} font-bold font-serif cursor-pointer hover:text-yellow-400 duration-700 :
           ` }>
            Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
