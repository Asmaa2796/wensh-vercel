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
          </Route>
        </Routes>
        <Footer />
      </Router>
      <ToastContainer position="top-right" autoClose={1000} />
    </>
  );
}

export default App;
