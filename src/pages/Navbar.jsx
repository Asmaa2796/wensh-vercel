import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTitle } from "../context/TitleContext";
import { useTranslation } from "react-i18next";
const Navbar = ({ toggleSideNav, isSideNavOpen }) => {
  const { t, i18n } = useTranslation("global");

  const { title } = useTitle();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div
      className={`navbar topnav border-bottom py-3 ${
        isSideNavOpen ? "with-sidenav" : "full-width"
      }`}
    >
      <div className="container d-flex justify-between align-items-center">
        <div className="toggle_sidenav d-flex align-items-center gap-2">
          <span
            className="p-3 text-light"
            onClick={toggleSideNav}
            style={{ cursor: "pointer" }}
            aria-label="Toggle Side Navigation"
          >
            <i className="fa fa-bars"></i>
          </span>
          <b className="text-md text-light">{title}</b>
        </div>

        <ul className="actions d-flex align-items-center list-unstyled m-0">
          <li className="dropdown">
            <button
              className="dropdown-toggle bg-transparent border-0"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              aria-label="Language"
            >
              <span>
                <img src="/img/icons/flag.png" alt="flag" />
              </span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <button
                  onClick={() => changeLanguage("en")}
                  className="dropdown-item en-lang"
                >
                  English
                </button>
              </li>
              <li>
                <button
                  onClick={() => changeLanguage("ar")}
                  className="dropdown-item ar-lang"
                >
                  العربية
                </button>
              </li>
            </ul>
          </li>
          <li className="dropdown">
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
                <Link to="#" className="dropdown-item">
                  --
                </Link>
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
              <li>
                <Link to="#" className="dropdown-item">
                  {t('topnav.profile')}
                </Link>
              </li>
              <li>
                <Link to="#" className="dropdown-item">
                  {t('topnav.logout')}
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
