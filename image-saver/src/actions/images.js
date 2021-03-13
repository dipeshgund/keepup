import axios from 'axios';
export const getImageList =(page)=>async dispatch =>{
    try{
        const url = `https://picsum.photos/v2/list?page=${page}&limit=10`
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
        // const res = await axios.get(url);
        dispatch({
            type: "GET_SAVED_IMAGES",
            payload : url
        })
    }
    catch(e){
        console.log(e);
    }
}