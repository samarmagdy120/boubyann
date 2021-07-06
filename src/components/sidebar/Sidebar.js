import "./Sidebar.css";
import { links } from "../../utils/constant";
import { Link } from "react-router-dom";
const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <h1>Boubyan</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        {links.map((item) => {
          return (
            <div className="sidebar__link active_menu_link">
              <i className={item.icon}></i>
              <Link to={item.path} onClick={() => closeSidebar()}>
                {item.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
