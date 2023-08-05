import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import { fetchPost } from "../redux/action/postAction";
import { useDispatch,useSelector } from "react-redux";

const Post=()=>{
    const data = useSelector((state) => state.data);
    console.log(data);

    const dispatch = useDispatch();
    useEffect(
        () => {
            dispatch(fetchPost())
        },[]
    )

    return(
        <div className="post-items">
              {
                data && 
                data.map((item, index) => (
                    <div key={index}>
                        <img alt={`post-${item.id}`} src={`https://picsum.photos/200?random={${item.id}`}/>
                        <div className="details">
                            <div>
                                <h3>{item.title.charAt(0).toUpperCase()+item.title.slice(1,20)}</h3>
                                <p>{item.body.charAt(0).toUpperCase()+item.body.slice(1,50)}<Link to={`/item`} className="read-more" onClick={()=>{localStorage.setItem("item",JSON.stringify(item));window.scrollTo({top:0,behaviour:"smooth"})}}>,Read More...</Link></p>
                            </div>
                            <div className="next-btn"><Link to={`/item`} onClick={()=>{localStorage.setItem("item",JSON.stringify(item));window.scrollTo({top:0,behaviour:"smooth"})}}>&gt;</Link></div>
                        </div>
                        
                    </div>
                )
                )
              }
        </div>
    )
}

export default Post;