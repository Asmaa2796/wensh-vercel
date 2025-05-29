import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const SideNav = ({ isOpen, toggleSideNav }) => {
  const {t,i18n} = useTranslation('global');
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
            <span className="text-gray">
              <img src="/img/icons/Icon1.png" alt="Icon1.png" /> 
              {t('sidenav.home')}
            </span>
          </Link>
        </li>
        <li>
          <Link to="favourites" onClick={handleLinkClick}>
            <span className="text-gray">
              <img src="/img/icons/Icon2.png" alt="Icon2.png" />
              {t('sidenav.favorites')}
            </span>
          </Link>
        </li>
        <li>
          <Link to="export_orders" onClick={handleLinkClick}>
            <span className="text-gray">
              <img src="/img/icons/Icon3.png" alt="Icon3.png" /> 
              {t('sidenav.exportRequests')}
            </span>
          </Link>
        </li>
        <li>
          <Link to="branches" onClick={handleLinkClick}>
            <span className="text-gray">
              <img src="/img/icons/Icon15.png" alt="Icon3.png" /> 
              {t('sidenav.winchBranches')}
            </span>
          </Link>
        </li>

        <li>
          <Link to="vendors" onClick={handleLinkClick}>
            <span className="text-gray">
              <img src="/img/icons/Icon5.png" alt="Icon3.png" />
              {t('sidenav.purchaseSuppliers')}
            </span>
          </Link>
        </li>
        <li>
          <Link to="clients" onClick={handleLinkClick}>
            <span className="text-gray">
              <img src="/img/icons/Icon5.png" alt="Icon6.png" />
               {t('sidenav.individualClients')}
            </span>
          </Link>
        </li>

        <li className="dropdown">
          <a
            className="dropdown-toggle text-gray"
            data-bs-toggle="dropdown"
            role="button"
            aria-expanded="false"
          >
            <img src="/img/icons/Icon7.png" alt="Icon7.png" />
            {t('sidenav.corporate')}
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link to="business_sector" onClick={handleLinkClick} className="dropdown-item">
                <i className="bi bi-caret-left" style={{marginLeft:"2px"}}></i> 
                {t('sidenav.businessList')}
              </Link>
            </li>
            <li>
              <Link to="business_sector/users" onClick={handleLinkClick} className="dropdown-item">
              <i className="bi bi-caret-left" style={{marginLeft:"2px"}}></i> 
                {t('sidenav.businessUsers')}
              </Link>
            </li>
            <li>
              <Link to="business_sector/official_recieving_docs" onClick={handleLinkClick} className="dropdown-item">
              <i className="bi bi-caret-left" style={{marginLeft:"2px"}}></i> 
                {t('sidenav.receivingOfficials')}
              </Link>
            </li>
            <li>
              <Link to="business_sector/contracts" onClick={handleLinkClick} className="dropdown-item">
              <i className="bi bi-caret-left" style={{marginLeft:"2px"}}></i> 
                {t('sidenav.contracts')}
              </Link>
            </li>
            <li>
              <Link to="business_sector/credit_limit" onClick={handleLinkClick} className="dropdown-item">
              <i className="bi bi-caret-left" style={{marginLeft:"2px"}}></i> 
                {t('sidenav.creditLimit')}
              </Link>
            </li>
            <li>
              <Link to="business_sector/business_docs" onClick={handleLinkClick} className="dropdown-item">
              <i className="bi bi-caret-left" style={{marginLeft:"2px"}}></i> 
                {t('sidenav.businessDocs')}
              </Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <a
            className="dropdown-toggle text-gray"
            data-bs-toggle="dropdown"
            role="button"
            aria-expanded="false"
          >
            <img src="/img/icons/Icon8.png" alt="Icon8.png" /> 
            {t('sidenav.tripwayPartners')}
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link to="#" onClick={handleLinkClick} className="dropdown-item">
                -
              </Link>
            </li>
            <li>
              <Link to="#" onClick={handleLinkClick} className="dropdown-item">
                -
              </Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <a
            className="dropdown-toggle text-gray"
            data-bs-toggle="dropdown"
            role="button"
            aria-expanded="false"
          >
            <img src="/img/icons/Icon9.png" alt="Icon9.png" /> 
            {t('sidenav.serviceProviders')}
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link to="#" onClick={handleLinkClick} className="dropdown-item">
                -
              </Link>
            </li>
            <li>
              <Link to="#" onClick={handleLinkClick} className="dropdown-item">
                -
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="ratings" onClick={handleLinkClick}>
            <span className="text-gray">
              <img src="/img/icons/Icon10.png" alt="Icon6.png" />
              {t('sidenav.ratings')}
            </span>
          </Link>
        </li>
        <li>
          <Link>
            <span className="text-gray">
              <img src="/img/icons/Icon17.png" alt="Icon11.png" />
              {t('sidenav.bankAccounts')}
            </span>
          </Link>
        </li>
        <li>
          <Link>
            <span className="text-gray">
              <img src="/img/icons/Icon16.png" alt="Icon12.png" />
              {t('sidenav.withdrawDeposit')}
            </span>
          </Link>
        </li>
        <li className="dropdown">
          <a
            className="dropdown-toggle text-gray"
            data-bs-toggle="dropdown"
            role="button"
            aria-expanded="false"
          >
            <img src="/img/icons/Icon18.png" alt="Icon13.png" /> {t('sidenav.tripRequests')}
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link to="#" onClick={handleLinkClick} className="dropdown-item">
               -
              </Link>
            </li>
            <li>
              <Link to="#" onClick={handleLinkClick} className="dropdown-item">
                -
              </Link>
            </li>
          </ul>
        </li>

        {/* Example Static Links */}
        <li>
          <Link to="#" onClick={handleLinkClick}>
            <span className="text-gray">
              <img src="/img/icons/Icon18.png" alt="Icon13.png" />
              {t('sidenav.mainRentals')}
            </span>
          </Link>
        </li>
        <li>
          <Link to="#" onClick={handleLinkClick}>
            <span className="text-gray">
              <img src="/img/icons/Icon18.png" alt="Icon13.png" /> 
              {t('sidenav.fleetRentals')}
            </span>
          </Link>
        </li>
        <li>
          <Link to="#" onClick={handleLinkClick}>
            <span className="text-gray">
              <img src="/img/icons/Icon18.png" alt="Icon13.png" />
              {t('sidenav.leasingRentals')}
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
