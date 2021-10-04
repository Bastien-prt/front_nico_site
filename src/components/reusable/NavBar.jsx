import { useState } from 'react';
import { Link } from 'react-router-dom';

import { RiShoppingBagLine } from 'react-icons/ri';

import "./NavBar.scss"

function NavBar() {
  const [open, setOpen]=useState(false)

  const clickHandler =() => {
    setOpen(!open);
    console.log(open)
  }

    return (
      <nav className="absolute w-screen  flex flex-row">
        
            <ul
              className= {open ? "hamburger active" : "hamburger"}
              onClick={clickHandler}
            >
              <li></li>
              <li></li>
              <li></li>
            </ul>
          
            <ul className={open ? "items-menu active" : "items-menu"}>
              <div className="flex flex-col md:flex-row">
                <li> <Link to="/"> Accueil </Link> </li>
                <li> A propos </li>
                <li> <Link to="/contact"> Contact </Link> </li>
              </div>
              <div className="flex">
                <li> <Link to="/login"> Login </Link></li>
                <li className="flex justify-center items-center"> <RiShoppingBagLine />  </li>
              </div>
            </ul>
         
      </nav>
    );
  }
  
  export default NavBar;



  // flex flex-row w-11/12 border-b border-white my-0 mx-auto justify-between text-white
