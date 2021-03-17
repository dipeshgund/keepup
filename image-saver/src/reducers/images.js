import {combineReducers} from 'redux';
import ImageReducer from './imageReducer';
import SavedImagesReducer from './savedImageReducer';
import URLReducer from './url';
const Images = combineReducers({
    ImageList: ImageReducer,
    SavedImages: SavedImagesReducer,
    URL: URLReducer
});
export default Images;