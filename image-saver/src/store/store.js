import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import Images from '../reducers/images';
const store = createStore(Images, composeWithDevTools(applyMiddleware(thunk)));

export default store;