import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const SideNav = ({ isOpen, toggleSideNav }) => {
  const sideNavRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        window.innerWidth < 1200 &&
        sideNavRef.current &&
        !sideNavRef.current.contains(event.target)
      ) {
        toggleSideNav();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside); // for touch devices (iPhone, Android)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen, toggleSideNav]);

  const handleLinkClick = () => {
    if (window.innerWidth < 1200) {
      toggleSideNav();
    }
  };

  return (
    <div
      ref={sideNavRef}
      className={`sidenav ${isOpen ? "openNav" : "closedNav"}`}
    >
      <span className="closeNav" onClick={toggleSideNav}>
        <i className="bi bi-x"></i>
      </span>
      <ul className="mb-0 mt-5 list-unstyled main-ul">
        <li>
          <Link to="/" onClick={handleLinkClick}>
            <span className="sub-text">
              <img src="/img/icons/Icon1.png" alt="Icon1.png" /> الرئيسية
            </span>
          </Link>
        </li>
        <li>
          <Link to="favourites" onClick={handleLinkClick}>
            <span className="sub-text">
              <img src="/img/icons/Icon2.png" alt="Icon2.png" /> المفضلة
            </span>
          </Link>
        </li>
        <li>
          <Link to="export_orders" onClick={handleLinkClick}>
            <span className="sub-text">
              <img src="/img/icons/Icon3.png" alt="Icon3.png" /> طلبات التصدير
            </span>
          </Link>
        </li>
        <li>
          <Link to="branches" onClick={handleLinkClick}>
            <span className="sub-text">
              <img src="/img/icons/Icon15.png" alt="Icon3.png" /> فروع الونش
            </span>
          </Link>
        </li>

        <li>
          <Link to="vendors" onClick={handleLinkClick}>
            <span className="sub-text">
              <img src="/img/icons/Icon5.png" alt="Icon3.png" /> موردين
              المشتريات
            </span>
          </Link>
        </li>
        <li>
          <Link to="clients" onClick={handleLinkClick}>
            <span className="sub-text">
              <img src="/img/icons/Icon5.png" alt="Icon6.png" />
               العملاء الأفراد
            </span>
          </Link>
        </li>

        <li className="dropdown">
          <a
            className="dropdown-toggle sub-text"
            data-bs-toggle="dropdown"
            role="button"
            aria-expanded="false"
          >
            <img src="/img/icons/Icon7.png" alt="Icon7.png" /> قطاع الأعمال
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link to="#" onClick={handleLinkClick} className="dropdown-item">
                عنصر 1
              </Link>
            </li>
            <li>
              <Link to="#" onClick={handleLinkClick} className="dropdown-item">
                عنصر 2
              </Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <a
            className="dropdown-toggle sub-text"
            data-bs-toggle="dropdown"
            role="button"
            aria-expanded="false"
          >
            <img src="/img/icons/Icon8.png" alt="Icon8.png" /> شركاء الونش
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link to="#" onClick={handleLinkClick} className="dropdown-item">
                عنصر 1
              </Link>
            </li>
            <li>
              <Link to="#" onClick={handleLinkClick} className="dropdown-item">
                عنصر 2
              </Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <a
            className="dropdown-toggle sub-text"
            data-bs-toggle="dropdown"
            role="button"
            aria-expanded="false"
          >
            <img src="/img/icons/Icon9.png" alt="Icon9.png" /> مزودي الخدمة
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link to="#" onClick={handleLinkClick} className="dropdown-item">
                عنصر 1
              </Link>
            </li>
            <li>
              <Link to="#" onClick={handleLinkClick} className="dropdown-item">
                عنصر 2
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="ratings" onClick={handleLinkClick}>
            <span className="sub-text">
              <img src="/img/icons/Icon10.png" alt="Icon6.png" />
              التقييمات
            </span>
          </Link>
        </li>
        <li>
          <Link>
            <span className="sub-text">
              <img src="/img/icons/Icon17.png" alt="Icon11.png" /> الحسابات
              البنكية
            </span>
          </Link>
        </li>
        <li>
          <Link>
            <span className="sub-text">
              <img src="/img/icons/Icon16.png" alt="Icon12.png" /> السحب
              والإيداع
            </span>
          </Link>
        </li>
        <li className="dropdown">
          <a
            className="dropdown-toggle sub-text"
            data-bs-toggle="dropdown"
            role="button"
            aria-expanded="false"
          >
            <img src="/img/icons/Icon18.png" alt="Icon13.png" /> طلبات الرحلات
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link to="#" onClick={handleLinkClick} className="dropdown-item">
                عنصر 1
              </Link>
            </li>
            <li>
              <Link to="#" onClick={handleLinkClick} className="dropdown-item">
                عنصر 2
              </Link>
            </li>
          </ul>
        </li>

        {/* Example Static Links */}
        <li>
          <Link to="#" onClick={handleLinkClick}>
            <span className="sub-text">
              <img src="/img/icons/Icon18.png" alt="Icon13.png" /> الإيجارات
              (الرئيسي)
            </span>
          </Link>
        </li>
        <li>
          <Link to="#" onClick={handleLinkClick}>
            <span className="sub-text">
              <img src="/img/icons/Icon18.png" alt="Icon13.png" /> الإيجارات
              (الأسطول)
            </span>
          </Link>
        </li>
        <li>
          <Link to="#" onClick={handleLinkClick}>
            <span className="sub-text">
              <img src="/img/icons/Icon18.png" alt="Icon13.png" /> الإيجارات
              (التأجير)
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
