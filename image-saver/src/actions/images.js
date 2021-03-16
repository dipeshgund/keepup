import axios from 'axios';
export const getImageList =()=>async dispatch =>{
    try{
        const url = "https://picsum.photos/v2/list";
        const res= await axios.get(url);
        dispatch(
            {
                type: "GET_IMAGES_SUCCESS",
                payload: res.data
            }
        )
    }
    catch(e){
        console.log(e);
        dispatch(
            {
                type:"GET_IMAGES_FAILED"
            }
        )
    }
}

export const getSavedImages = (url) => dispatch =>{
    try{
        dispatch({
            type: "GET_SAVED_IMAGES",
            payload : url
        })
    }
    catch(e){
        console.log(e);
    }
}

export const unsaveImage = (url) =>dispatch=>{
    try{
        dispatch({
            type: "UNSAVE_IMAGE",
            payload: url
        })
    }
    catch(e){
        console.log(e);
    }
}

export const increasePage = dispatch=>{
    try{
        dispatch({
            type: "INCREMENT_PAGE"
        })
    }
    catch(e){
        console.log(e);
    }
}