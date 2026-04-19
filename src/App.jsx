import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import NavibarUi from './component/Navibar/NavibarUi'
import { HomeUi } from './component/Home/HomeUi'
import { ExpenseUi } from './component/Expense/ExpenseUi';
import { ProfileUi } from './component/Profile/ProfileUi';
import { ReportsUi } from './component/Reports/ReportsUi';


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
     <Routes>
      <Route path="/" element={<HomeUi />} />
      <Route path="/expense" element={<ExpenseUi />} />
      <Route path="/profile" element={<ProfileUi />} />
      <Route path="/reports" element={<ReportsUi />} />
    </Routes>
    {/* <HomeUi /> */}
    <NavibarUi />
    </>
  )
}

export default App
