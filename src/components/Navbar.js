import {Link} from "react-router-dom";

const Navbar = () => {

    return ( 
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/horoscop">Horoscop</Link></li>
                <li><Link to="/weather">Weather</Link></li>
                <li><Link to="/tier_List">Tier List</Link></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;