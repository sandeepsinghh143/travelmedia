import { POST_FETCHING,POST_FETCH_SUCCESS,POST_FETCH_ERROR } from "./actionTypes"; 

export const postFetching = () => {
    return {
        type: POST_FETCHING
    }
}

export const postFetchSuccess = (data) => {
    return {
        type: POST_FETCH_SUCCESS,
         payload: data
    }
}

export const postFetchError = (error) => {
    return {
        type: POST_FETCH_ERROR,
        payload: error
    }
}



export function fetchPost(){
    return function(dispatch){
        dispatch(postFetching())
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then((data)=>{
            dispatch(postFetchSuccess(data))
        })
        .catch((err)=>{
                dispatch(postFetchError(err.message))
        })
    }
}