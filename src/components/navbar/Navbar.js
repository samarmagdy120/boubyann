import "./Navbar.css";
import avatar from "../../assets/avatar.svg";
import { Link } from "react-router-dom";
const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
        <h1>Header</h1>
      </div>
      <div className="navbar__right">
        <Link to="#!">
          <img width="30" src={avatar} alt="avatar" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
