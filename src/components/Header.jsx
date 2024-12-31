import NavList from "./NavList";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="nav-box">
      <div className="container">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/">
            <div className="header-logo-box">
              <h1>PodStamps</h1>
            </div>
          </Link>
          <NavList />
        </div>
        <div className="signin nav-item d-flex flex-row justify-content-end align-items-center">
          <Link to="/signin">
            <button className="nav-link btn-primary">Sign In</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
