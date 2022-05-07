import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../admin/components/sidebar/Sidebar";
import './Layout.css'

const LayoutAdmin = () => {
  return (
    
      <div className="grid__adminLayaout">
        <div>
          <Sidebar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    
  );
};

export default LayoutAdmin;
