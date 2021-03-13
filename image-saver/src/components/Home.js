import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getImageList} from '../actions/images';
import _ from 'lodash';
import Image from './Images';
import InfiniteScroll from 'react-infinite-scroll-component';

const Home = () => {
    const dispatch = useDispatch();
    const imageList = useSelector(state => state.ImageList);
    // const [page, setPage] = useState(1);
    
    useEffect(()=>{
        const fetchData = (page )=>{
            dispatch(getImageList(page))
        }
        fetchData(1);
    },[dispatch]);
    
    // const handleObserver = ()=>{
    //     showImages();
    //     if(imageList.db.length%10===0){
    //         setPage(page+1);
    //     }
    // }
    const showImages =()=>{
        if(!_.isEmpty(imageList.db)){
            return <div className="images"> 
                {imageList.db.map(image=>(
                <div className="container" key = {image.id}>
                    <Image id= {image.id} URL={image.download_url}/>
                </div>
                ))}
                </div>
        }
        else {
            return <p>Loading...</p>
        } 
    }
    return(
        <InfiniteScroll
            dataLength = {imageList.db.length}
            next = {showImages}
            hasMore = {true}
            loader = {<h4>Getting More Images...</h4>}
        >
            <div>{showImages()}</div>
        </InfiniteScroll>
    );
}
 
export default Home;