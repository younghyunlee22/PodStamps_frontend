import NavList from './NavList';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Link to="/"><p className="logo">PodStamps</p></Link>
            <NavList/>
            <Link to="/register"><p>Register</p></Link>
            <Link to="/signin"><p>Sign in</p></Link>
            </div>
)
    ;
}

export default Header;