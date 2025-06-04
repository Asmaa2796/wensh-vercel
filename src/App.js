import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./pages/Footer";
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout";
import ExportOrders from "./components/exportOrders/ExportOrders";
import Favourites from "./components/favourites/Favourites";
import Branches from "./components/branches/Branches";
import EditBranch from "./components/branches/EditBranch";
import ViewBranch from "./components/branches/ViewBranch";
import Vendors from "./components/vendors/Vendors";
import AddVendor from "./components/vendors/AddVendor";
import Clients from "./components/clients/Clients";
import AddClient from "./components/clients/AddClient";
import Ratings from "./components/ratings/Ratings";
import BusinessSector from "./components/businessSector/BusinessSector";
import AddBusinessSector from "./components/businessSector/AddBusinessSector";
import BusinessSectorUsers from "./components/businessSector/BusinessSectorUsers";
import OfficialRecievingDocs from "./components/businessSector/OfficialRecievingDocs";
import BusinessSectorContracts from "./components/businessSector/BusinessSectorContracts";
import CreditLimit from "./components/businessSector/CreditLimit";
import BusinessDocs from "./components/businessSector/BusinessDocs";
import TripwayPartnersList from "./components/tripwayPartners/TripwayPartnersList";
import UsersWinchPartners from "./components/tripwayPartners/UsersWinchPartners";
import UserPermissions from "./components/tripwayPartners/UserPermissions";
import ClientsPartnersWinch from "./components/tripwayPartners/ClientsPartnersWinch";
import PartnersContracts from "./components/tripwayPartners/PartnersContracts";
import PartnersDocs from "./components/tripwayPartners/PartnersDocs";
import DocsCarriers from "./components/tripwayPartners/DocsCarriers";
import ExceededCommissionAccounts from "./components/serviceProviders/ExceededCommissionAccounts";
import Drivers from "./components/serviceProviders/Drivers";
import VehiclesPlural from "./components/serviceProviders/VehiclesPlural";
import AddProvider from "./components/serviceProviders/AddProvider";
import BankAccounts from "./components/bankAccounts/BankAccounts";
import Banks from "./components/bankAccounts/Banks";
import WithdrawalAndDeposit from "./components/withdrawalAndDeposit/WithdrawalAndDeposit";
import TripRequests from "./components/tripRequests/TripRequests";
import InternalRequests from "./components/tripRequests/InternalRequests";
import CompensationApprovals from "./components/tripRequests/CompensationApprovals";
import OrderIssueReports from "./components/tripRequests/OrderIssueReports";
import OrderDocumentReception from "./components/tripRequests/OrderDocumentReception";
import DocumentsAndFiles from "./components/tripRequests/DocumentsAndFiles";
import OrderSummary from "./components/tripRequests/OrderSummary";
import EditOrderDetails from "./components/tripRequests/EditOrderDetails";
import EditOrderPrices from "./components/tripRequests/EditOrderPrices";
import EditShipmentNumbers from "./components/tripRequests/EditShipmentNumbers";
import TripReports from "./components/tripRequests/TripReports";
import DuplicateShipmentNumbers from "./components/tripRequests/DuplicateShipmentNumbers";
import LateEntries from "./components/tripRequests/LateEntries";
import RentalRequests from "./components/mainRentals/RentalRequests";
import RentalProjects from "./components/mainRentals/RentalProjects";
import RentalContracts from "./components/mainRentals/RentalContracts";
import RentalRequestSummary from "./components/mainRentals/RentalRequestSummary";
import RentalReports from "./components/mainRentals/RentalReports";
import AddRentalContract from "./components/mainRentals/AddRentalContract";
import TransportDocuments from "./components/transportDocuments/TransportDocuments";
import PriceOfferRequests from "./components/priceOffers/PriceOfferRequests";
import ClientOffers from "./components/priceOffers/ClientOffers";
import ProviderOffers from "./components/priceOffers/ProviderOffers";
import Profits from "./components/reportsAndStatistics/Profits";
import MostRequestedServices from "./components/reportsAndStatistics/MostRequestedServices";
import ActiveAccounts from "./components/reportsAndStatistics/ActiveAccounts";
import Taxes from "./components/reportsAndStatistics/Taxes";
import TaxCalculation from "./components/reportsAndStatistics/TaxCalculation";
import NegativeAccounts from "./components/reportsAndStatistics/NegativeAccounts";
import LowestCostPrice from "./components/reportsAndStatistics/LowestCostPrice";
import DocumentReceptionReports from "./components/reportsAndStatistics/DocumentReceptionReports";
import AccountManagerRequestReports from "./components/reportsAndStatistics/AccountManagerRequestReports";
import OperatorTripReports from "./components/reportsAndStatistics/OperatorTripReports";
import TripRequestReport from "./components/reportsAndStatistics/TripRequestReport";

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="export_orders" element={<ExportOrders />} />
            <Route path="favourites" element={<Favourites />} />
            <Route path="branches" element={<Branches />} />
            <Route path="branches/edit_branch/:id" element={<EditBranch />} />
            <Route path="branches/view_branch/:id" element={<ViewBranch />} />
            <Route path="vendors" element={<Vendors />} />
            <Route path="vendors/add_vendor" element={<AddVendor />} />
            <Route path="clients" element={<Clients />} />
            <Route path="clients/add_client" element={<AddClient />} />
            <Route path="ratings" element={<Ratings />} />
            <Route path="business_sector" element={<BusinessSector />} />
            <Route path="business_sector/add" element={<AddBusinessSector />} />
            <Route path="business_sector/users" element={<BusinessSectorUsers />} />
            <Route path="business_sector/official_recieving_docs" element={<OfficialRecievingDocs />} />
            <Route path="business_sector/contracts" element={<BusinessSectorContracts />} />
            <Route path="business_sector/credit_limit" element={<CreditLimit />} />
            <Route path="business_sector/business_docs" element={<BusinessDocs />} />
            <Route path="tripway_partners_list" element={<TripwayPartnersList />} />
            <Route path="users_winch_partners" element={<UsersWinchPartners />} />
            <Route path="user_permissions" element={<UserPermissions />} />
            <Route path="clients_partners_winch" element={<ClientsPartnersWinch />} />
            <Route path="partners_contracts" element={<PartnersContracts />} />
            <Route path="partners_docs" element={<PartnersDocs />} />
            <Route path="docs_carriers" element={<DocsCarriers />} />
            <Route path="drivers" element={<Drivers />} />
            <Route path="drivers/add_provider" element={<AddProvider />} />
            <Route path="vehicles_plural" element={<VehiclesPlural />} />
            <Route path="exceeded_commission_accounts" element={<ExceededCommissionAccounts />} />
            <Route path="bank_accounts" element={<BankAccounts />} />
            <Route path="banks" element={<Banks />} />
            <Route path="withdrawal_deposit" element={<WithdrawalAndDeposit />} />
            <Route path="trip_requests" element={<TripRequests />} />
            <Route path="internal_requests" element={<InternalRequests />} />
            <Route path="compensation_approvals" element={<CompensationApprovals />} />
            <Route path="order_issue_reports" element={<OrderIssueReports />} />
            <Route path="order_document_reception" element={<OrderDocumentReception />} />
            <Route path="documents_files" element={<DocumentsAndFiles />} />
            <Route path="order_summary" element={<OrderSummary />} />
            <Route path="edit_order_details" element={<EditOrderDetails />} />
            <Route path="edit_order_prices" element={<EditOrderPrices />} />
            <Route path="edit_shipment_numbers" element={<EditShipmentNumbers />} />
            <Route path="trip_reports" element={<TripReports />} />
            <Route path="duplicate_shipment_numbers" element={<DuplicateShipmentNumbers />} />
            <Route path="late_entries" element={<LateEntries />} />
            <Route path="rental_requests" element={<RentalRequests />} />
            <Route path="rental_projects" element={<RentalProjects />} />
            <Route path="rental_contracts" element={<RentalContracts />} />
            <Route path="rental_request_summary" element={<RentalRequestSummary />} />
            <Route path="rental_reports" element={<RentalReports />} />
            <Route path="rental_contracts/add_rental_contract" element={<AddRentalContract />} />
            <Route path="transport_documents" element={<TransportDocuments />} />
            <Route path="price_offer_requests" element={<PriceOfferRequests />} />
            <Route path="client_offers" element={<ClientOffers />} />
            <Route path="provider_offers" element={<ProviderOffers />} />
            <Route path="profits" element={<Profits />} />
            <Route path="most_requested_services" element={<MostRequestedServices />} />
            <Route path="active_accounts" element={<ActiveAccounts />} />
            <Route path="taxes" element={<Taxes />} />
            <Route path="tax_calculation" element={<TaxCalculation />} />
            <Route path="negative_accounts" element={<NegativeAccounts />} />
            <Route path="lowest_cost_price" element={<LowestCostPrice />} />
            <Route path="document_reception_reports" element={<DocumentReceptionReports />} />
            <Route path="account_manager_request_reports" element={<AccountManagerRequestReports />} />
            <Route path="operator_trip_reports" element={<OperatorTripReports />} />
            <Route path="trip_request_report" element={<TripRequestReport />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
      <ToastContainer position="top-right" autoClose={1000} />
    </>
  );
}

export default App;
