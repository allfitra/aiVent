import React from "react";
import { Routes, Route } from "react-router-dom";
import DetailEvent from "../pages/detail-event";
import HomePage from "../pages/home-page";
import InputEvent from "../pages/input-event";
import LoginPage from "../pages/login-page";
import RequestUser from "../pages/list-event-user";

function SetupRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/detail-event" element={<DetailEvent />} />
      <Route path="/event-list" element={<RequestUser />} />
      <Route path="/input-event" element={<InputEvent />} />
    </Routes>
  );
}

export default SetupRoutes;
