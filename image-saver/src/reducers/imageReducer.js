const initialState ={
    db : [],
    errorMsg :"", 
};
const ImageReducer = (state= initialState, action) => {
    switch(action.type){
        case "GET_IMAGES_FAILED":
            return{
                ...state,
                errorMsg: "Unable to get Images"
            };
        case "GET_IMAGES_SUCCESS":
            return{
                ...state,
                errorMsg : "",
                db: action.payload
            };
        default:
            return state;
        
    }
}

export default ImageReducer;