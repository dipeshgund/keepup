import {Link} from 'react-router-dom';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {getSavedImages} from '../actions/images';
import { BrowserRouter as Router,Switch ,Route } from 'react-router-dom';
import SingleImage from './Image';
const Image = ({id,URL}) => {
    const [save, setSave] = useState(false);
    const [btn_class, setClass] = useState("notSaved");
    const dispatch = useDispatch();
    const handleSave =()=>{
        setSave(!save);
        setClass(btn_class==="notSaved"? "saved":"notSaved");
        dispatch(getSavedImages(URL));
        console.log(URL);
    }
    return (
        <Router>
            <div className="image">
                <Link to={`image/${id}`}>
                <img src= {URL}  alt = "Some error"/>
                </Link>
                <Switch>
                <Route exact path={`image/${id}`}  component={()=> {return <SingleImage url={URL}/>}}/>
                </Switch>
                <button className={btn_class} onClick={handleSave} > {save? "Unsave Image":"Save Image"} </button> 
            </div>
            
        </Router>
    );
}
export default Image;