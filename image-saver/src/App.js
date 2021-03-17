import Nav from './components/Nav';
import Home from './components/Home';
import SavedImages from './components/SavedImages';
import Image from './components/Image';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import {useSelector} from 'react-redux';
const App = () => {
    const Url = useSelector(state=> state.URL);
    console.log(Url.url);
    return (
        <Router>
            <Nav/>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/home" exact component={Home}/>
                <Route path="/saved-images" exact component={SavedImages}/>
                <Route path="/image/"  render={(props) =>(<Image {...props} url={Url.url} />)}/>
            </Switch>
        </Router>
    );
}
 
export default App;