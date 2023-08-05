import React from "react";
import {FiSearch} from "react-icons/fi";
import { Link } from "react-router-dom";
import Post from "./Posts";

const Home=()=>{
    
    return(
    <div className="body">
        <h1>Social Media For Travellers</h1>
        <div className="search">
            <input type="text" placeholder="Search here..."/>
            <Link className="fi-search"><FiSearch/></Link>
        </div>
        <Post/>
    </div>
    )
}


export default Home;