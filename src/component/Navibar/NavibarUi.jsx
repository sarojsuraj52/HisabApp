import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { TbReportSearch } from "react-icons/tb";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { MdOutlineCurrencyRupee, MdAddHome } from "react-icons/md";

import "./NavibarUi.css";

export default function NavibarUi() {
  const navigate = useNavigate();
  const location = useLocation();
  const userAgent = useSelector((state) => state.platform.userAgent);
  const isAndroid = /Android/i.test(userAgent);

  return (
    <nav className="nav-container">
      {/* Desktop Menu */}
      <ul className="nav-box">
        <li
          className={`btn ${location.pathname === "/" ? "active" : ""}`}
          onClick={() => navigate("/")}
        >
         {isAndroid ? <MdAddHome /> : <span><MdAddHome size={25} /> Home</span>}

        </li>
        <li
          className={`btn ${location.pathname === "/expense" ? "active" : ""}`}
          onClick={() => navigate("/expense")}
        >
          {isAndroid ? <MdOutlineCurrencyRupee size={25}/> : <span><MdOutlineCurrencyRupee /> Expense</span>}

        </li>
        <li
          className={`btn ${location.pathname === "/reports" ? "active" : ""}`}
          onClick={() => navigate("/reports")}
        >
          {isAndroid ? <TbReportSearch size={25} /> : <span><TbReportSearch /> Reports</span>}

        </li>
        <li
          className={`btn ${location.pathname === "/profile" ? "active" : ""}`}
          onClick={() => navigate("/profile")}
        >
          {isAndroid ? (
            <CgProfile size={25} />
          ) : (
            <span>
              <CgProfile /> Profile
            </span>
          )}
        </li>
      </ul>
    </nav>
  );
}
