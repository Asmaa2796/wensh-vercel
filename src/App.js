import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./pages/Footer";
import Home from "./pages/Home/Home";
import ExportOrders from "./components/exportOrders/ExportOrders";
import Layout from "./pages/Layout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="export_orders" element={<ExportOrders />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
      <ToastContainer position="top-right" autoClose={1000} />
    </>
  );
}

export default App;
