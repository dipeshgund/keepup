import {useSelector} from 'react-redux';
import _ from 'lodash';
import {getUrl} from '../actions/images';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import Image from './Image';
const SavedImages = () => {
    const savedImages = useSelector(state=> state.SavedImages);
    const dispatch = useDispatch();
    const handleClick =value =>{
        dispatch(getUrl(value));
    };
    const showImages = ()=>{
        if(!_.isEmpty(savedImages)){
            return <div className="images"> 
                {savedImages.data.map(image=>(
                <div  className="container" key = {image.id}>
                    <Link to={`image/${image.id}`} value={image} onClick={handleClick}>
                    <Image  url = {image}/>
                    </Link>
                </div>
                ))}
            </div>
        }
        else{
        return <p>Save Images from Home to see saved Images here</p>
        }
    }
    return (
        <div>{showImages()}</div>
    );
}
 
export default SavedImages;