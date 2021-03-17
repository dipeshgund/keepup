import App from './App';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/store';
import './index.css';
ReactDOM.render(
    <Provider store ={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);