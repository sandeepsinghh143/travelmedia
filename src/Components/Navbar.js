import React from "react";
import {HiBell,HiUser} from "react-icons/hi";
import {BsFillBookmarkFill} from "react-icons/bs";
import {FaHouse} from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Navbar=()=>{
    const item=JSON.parse(localStorage.getItem("item"));
    return(
        <nav>
            <h2>TravelMedia.in</h2>
            <div className="nav-icons">
            <NavLink to="/"><FaHouse/></NavLink>
            <NavLink to="/notifications"><HiBell/></NavLink>
            <NavLink to="/item"><BsFillBookmarkFill/></NavLink>
            <NavLink to="/account"><HiUser/></NavLink>
            </div>
        </nav>
    )
}

export default Navbar;