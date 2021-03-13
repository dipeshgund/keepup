import {combineReducers} from 'redux';
import ImageReducer from './imageReducer';
import SavedImagesReducer from './savedImageReducer';
const Images = combineReducers({
    ImageList: ImageReducer,
    SavedImages: SavedImagesReducer 
});
export default Images;