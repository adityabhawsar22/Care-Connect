import React from "react";
import "./topbar.css";
import { Redirect, Link, useHistory } from "react-router-dom";


export default function Topbar() {
  const history = useHistory();
  const handleLogout = () => {
    localStorage.clear("staff");
    history.push("/");
  };

  
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Care Connect Admin</span>
        </div>
        <div className="topRight">
           <span className="logout" onClick={handleLogout}>
            Logout
          </span>
        </div>
      </div>
    </div>
  );
}
