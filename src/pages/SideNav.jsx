import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaHome } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { RiExportFill } from "react-icons/ri";
import { FaCodeBranch } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { VscGitPullRequestNewChanges } from "react-icons/vsc";
import { FaCar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import { PiHandDepositFill } from "react-icons/pi";
import { CiSquareQuestion } from "react-icons/ci";
import { MdOutlineCarRental } from "react-icons/md";
import { IoDocuments } from "react-icons/io5";
import { IoIosPricetags } from "react-icons/io";
import { GiProfit } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { MdManageHistory } from "react-icons/md";
import { FaFileInvoice } from "react-icons/fa6";
import { FaArchive } from "react-icons/fa";
import { MdOutlineCalculate } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TiGroup } from "react-icons/ti";
import { BiSolidReport } from "react-icons/bi";

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
              <FaHome />
              {t("sidenav.home")}
            </span>
          </Link>
        </li>
        <li className={`${currentPath === "/favourites" ? "active" : ""}`}>
          <Link to="favourites" onClick={handleLinkClick}>
            <span className="text-gray">
              <FaHeart />
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
              <RiExportFill />
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
              <FaCodeBranch/>
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
              <AiFillDollarCircle />
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
              <FaUser />
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
            <MdOutlineWork />
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
            <VscGitPullRequestNewChanges />
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
            <FaCar />
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
              <FaStar />
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
            <BsBank2 />
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
              <PiHandDepositFill />
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
            <CiSquareQuestion />
            {" "}
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
        <li
          className={`dropdown 
          ${
            currentPath === "/rental_requests"
              ? "active"
              : "" ||
            currentPath === "/rental_projects"
              ? "active"
              : "" ||
            currentPath === "/rental_contracts"
              ? "active"
              : "" ||
            currentPath === "/rental_request_summary"
              ? "active"
              : "" ||
            currentPath === "/rental_reports"
              ? "active"
              : "" ||
            currentPath === "/rental_contracts/add_rental_contract"
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
            <MdOutlineCarRental />
            {t("sidenav.mainRentals")}
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link
                to="rental_requests"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.rentalRequests")}
              </Link>
            </li>
            <li>
              <Link
                to="rental_projects"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.rentalProjects")}
              </Link>
            </li>
            <li>
              <Link
                to="rental_contracts"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.rentalContracts")}
              </Link>
            </li>
            <li>
              <Link
                to="rental_request_summary"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.rentalRequestSummary")}
              </Link>
            </li>
            <li>
              <Link
                to="rental_reports"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.rentalReports")}
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="#" onClick={handleLinkClick}>
            <span className="text-gray">
              <MdOutlineCarRental />
              {t("sidenav.fleetRentals")}
            </span>
          </Link>
        </li>
        <li>
          <Link to="#" onClick={handleLinkClick}>
            <span className="text-gray">
              <MdOutlineCarRental />
              {t("sidenav.leasingRentals")}
            </span>
          </Link>
        </li>
        <li className={`${currentPath === "/transport_documents" ? "active" : ""}`}>
          <Link to="transport_documents" onClick={handleLinkClick}>
            <span className="text-gray">
              <IoDocuments />
              {t("sidenav.transportDocuments")}
            </span>
          </Link>
        </li>
        <li
          className={`dropdown 
          ${
            currentPath === "/price_offer_requests"
              ? "active"
              : "" || currentPath === "/client_offers"
              ? "active"
              : "" || currentPath === "/provider_offers"
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
            <IoIosPricetags />
            {t("sidenav.priceOffers")}
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link
                to="price_offer_requests"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.priceOfferRequests")}
              </Link>
            </li>
            <li>
              <Link
                to="client_offers"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.clientOffers")}
              </Link>
            </li>
            <li>
              <Link
                to="provider_offers"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.providerOffers")}
              </Link>
            </li>
          </ul>
        </li>
        <li
          className={`dropdown 
          ${
            currentPath === "/profits"
              ? "active"
              : "" || currentPath === "/most_requested_services"
              ? "active"
              : "" || currentPath === "/active_accounts"
              ? "active"
              : "" || currentPath === "/taxes"
              ? "active"
              : "" || currentPath === "/tax_calculation"
              ? "active"
              : "" || currentPath === "/negative_accounts"
              ? "active"
              : "" || currentPath === "/lowest_cost_price"
              ? "active"
              : "" || currentPath === "/document_reception_reports"
              ? "active"
              : "" || currentPath === "/account_manager_request_reports"
              ? "active"
              : "" || currentPath === "/operator_trip_reports"
              ? "active"
              : "" || currentPath === "/trip_request_report"
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
            <GiProfit />
            {t("sidenav.reportsAndStatistics")}
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link
                to="profits"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.profits")}
              </Link>
            </li>
            <li>
              <Link
                to="most_requested_services"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.mostRequestedServices")}
              </Link>
            </li>
            <li>
              <Link
                to="active_accounts"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.activeAccounts")}
              </Link>
            </li>
            <li>
              <Link
                to="taxes"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.taxes")}
              </Link>
            </li>
            <li>
              <Link
                to="tax_calculation"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.taxCalculation")}
              </Link>
            </li>
            <li>
              <Link
                to="negative_accounts"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.negativeAccounts")}
              </Link>
            </li>
            <li>
              <Link
                to="lowest_cost_price"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.lowestCostPrice")}
              </Link>
            </li>
            <li>
              <Link
                to="document_reception_reports"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.documentReceptionReports")}
              </Link>
            </li>
            <li>
              <Link
                to="account_manager_request_reports"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.accountManagerRequestReports")}
              </Link>
            </li>
            <li>
              <Link
                to="operator_trip_reports"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.operatorTripReports")}
              </Link>
            </li>
            <li>
              <Link
                to="trip_request_report"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.tripRequestReport")}
              </Link>
            </li>
          </ul>
        </li>
        <li
          className={`dropdown 
          ${
            currentPath === "/purchase_requests"
              ? "active"
              : "" || currentPath === "/initial_purchase_requests"
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
            <GiReceiveMoney />
            {t("sidenav.purchaseRequests")}
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link
                to="purchase_requests"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.purchaseRequests")}
              </Link>
            </li>
            <li>
              <Link
                to="initial_purchase_requests"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.initialPurchaseRequests")}
              </Link>
            </li>
          </ul>
        </li>
        <li
          className={`dropdown 
          ${
            currentPath === "/maintenance"
              ? "active"
              : "" || currentPath === "/fuel"
              ? "active"
              : "" || currentPath === "/vehicle_statement"
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
            <MdManageHistory />
            {t("sidenav.fleetVehiclesManagement")}
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link
                to="maintenance"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.maintenance")}
              </Link>
            </li>
            <li>
              <Link
                to="fuel"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.fuel")}
              </Link>
            </li>
            <li>
              <Link
                to="vehicle_statement"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.vehicleStatement")}
              </Link>
            </li>
          </ul>
        </li>
        <li
          className={`dropdown 
          ${
            currentPath === ""
              ? "active"
              : "" || currentPath === ""
              ? "active"
              : "" || currentPath === ""
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
            <MdManageHistory />
            {t("sidenav.rentalVehicleManagement")}
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link
                to="maintenance"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.maintenance")}
              </Link>
            </li>
            <li>
              <Link
                to="fuel"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.fuel")}
              </Link>
            </li>
            <li>
              <Link
                to="vehicle_statement"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.vehicleStatement")}
              </Link>
            </li>
          </ul>
        </li>
        <li
          className={`dropdown 
          ${
            currentPath === "/sales_invoices"
              ? "active"
              : "" || currentPath === "/purchase_invoices"
              ? "active"
              : "" || currentPath === "/vouchers"
              ? "active"
              : "" || currentPath === "/customer_vouchers"
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
            <FaFileInvoice />
            {t("sidenav.invoicesAndDocuments")}
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link
                to="sales_invoices"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.salesInvoices")}
              </Link>
            </li>
            <li>
              <Link
                to="purchase_invoices"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.purchaseInvoices")}
              </Link>
            </li>
            <li>
              <Link
                to="vouchers"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.vouchers")}
              </Link>
            </li>
            <li>
              <Link
                to="customer_vouchers"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.customerVouchers")}
              </Link>
            </li>
          </ul>
        </li>
        <li
          className={`dropdown 
          ${
            currentPath === "/internal_sales"
              ? "active"
              : "" || currentPath === "/internal_purchases"
              ? "active"
              : "" || currentPath === "/internal_vouchers"
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
            <FaFileInvoice />
            {t("sidenav.internalInvoices")}
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link
                to="internal_sales"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.internalSales")}
              </Link>
            </li>
            <li>
              <Link
                to="internal_purchases"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.internalPurchases")}
              </Link>
            </li>
            <li>
              <Link
                to="internal_vouchers"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("labels.internalVouchers")}
              </Link>
            </li>
          </ul>
        </li>
        <li
          className={`dropdown 
          ${
            currentPath === "/chart_of_accounts"
              ? "active"
              : "" || currentPath === "/manual_entries"
              ? "active"
              : "" || currentPath === "/cost_center_accounts"
              ? "active"
              : "" || currentPath === "/financial_years"
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
            <MdOutlineCalculate />
            {t("sidenav.accounting")}
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link
                to="chart_of_accounts"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.chartOfAccounts")}
              </Link>
            </li>
            <li>
              <Link
                to="manual_entries"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.manualEntries")}
              </Link>
            </li>
            <li>
              <Link
                to="cost_center_accounts"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.costCenterAccounts")}
              </Link>
            </li>
            <li>
              <Link
                to="financial_years"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.financialYears")}
              </Link>
            </li>
          </ul>
        </li>
        <li
          className={`dropdown 
          ${
            currentPath === "/commissions"
              ? "active"
              : "" || currentPath === "/commission_reports"
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
            <FaMoneyBillTransfer />
            {t("sidenav.commissions")}
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link
                to="commissions"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.commissions")}
              </Link>
            </li>
            <li>
              <Link
                to="commission_reports"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.commissionReports")}
              </Link>
            </li>
          </ul>
        </li>
        <li
          className={`dropdown 
          ${
            currentPath === "/general_ledger"
              ? "active"
              : "" || currentPath === "/income_statement"
              ? "active"
              : "" || currentPath === "/balance_sheet"
              ? "active"
              : "" || currentPath === "/trial_balance"
              ? "active"
              : "" || currentPath === "/journal"
              ? "active"
              : "" || currentPath === "/account_statement"
              ? "active"
              : "" || currentPath === "/admin_account_statement"
              ? "active"
              : "" || currentPath === "/cost_center"
              ? "active"
              : "" || currentPath === "/tax_invoice_reports"
              ? "active"
              : "" || currentPath === "/customer_balances"
              ? "active"
              : "" || currentPath === "/customer_dues"
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
            <BiSolidReport />
            {t("sidenav.accountingReports")}
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link
                to="general_ledger"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.generalLedger")}
              </Link>
            </li>
            <li>
              <Link
                to="income_statement"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.incomeStatement")}
              </Link>
            </li>
            <li>
              <Link
                to="balance_sheet"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.balanceSheet")}
              </Link>
            </li>
            <li>
              <Link
                to="trial_balance"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.trialBalance")}
              </Link>
            </li>
            <li>
              <Link
                to="journal"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.journal")}
              </Link>
            </li>
            <li>
              <Link
                to="account_statement"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.accountStatement")}
              </Link>
            </li>
            <li>
              <Link
                to="admin_account_statement"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.adminAccountStatement")}
              </Link>
            </li>
            <li>
              <Link
                to="cost_center"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.costCenter")}
              </Link>
            </li>
            <li>
              <Link
                to="tax_invoice_reports"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.taxInvoiceReports")}
              </Link>
            </li>
            <li>
              <Link
                to="customer_balances"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.customerBalances")}
              </Link>
            </li>
            <li>
              <Link
                to="customer_dues"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.customerDues")}
              </Link>
            </li>
          </ul>
        </li>
        <li
          className={`dropdown 
          ${
            currentPath === "/team"
              ? "active"
              : "" || currentPath === "/team_transactions"
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
            <TiGroup />
            {t("sidenav.team")}
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link
                to="team"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.team")}
              </Link>
            </li>
            <li>
              <Link
                to="team_transactions"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.teamTransactions")}
              </Link>
            </li>
          </ul>
        </li>
        <li
          className={`dropdown 
          ${
            currentPath === "/company_documents"
              ? "active"
              : "" || currentPath === "/employee_documents"
              ? "active"
              : "" || currentPath === "/driver_documents"
              ? "active"
              : "" || currentPath === "/vehicle_documents"
              ? "active"
              : "" || currentPath === "/delegations_fleet"
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
            <FaBuilding />
            {t("sidenav.companyDocuments")}
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link
                to="company_documents"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.companyDocuments")}
              </Link>
            </li>
            <li>
              <Link
                to="employee_documents"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.employeeDocuments")}
              </Link>
            </li>
            <li>
              <Link
                to="driver_documents"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.driverDocuments")}
              </Link>
            </li>
            <li>
              <Link
                to="vehicle_documents"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.vehicleDocuments")}
              </Link>
            </li>
            <li>
              <Link
                to="delegations_fleet"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.delegationsFleet")}
              </Link>
            </li>
          </ul>
        </li>
        <li className={`${currentPath === "/archive" ? "active" : ""}`}>
          <Link to="archive" onClick={handleLinkClick}>
            <span className="text-gray">
              <FaArchive />
              {t("sidenav.archive")}
            </span>
          </Link>
        </li>
        <li
          className={`dropdown 
          ${
            currentPath === "/service_categories"
              ? "active"
              : "" || currentPath === "/compensation_categories"
              ? "active"
              : "" || currentPath === "/fleet_management_types"
              ? "active"
              : "" || currentPath === "/company_departments"
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
            <IoMdSettings />
            {t("sidenav.settings")}
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link
                to="service_categories"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.serviceCategories")}
              </Link>
            </li>
            <li>
              <Link
                to="compensation_categories"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.compensationCategories")}
              </Link>
            </li>
            <li>
              <Link
                to="fleet_management_types"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.fleetManagementTypes")}
              </Link>
            </li>
            <li>
              <Link
                to="company_departments"
                onClick={handleLinkClick}
                className="dropdown-item"
              >
                <i
                  className="bi bi-caret-left"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.companyDepartments")}
              </Link>
            </li>
           
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
