import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getImageList} from '../actions/images';
import _ from 'lodash';
import Images from './Images';
const Home = () => {
    const dispatch = useDispatch();
    const imageList = useSelector(state => state.ImageList);
    useEffect(()=>{
        const fetchData = ()=>{
            dispatch(getImageList())
        }
        fetchData(1);
    },[dispatch]);
    const showImages =()=>{
        if(!_.isEmpty(imageList.db)){
            return <div className="images"> 
                {imageList.db.map(image=>(
                <div className="container" key = {image.id}>
                    <Images id= {image.id} URL={image.download_url}/>
                </div>
                ))}
                </div>
        }
        else {
            return <p>Loading...</p>
        } 
    }
    return(
        <div>{showImages()}</div>
    );
}
 
export default Home;