import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import SideNav from "./SideNav";
import { Outlet } from "react-router-dom";
import { TitleProvider } from "../context/TitleContext";

const Layout = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(window.innerWidth >= 1200);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1200);

  const toggleSideNav = () => setIsSideNavOpen(prev => !prev);

  useEffect(() => {
    const handleResize = () => {
      const isLarge = window.innerWidth >= 1200;
      setIsLargeScreen(isLarge);
      setIsSideNavOpen(isLarge); // open on large, closed on small
    };

    handleResize(); // Initial run
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const contentClass = isLargeScreen
    ? isSideNavOpen
      ? "with-sidenav"
      : "full-width"
    : "";

  return (
    <TitleProvider>
      <Navbar
        toggleSideNav={toggleSideNav}
        isSideNavOpen={isSideNavOpen}
        isLargeScreen={isLargeScreen}
      />
      <SideNav isOpen={isSideNavOpen} toggleSideNav={toggleSideNav} />
      <div className={`content_wrapper ${contentClass}`}>
        <div className="container">
          <Outlet />
        </div>
      </div>
    </TitleProvider>
  );
};

export default Layout;
