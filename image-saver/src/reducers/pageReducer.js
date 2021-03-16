const defaultPage = {
    page:0
};
const PageReducer = (state= defaultPage, action)=>{
    switch (action.type) {
        case "INCREMENT_PAGE":
            return{
                ...state,
                page: state.page+1
            }
        default:
            return state;
    }
}

export default PageReducer;