import React from "react";
import { useContext } from "react";
import { UserContext } from "../../Context/userContext";
import Navbar from "./Navbar";
import Dashboard from "../../pages/Home/Dashboard";

function DashboardLayout({ children }) {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default DashboardLayout;
