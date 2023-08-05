import React, { useState } from "react";
import {AiOutlineArrowLeft} from "react-icons/ai";
import { useNavigate, Link } from "react-router-dom";
import Post from "./Posts";
import {BsFillShareFill} from "react-icons/bs";
import {AiOutlineHeart,AiFillHeart} from "react-icons/ai";


const Item=()=>{
    const item=JSON.parse(localStorage.getItem("item"));
    const navigate=useNavigate();
    const [data,setData]=useState(item.body);
    const [clicked,setClicked]=useState(false);
    function changeColor(){
        setClicked(!clicked);
    }

    const shareContent = () => {
        if (navigator.share) {
          navigator.share({
            title: 'Share This Page',
            text: 'Check out this awesome content!',
            url: 'https://mysite.com',
          })
            .then(() => console.log('Shared successfully'))
            .catch((error) => console.error('Error sharing:', error));
        } else {
          console.log('Web Share API not supported');
        }
      };
        return (
        <div className="body">
                       <div className="back-button">
                        <button onClick={()=>navigate(-1)}><AiOutlineArrowLeft/></button>
                        <h1>Post Number #{item.id}</h1>
                       </div>
                        <div className="myflex">
                            <div className="image-portion">
                                <img alt={`post-${item.id}`} src={`https://picsum.photos/200?random={${item.id}`}/>
                                <div className="image-title">
                                    <h2>{item.title.charAt(0).toUpperCase()+item.title.slice(1)}</h2>
                                    <div>
                                        <Link className="social" onClick={shareContent}><BsFillShareFill/></Link>
                                        <Link className="social" onClick={changeColor}>{clicked?<AiFillHeart/>:<AiOutlineHeart/>}</Link>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button className="view-details" onClick={()=>setData(item.body.charAt(0).toUpperCase()+item.body.slice(1))}>Detail</button>
                                <button className="view-userInfo" onClick={()=>setData("Post Was Posted By User: "+item.userId)}>User Info</button>
                                <p className="details-final">{data}</p>
                            </div>
                        </div>
                        <div>
                            <h1 className="more-posts">More Posts</h1>
                            <Post/>
                        </div>
                    </div>
    )
};

export default Item;