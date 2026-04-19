import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { TbReportSearch } from "react-icons/tb";
import { useNavigate, useLocation } from "react-router-dom";

import { MdOutlineCurrencyRupee, MdAddHome } from "react-icons/md";

import "./NavibarUi.css";

export default function NavibarUi() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log('location is ',location)

  return (
    <nav className="nav-container">
      {/* Desktop Menu */}
      <ul className="nav-box">
        <li
          className={`btn ${location.pathname === "/" ? "active" : ""}`}
          onClick={() => navigate("/")}
        >
          <MdAddHome />
          Home
        </li>
        <li
          className={`btn ${location.pathname === "/expense" ? "active" : ""}`}
          onClick={() => navigate("/expense")}
        >
          <MdOutlineCurrencyRupee />
          Expense
        </li>
        <li
          className={`btn ${location.pathname === "/reports" ? "active" : ""}`}
          onClick={() => navigate("/reports")}
        >
          <TbReportSearch />
          Reports
        </li>
        <li
          className={`btn ${location.pathname === "/profile" ? "active" : ""}`}
          onClick={() => navigate("/profile")}
        >
          <CgProfile />
          Profile
        </li>
      </ul>
    </nav>
  );
}
