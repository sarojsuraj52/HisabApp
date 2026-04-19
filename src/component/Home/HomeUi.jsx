import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPlatform } from "../features/platformSlice";
import { FaArrowUp, FaArrowDown, FaWallet } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import "./Home.css";
import { IoMdNotifications } from "react-icons/io";
import { FaRegEyeSlash, FaEye } from "react-icons/fa";

export const HomeUi = () => {
  const dispatch = useDispatch();
  const userAgent = useSelector((state) => state.platform.userAgent);
  const [currDate, setCurrDate] = useState("");
  const [greeting, setGreeting] = useState("");
  const [showBalance, setShowBalance] = useState(false);

  useEffect(() => {
    dispatch(getPlatform());
    // get current date
    const now = new Date();

    const date = now.getDate();
    const year = now.getFullYear();

    const monthName = now.toLocaleString("default", { month: "long" });

    // function for st / nd / rd / th
    function getDaySuffix(d) {
      if (d > 3 && d < 21) return "th";
      switch (d % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    }

    const formatted = `${date}${getDaySuffix(date)} ${monthName}, ${year}`;

    setCurrDate(formatted);

    //get greetings
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      setGreeting("Good Morning");
    } else if (hour >= 12 && hour < 17) {
      setGreeting("Good Afternoon");
    } else if (hour >= 17 && hour < 21) {
      setGreeting("Good Evening");
    } else {
      setGreeting("Good Night 🌙");
    }
  }, [dispatch]);

  const balance ='25,460'
  return (
    <div className="main-container">
      <div className="header-box">
        <div>
          <h1>{greeting}, Suraj!</h1>
          <h4>You're on {userAgent}</h4>
        </div>
        <div className="notification">
          <IoMdNotifications size={26} />
        </div>
      </div>
      <div>
        <div className="home-container">
          {/* 💰 Balance Card */}
          <div className="balance-card">
            <div>
              <div className="balance-top">
                <h3>My Balance</h3>{" "}
                <div  onClick={() => setShowBalance(!showBalance)}>{showBalance ? <FaRegEyeSlash /> : <FaEye />}</div>
              </div>

               {showBalance ? `₹ ${balance}` : "₹ ••••••"}
              <p className="sub-text">Available this month</p>
            </div>
            {/* 📊 Income & Expense */}
            <div className="summary-box">
              <div className="card income">
                <div>
                  <FaArrowDown />
                  <h4>₹ 40,000</h4>
                  <p>Income</p>
                </div>
              </div>

              <div className="card expense">
                <div>
                  <FaArrowUp />
                  <h4>₹ 14,550</h4>
                  <p>Expense</p>
                </div>
              </div>
            </div>
            <div>
              <h4>Today: {currDate}</h4>
            </div>
          </div>

          {/* ⚡ Quick Action */}
          <div className="quick-add">
            <MdAdd size={28} />
            <span>Add Expense</span>
          </div>

          {/* 📉 Recent Transactions */}
          <div className="section">
            <h3>Recent Transactions</h3>

            <div className="transaction">
              <p>🍔 Food</p>
              <span className="red">- ₹250</span>
            </div>

            <div className="transaction">
              <p>🚕 Travel</p>
              <span className="red">- ₹120</span>
            </div>

            <div className="transaction">
              <p>💼 Salary</p>
              <span className="green">+ ₹40,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
