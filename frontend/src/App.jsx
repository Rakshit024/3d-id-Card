// frontend/src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import ShowCard from "./pages/ShowCard";
import Card3D from "./pages/Card3D";
import AttendanceHome from "./pages/attendance/AttendanceHome";
import ScanQR from "./pages/attendance/ScanQR";
import Admin from "./pages/Admin";
import   { Toaster }  from "react-hot-toast";
const App = () => {
  return (

<>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/show-card" element={<ShowCard />} />
        <Route path="/card" element={<Card3D />} />
        <Route path="/attendance" element={<AttendanceHome />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/scan" element={<ScanQR />} />
      </Routes>
    </Router>
    <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default App;
