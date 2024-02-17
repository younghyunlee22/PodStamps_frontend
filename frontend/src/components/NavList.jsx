import { Link } from "react-router-dom";

const NavList = () => {
    console.log("move to the home page")
    return (
        <div className="nav-list">
            <Link to="/listen">
                <p>Listen</p>
            </Link>
            <Link to="/allpodstamps">
                <p>All PodStamps</p>
            </Link>
            <Link to="/mypodstamps">
                <p>My PodStamps</p>
            </Link>
            <Link to="/quicksave">
                <p>Quick Save</p>
            </Link>
        </div>
    );
}

export default NavList;