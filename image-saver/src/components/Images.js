import {Link} from 'react-router-dom';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {getSavedImages, unsaveImage, getUrl} from '../actions/images';
import Image from './Image';
const Images = ({id,URL}) => {
    const [save, setSave] = useState(false);
    const [btn_class, setClass] = useState("notSaved");
    const dispatch = useDispatch();
    const handleSave =()=>{
        setSave(!save);
        setClass(btn_class==="notSaved"? "saved":"notSaved");
        if(!save) dispatch(getSavedImages(URL));
        if(save) dispatch(unsaveImage(URL));
    }
    const handleClick =()=>{
        dispatch(getUrl(URL));
    }
    return (
            <div className="image">
                <Link to={`image/${id}`} onClick={handleClick}>
                <Image  url = {URL}/>
                </Link>
                <button className={btn_class} onClick={handleSave} > {save? "Unsave Image":"Save Image"} </button> 
            </div>
    );
}
export default Images;