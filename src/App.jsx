import React from 'react'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import { Routes, Route } from "react-router";
import DashboardHome from './Pages/dashboard/DashboardHome';
import DashboardLayout from './Layouts/DashboardLayout';
import DashboardContact from './Pages/dashboard/DashboardContact';
import DashboardCounter from './Pages/dashboard/DashboardCounter';

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
       <Route index element={<DashboardHome />} />
       <Route path="contact" element={<DashboardContact />} />
       <Route path="counter" element={<DashboardCounter />} />
      </Route>
      
    </Routes>
    </>
  )
}

export default App