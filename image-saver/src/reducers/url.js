const defaultPage = {
    url: ""
};
const URLReducer = (state= defaultPage, action)=>{
    switch (action.type) {
        case "SAVE_URL":
            return{
                ...state,
                url: action.payload
            }
        default:
            return state;
    }
}

export default URLReducer;