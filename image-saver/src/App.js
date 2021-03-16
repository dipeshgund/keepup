import {Provider} from 'react-redux';
import store from './store/store';
import Nav from './components/Nav';
import Home from './components/Home';
import SavedImages from './components/SavedImages';
import Image from './components/Image';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
const App = () => {
    return (
        <Router>
            <Provider store = {store}>
                <Nav/>
                <Switch>
                    <Route path="/" exact component={Landing}/>
                    <Route path="/home" exact component={Home}/>
                    <Route path="/saved-images" exact component={SavedImages}/>
                    <Route path="/image/"  component={Image}/>
                </Switch>
            </Provider>
        </Router>
    );
}
 
export default App;