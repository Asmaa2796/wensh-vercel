import React from "react";
import { Link } from "react-router-dom";
import { useTitle } from "../context/TitleContext";

const Navbar = ({ toggleSideNav, isSideNavOpen }) => {
  const { title } = useTitle();

  return (
    <div className={`navbar topnav border-bottom py-3 ${isSideNavOpen ? "with-sidenav" : "full-width"}`}>
      <div className="container d-flex justify-between align-items-center">
        <div className="toggle_sidenav d-flex align-items-center gap-2">
          <span className="p-3 text-lighter" onClick={toggleSideNav} style={{ cursor: "pointer" }} aria-label="Toggle Side Navigation">
            <i className="fa fa-bars"></i>
          </span>
          <b className="text-md text-lighter">{title}</b>
        </div>

        <ul className="actions d-flex align-items-center list-unstyled m-0">
          <li className="me-3">
            <span>
              <img src="/img/icons/flag.png" alt="flag" />
            </span>
          </li>

          <li className="dropdown me-3">
            <button
              className="dropdown-toggle bg-transparent border-0 notification"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              aria-label="Notifications"
            >
              <span>7</span>
              <img src="/img/icons/notification.png" alt="notification" />
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <Link to="#" className="dropdown-item">إشعارات</Link>
              </li>
            </ul>
          </li>

          <li className="dropdown">
            <button
              className="dropdown-toggle bg-transparent border-0"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              aria-label="User Menu"
            >
              <img src="/img/icons/user.png" alt="user" />
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><Link to="#" className="dropdown-item">الملف الشخصي</Link></li>
              <li><Link to="#" className="dropdown-item">تسجيل خروج</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
