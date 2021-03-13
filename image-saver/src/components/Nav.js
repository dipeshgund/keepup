import {Link} from 'react-router-dom';
const Nav = () => {
    return (
        <nav>
            <Link className="links" to="/">
                <h1>Logo</h1>
            </Link>
            <ul className= "navLinks">
                <Link className="links" to="/home">
                    <li>Home</li>
                </Link>
                <Link className="links" to="/saved-images">
                    <li>Saved Images</li>
                </Link>
                
            </ul>
        </nav>
    );
}
 
export default Nav;