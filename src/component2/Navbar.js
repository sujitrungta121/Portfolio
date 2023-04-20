import "./Navbarstyles.css";
import React, {useState} from 'react';

import {Link} from "react-router-dom";
import {FaTimes,FaBars} from "react-icons/fa";

function Navbar() {
  const [click,setClick]=useState(false);
  const handleClick=()=>  setClick(!click);
  const [color,setColor]=useState(false);
  const changeColor=()=>{
    if(window.scrollY>=1){
    setColor(true);
  }
  else{
    setColor(false);
  }
};
window.addEventListener("scroll",changeColor);

  return (
    <div className={color?"header header-bg":"header"}>
     <Link to="/">
        <h1>portFolio</h1>
        </Link>
        <ul className={click?"navMenu active":"navMenu"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Project">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
        <FaTimes size={20} style={{color:"white"}}/>):
         ( <FaBars size={20} style={{color:"white"}}/>)}
        </div>
    </div>
  );
}
export default Navbar;