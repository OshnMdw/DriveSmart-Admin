import React, { useEffect, useState } from "react";
import { useDeviceWidth } from "../context/DeviceWidthContext";
import { Link, useLocation } from "react-router-dom";
import icon from '../assets/images/icon.png'

function OffCanvasNavComponent({ collapsed }) {
  const isSmall = useDeviceWidth();
  const location = useLocation(); // Get the current location

  const [activeTab, setActiveTab] = useState(""); // State to manage the active tab

  useEffect(() => {
    // When the location changes, update the active tab based on the current pathname
    setActiveTab(location.pathname);
  }, [location.pathname]);

  return (
    <div style={{width:isSmall ? `${collapsed? '100%': '0'}` : `${collapsed? 200: 0}px`, overflowX:'hidden', transition: `width ${isSmall? '100ms' :'200ms'} linear`}}  className="d-flex  flex-column flex-shrink-0 vh-100 m-0">
    <div className=''>
      <Link to="/" className=" pt-2 text-center d-flex align-items-center  my-4 me-md-auto text-dark text-decoration-none">
        <img src={icon}  width="200px"/>
      </Link>
    </div>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <span className=" text-info">MAIN MENU</span>
        <li className="nav-item">
          <Link to="/" className={`nav-link ${activeTab === "/" ? "active" : ""}`}>
            <i class="bi bi-speedometer2 pe-2 text-dark"></i>
            <span className="text-dark">Admin-Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/headings" className={`nav-link ${activeTab === "/headings" ? "active" : ""}`}>
            <i class="bi bi-mortarboard pe-2 text-dark"></i>
            <span className="text-dark">Study Materials</span>
          </Link>
        </li>
        <li>
          <Link to="/refund" className={`nav-link ${activeTab === "/refund" ? "active" : ""}`}>
            <i class="bi bi-credit-card pe-2 text-dark"></i>
            <span className="text-dark">Refunds</span>
          </Link>
        </li>
        <li>
          <Link to="/complaintsView" className={`nav-link ${activeTab === "/complaintsView" ? "active" : ""}`}>
            <i class="bi bi-chat-left pe-2 text-dark"></i>
            <span className="text-dark">Customer Support</span>
          </Link>
        </li>
        <li>
          <Link to="/reports" className={`nav-link ${activeTab === "/reports" ? "active" : ""}`}>
            <i class="bi bi-file-person pe-2 text-dark"></i>
            <span className="text-dark">Sign-Up Growth</span>
          </Link>
        </li>
      </ul>

      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <span className=" text-info">PREFERENCE</span>
        <li className="nav-item">
          <Link to="/updateProfile" className={`nav-link ${activeTab === "/updateProfile" ? "active" : ""}`} aria-current="page">
            <i class="bi bi-gear pe-2 text-dark"></i>
            <span className="text-dark">Settings</span>
          </Link>
        </li>
      </ul>
      <hr />
    </div>
  )
}

export default OffCanvasNavComponent;
