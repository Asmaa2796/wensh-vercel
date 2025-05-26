import React from "react";
import { Link } from "react-router-dom";

const SideNav = ({ isOpen, toggleSideNav }) => {
  // Close nav when a link is clicked (only on small screens)
  const handleLinkClick = () => {
    if (window.innerWidth < 1200) {
      toggleSideNav();
    }
  };

  return (
    <div className={`sidenav ${isOpen ? "openNav" : "closedNav"}`}>
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
          <Link to="#" onClick={handleLinkClick}>
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

        {/* Example Dropdown */}
        <li className="dropdown">
          <a
            className="dropdown-toggle sub-text"
            data-bs-toggle="dropdown"
            role="button"
            aria-expanded="false"
          >
            <img src="/img/icons/Icon5.png" alt="Icon5.png" /> موردين المشتريات
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
            <img src="/img/icons/Icon6.png" alt="Icon6.png" /> العملاء الأفراد
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
        <li className="dropdown">
          <a
            className="dropdown-toggle sub-text"
            data-bs-toggle="dropdown"
            role="button"
            aria-expanded="false"
          >
            <img src="/img/icons/Icon10.png" alt="Icon10.png" /> التقييمات
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
          <Link>
            <span className="sub-text">
              <img src="/img/icons/Icon10.png" alt="Icon11.png" /> الحسابات
              البنكية
            </span>
          </Link>
        </li>
        <li>
          <Link>
            <span className="sub-text">
              <img src="/img/icons/Icon10.png" alt="Icon12.png" /> السحب
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
            <img src="/img/icons/Icon10.png" alt="Icon13.png" /> طلبات الرحلات
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
              <img src="/img/icons/Icon10.png" alt="Icon13.png" /> الإيجارات
              (الرئيسي)
            </span>
          </Link>
        </li>
        <li>
          <Link to="#" onClick={handleLinkClick}>
            <span className="sub-text">
              <img src="/img/icons/Icon10.png" alt="Icon13.png" /> الإيجارات
              (الأسطول)
            </span>
          </Link>
        </li>
        <li>
          <Link to="#" onClick={handleLinkClick}>
            <span className="sub-text">
              <img src="/img/icons/Icon10.png" alt="Icon13.png" /> الإيجارات
              (التأجير)
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
