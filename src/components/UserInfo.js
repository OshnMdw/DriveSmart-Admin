import { Link, useLocation } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import { useDeviceWidth } from "../context/DeviceWidthContext";

function UserInfo({showProfile}) {
  const isSmall = useDeviceWidth();
  const location = useLocation(); // Get the current location

  const [activeTab, setActiveTab] = useState(""); // State to manage the active tab

  useEffect(() => {
    // When the location changes, update the active tab based on the current pathname
    setActiveTab(location.pathname);
  }, [location.pathname]);

  return (
    <div 
      style={{position:'fixed', width:`${showProfile ? 220 : 0}px`, height:`${showProfile ? 315 : 0}px` ,   right:'10px', top:'65px', maxHeight:'100vh' ,overflowY:'scroll', transition:'width,height 300ms ease-in-out'}} >
      <div className=" bg-dark-subtle px-2 py-3   border border-2   border-primary-subtle rounded-3 ">
        <h6 className=" text-center">DriveSmart</h6>
        <hr/>
        <ul className="nav nav-pills flex-column mb-auto ">
          
          <li className="nav-item">
            <Link to="/" className={`nav-link ${activeTab === "/" ? "active" : ""}`} >
              <i class="bi bi-speedometer2 pe-2"></i>
              Admin-Dashboard
            </Link>
          </li>
          <li>
            <Link to="/updateProfile" className={`nav-link ${activeTab === "/updateProfile" ? "active" : ""}`}>
              <i class="bi bi-person pe-2"></i>
              Profile
            </Link>
          </li>
          {/* <li>
            <Link to="/#contactus" className="nav-link text-dark">
              <i class="bi bi-chat-left pe-2"></i>
              Contact Admin
            </Link>
          </li> */}
        </ul>
        <hr/>
        <ul className="nav nav-pills flex-column mb-auto">
          <li>
            <Link to="/#contactus" className={`nav-link ${activeTab === "/#contactus" ? "active" : ""}`}>
              <i class="bi bi-box-arrow-in-right pe-2"></i>
              Log out
            </Link>
          </li>
        </ul>
        <hr/>
      </div>
    </div>
  )
}

export default UserInfo