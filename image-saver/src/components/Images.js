import {Link} from 'react-router-dom';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {getSavedImages, unsaveImage} from '../actions/images';
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
    return (
            <div className="image">
                <Link to={`image/${id}`}>
                <Image  url = {URL}/>
                </Link>
                <button className={btn_class} onClick={handleSave} > {save? "Unsave Image":"Save Image"} </button> 
            </div>
    );
}
export default Images;