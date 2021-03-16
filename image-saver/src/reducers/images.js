import {combineReducers} from 'redux';
import ImageReducer from './imageReducer';
import SavedImagesReducer from './savedImageReducer';
import PageReducer from './pageReducer';
const Images = combineReducers({
    ImageList: ImageReducer,
    SavedImages: SavedImagesReducer,
    IncreasePage: PageReducer
});
export default Images;