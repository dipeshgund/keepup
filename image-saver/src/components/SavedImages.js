import {useSelector} from 'react-redux';
import _ from 'lodash';
const SavedImages = () => {
    const savedImages = useSelector(state=> state.SavedImages);
    const showImages = ()=>{
        if(!_.isEmpty(savedImages)){
            return <div className="images"> 
                {savedImages.data.map(image=>(
                <div  className="container" key = {image.id}>
                    <img src={image} alt="Unable to load"/>
                </div>
                ))}
            </div>
        }
        return <p>Save Images from Home to see saved Images here</p>
    }
    return (
        <div>{showImages()}</div>
    );
}
 
export default SavedImages;