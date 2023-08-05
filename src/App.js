import React,{useState} from "react";
import Navbar from "./Components/Navbar";
import { Routes,Route } from "react-router-dom";
import Home from "./Components/Home";
import Item from "./Components/item";
import Account from "./Components/Account";
import Notifications from "./Components/Notifications";

const App=()=>{
  const item=JSON.parse(localStorage.getItem("item"));
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/item" element={<Item/>}/>
        <Route path="/notifications" element={<Notifications/>}/>
        <Route path="/account" element={<Account/>}/>
      </Routes>
    </div>
  )
}

export default App;