import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SideNav = ({ isOpen, toggleSideNav }) => {
  const { t, i18n } = useTranslation("global");
  const location = useLocation();
  const currentPath = location.pathname;
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
      <div className="text-center mt-3">
        <Link to="/"><img src="/img/fav.png" alt="tripway" style={{width:"auto",maxHeight:"60px"}} /></Link>
      </div>
      <ul className="mb-0 mt-5 list-unstyled main-ul">
        <li className={`${currentPath === "/" ? "active" : ""}`}>
          <Link to="/" onClick={handleLinkClick}>
            <span className="text-gray">
              <img src="/img/icons/Icon1.png" alt="Icon1.png" />
              {t("sidenav.home")}
            </span>
          </Link>
        </li>
        <li className={`${currentPath === "/favourites" ? "active" : ""}`}>
          <Link to="favourites" onClick={handleLinkClick}>
            <span className="text-gray">
              <img src="/img/icons/Icon2.png" alt="Icon2.png" />
              {t("sidenav.favorites")}
            </span>
          </Link>
        </li>
        <li
          className={`${
            currentPath === "/export_orders"
              ? "active"
              : "" || currentPath === "/export_orders/add"
              ? "active"
              : ""
          }`}
        >
          <Link to="export_orders" onClick={handleLinkClick}>
            <span className="text-gray">
              <img src="/img/icons/Icon3.png" alt="Icon3.png" />
              {t("sidenav.exportRequests")}
            </span>
          </Link>
        </li>
        <li
          className={`${
            currentPath === "/branches"
              ? "active"
              : "" ||
                currentPath.startsWith("/branches/view_branch") ||
                currentPath.startsWith("/branches/edit_branch")
              ? "active"
              : ""
          }`}
        >
          <Link to="branches" onClick={handleLinkClick}>
            <span className="text-gray">
              <img src="/img/icons/Icon15.png" alt="Icon3.png" />
              {t("sidenav.winchBranches")}
            </span>
          </Link>
        </li>

        <li
          className={`${
            currentPath === "/vendors"
              ? "active"
              : "" || currentPath === "/vendors/add_vendor"
              ? "active"
              : ""
          }`}
        >
          <Link to="vendors" onClick={handleLinkClick}>
            <span className="text-gray">
              <img src="/img/icons/Icon5.png" alt="Icon3.png" />
              {t("sidenav.purchaseSuppliers")}
            </span>
          </Link>
        </li>
        <li
          className={`${
            currentPath === "/clients"
              ? "active"
              : "" || currentPath === "/clients/add_client"
              ? "active"
              : ""
          }`}
        >
          <Link to="clients" onClick={handleLinkClick}>
            <span className="text-gray">
              <img src="/img/icons/Icon5.png" alt="Icon6.png" />
              {t("sidenav.individualClients")}
            </span>
          </Link>
        </li>

        <li
          className={`dropdown ${
            currentPath === "/business_sector"
              ? "active"
              : "" || currentPath === "/business_sector/users"
              ? "active"
              : "" || currentPath === "/business_sector/official_recieving_docs"
              ? "active"
              : "" || currentPath === "/business_sector/contracts"
              ? "active"
              : "" || currentPath === "/business_sector/credit_limit"
              ? "active"
              : "" || currentPath === "/business_sector/business_docs"
              ? "active"
              : "" || currentPath === "/business_sector/add"
              ? "active"
              : ""
          }`}
        >
          <a
            className="dropdown-toggle text-gray"
            data-bs-toggle="dropdown"
            role="button"
            aria-expanded="false"
          >
            <img src="/img/icons/Icon7.png" alt="Icon7.png" />
            {t("sidenav.corporate")}
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link
                to="business_sector"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.businessList")}
              </Link>
            </li>
            <li>
              <Link
                to="business_sector/users"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.businessUsers")}
              </Link>
            </li>
            <li>
              <Link
                to="business_sector/official_recieving_docs"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.receivingOfficials")}
              </Link>
            </li>
            <li>
              <Link
                to="business_sector/contracts"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.contracts")}
              </Link>
            </li>
            <li>
              <Link
                to="business_sector/credit_limit"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.creditLimit")}
              </Link>
            </li>
            <li>
              <Link
                to="business_sector/business_docs"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.businessDocs")}
              </Link>
            </li>
          </ul>
        </li>
        <li
          className={`dropdown ${
            currentPath === "/tripway_partners_list"
              ? "active"
              : "" || currentPath === "/users_winch_partners"
              ? "active"
              : "" || currentPath === "/user_permissions"
              ? "active"
              : "" || currentPath === "/clients_partners_winch"
              ? "active"
              : "" || currentPath === "/partners_contracts"
              ? "active"
              : "" || currentPath === "/partners_docs"
              ? "active"
              : "" || currentPath === "/docs_carriers"
              ? "active"
              : ""
          }`}
        >
          <a
            className="dropdown-toggle text-gray"
            data-bs-toggle="dropdown"
            role="button"
            aria-expanded="false"
          >
            <img src="/img/icons/Icon8.png" alt="Icon8.png" />
            {t("sidenav.tripwayPartners")}
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link
                to="tripway_partners_list"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("labels.tripwayPartnersList")}
              </Link>
            </li>
            <li>
              <Link
                to="users_winch_partners"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("labels.winchPartnerUsers")}
              </Link>
            </li>
            <li>
              <Link
                to="user_permissions"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("labels.winchPartnerUserPermissions")}
              </Link>
            </li>
            <li>
              <Link
                to="clients_partners_winch"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("labels.winchPartnerClients")}
              </Link>
            </li>
            <li>
              <Link
                to="partners_contracts"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("labels.winchPartnerContracts")}
              </Link>
            </li>
            <li>
              <Link
                to="partners_docs"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("labels.partnerDocuments")}
              </Link>
            </li>
            <li>
              <Link
                to="docs_carriers"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("labels.documentCarriers")}
              </Link>
            </li>
          </ul>
        </li>
        <li
          className={`dropdown 
          ${
            currentPath === "/drivers"
              ? "active"
              : "" || currentPath === "/vehicles_plural"
              ? "active"
              : "" || currentPath === "/exceeded_commission_accounts"
              ? "active"
              : ""
          }`}
        >
          <a
            className="dropdown-toggle text-gray"
            data-bs-toggle="dropdown"
            role="button"
            aria-expanded="false"
          >
            <img src="/img/icons/Icon9.png" alt="Icon9.png" />
            {t("sidenav.serviceProviders")}
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link
                to="drivers"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("labels.drivers")}
              </Link>
            </li>
            <li>
              <Link
                to="vehicles_plural"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("labels.vehiclesPlural")}
              </Link>
            </li>
            <li>
              <Link
                to="exceeded_commission_accounts"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("labels.exceededCommissionAccounts")}
              </Link>
            </li>
          </ul>
        </li>
        <li className={`${currentPath === "/ratings" ? "active" : ""}`}>
          <Link to="ratings" onClick={handleLinkClick}>
            <span className="text-gray">
              <img src="/img/icons/Icon10.png" alt="Icon6.png" />
              {t("sidenav.ratings")}
            </span>
          </Link>
        </li>
        <li
          className={`dropdown 
          ${
            currentPath === "/bank_accounts"
              ? "active"
              : "" || currentPath === "/banks"
              ? "active"
              : ""
          }`}
        >
          <a
            className="dropdown-toggle text-gray"
            data-bs-toggle="dropdown"
            role="button"
            aria-expanded="false"
          >
            <img src="/img/icons/Icon9.png" alt="Icon9.png" />
            {t("sidenav.bankAccounts")}
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link
                to="bank_accounts"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.bankAccounts")}
              </Link>
            </li>
            <li>
              <Link
                to="banks"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.banks")}
              </Link>
            </li>
          </ul>
        </li>
        <li
          className={`${currentPath === "withdrawal_deposit" ? "active" : ""}`}
        >
          <Link to="withdrawal_deposit">
            <span className="text-gray">
              <img src="/img/icons/Icon16.png" alt="Icon12.png" />
              {t("sidenav.withdrawDeposit")}
            </span>
          </Link>
        </li>
        <li
          className={`dropdown 
          ${
            currentPath === "/trip_requests"
              ? "active"
              : "" || currentPath === "/internal_requests"
              ? "active"
              : "" || currentPath === "/compensation_approvals"
              ? "active"
              : "" || currentPath === "/order_issue_reports"
              ? "active"
              : "" || currentPath === "/order_document_reception"
              ? "active"
              : "" || currentPath === "/documents_files"
              ? "active"
              : "" || currentPath === "/order_summary"
              ? "active"
              : "" || currentPath === "/edit_order_details"
              ? "active"
              : "" || currentPath === "/edit_order_prices"
              ? "active"
              : "" || currentPath === "/edit_shipment_numbers"
              ? "active"
              : "" || currentPath === "/trip_reports"
              ? "active"
              : "" || currentPath === "/duplicate_shipment_numbers"
              ? "active"
              : "" || currentPath === "/late_entries"
              ? "active"
              : ""
          }`}
        >
          <a
            className="dropdown-toggle text-gray"
            data-bs-toggle="dropdown"
            role="button"
            aria-expanded="false"
          >
            <img src="/img/icons/Icon18.png" alt="Icon13.png" />{" "}
            {t("sidenav.tripRequests")}
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link
                to="trip_requests"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.tripRequests")}
              </Link>
            </li>
            <li>
              <Link
                to="internal_requests"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.internalRequests")}
              </Link>
            </li>
            <li>
              <Link
                to="compensation_approvals"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.compensationApprovals")}
              </Link>
            </li>
            <li>
              <Link
                to="order_issue_reports"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.orderIssueReports")}
              </Link>
            </li>
            <li>
              <Link
                to="order_document_reception"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.orderDocumentReception")}
              </Link>
            </li>
            <li>
              <Link
                to="documents_files"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.documentsAndFiles")}
              </Link>
            </li>
            <li>
              <Link
                to="order_summary"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.orderSummary")}
              </Link>
            </li>
            <li>
              <Link
                to="edit_order_details"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.editOrderDetails")}
              </Link>
            </li>
            <li>
              <Link
                to="edit_order_prices"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.editOrderPrices")}
              </Link>
            </li>
            <li>
              <Link
                to="edit_shipment_numbers"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.editShipmentNumbers")}
              </Link>
            </li>
            <li>
              <Link
                to="trip_reports"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.tripReports")}
              </Link>
            </li>
            <li>
              <Link
                to="duplicate_shipment_numbers"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.duplicateShipmentNumbers")}
              </Link>
            </li>
            <li>
              <Link
                to="late_entries"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.lateEntries")}
              </Link>
            </li>
          </ul>
        </li>

        {/* Example Static Links */}
        <li>
          <Link to="#" onClick={handleLinkClick}>
            <span className="text-gray">
              <img src="/img/icons/Icon18.png" alt="Icon13.png" />
              {t("sidenav.mainRentals")}
            </span>
          </Link>
        </li>
        <li>
          <Link to="#" onClick={handleLinkClick}>
            <span className="text-gray">
              <img src="/img/icons/Icon18.png" alt="Icon13.png" />
              {t("sidenav.fleetRentals")}
            </span>
          </Link>
        </li>
        <li>
          <Link to="#" onClick={handleLinkClick}>
            <span className="text-gray">
              <img src="/img/icons/Icon18.png" alt="Icon13.png" />
              {t("sidenav.leasingRentals")}
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
