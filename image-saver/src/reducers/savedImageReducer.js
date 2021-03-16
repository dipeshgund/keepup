const defaultState ={
    data: [],
    errorMsg: ""
}

const SavedImagesReducer = (state = defaultState, action) => {
    switch(action.type){
        case "GET_SAVED_IMAGES":
            return{
                ...state,
                errorMsg : "",
                data: [...state.data, action.payload]
            };
        case "UNSAVE_IMAGE":
            return{
                ...state,
                errorMsg: "",
                data: [...state.data.filter(url => url!== action.payload)]
            }
        default:
            return state
    }
}
 
export default SavedImagesReducer;