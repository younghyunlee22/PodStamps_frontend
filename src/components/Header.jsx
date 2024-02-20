import NavList from './NavList';
import {Link} from "react-router-dom";
import "./Header.scss";

const Header = () => {
    return (
        <div className="nav-box sticky-top">
            <div
                className="container d-flex flex-row justify-content-between align-items-center" style={{width:"100%"}}>
                <Link to="/">
                    <div className="header-logo-box d-flex flex-row justify-content-between align-items-center">
                        <h1>PodStamps</h1>
                    </div>
                </Link>
                <NavList/>
            </div>
        </div>

    );
};

export default Header;