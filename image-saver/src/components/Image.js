const Image = ({url}) => {
    // const id = props.location.pathname.replace('/image', '');
    // const url = `https://picsum.photos/id${id}/5000/5000`;
    return (
        <img src={url} alt="Cannot load"/>
    );
}
 
export default Image;