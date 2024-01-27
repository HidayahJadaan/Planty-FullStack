import { useState } from "react";
import "./App.scss";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
