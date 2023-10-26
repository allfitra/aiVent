import React from "react";
import { Routes, Route } from "react-router-dom";
import ContactPage from "../pages/contact.-page";
import DetailEvent from "../pages/detail-event";
import HomePage from "../pages/home-page";
import InputEvent from "../pages/input-event";
import UpdateEvent from "../pages/update-event";
import LoginPage from "../pages/login-page";
import RequestUser from "../pages/list-event-user";

function SetupRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/detail/:id" element={<DetailEvent />} />
      <Route path="/event-list" element={<RequestUser />} />
      <Route path="/input-event" element={<InputEvent />} />
      <Route path="/update/:id" element={<UpdateEvent />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default SetupRoutes;
