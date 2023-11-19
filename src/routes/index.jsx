import React from "react";
import { Routes, Route } from "react-router-dom";
import ContactPage from "../pages/contact.-page";
import DetailEvent from "../pages/detail-event";
import HomePage from "../pages/home-page";
import InputEvent from "../pages/input-event";
import UpdateEvent from "../pages/update-event";
import LoginPage from "../pages/login-page";
import RequestUser from "../pages/list-event-user";
import NotFound from "../components/_404";

function SetupRoutes() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<LoginPage />} />
      <Route path="/detail/:id" element={<DetailEvent />} />
      <Route path="/input-event" element={<InputEvent />} />
      <Route path="/contact" element={<ContactPage />} />
      {isLoggedIn === "true" && <Route path="/event-list" element={<RequestUser />} />}
      {isLoggedIn === "true" && <Route path="/update/:id" element={<UpdateEvent />} />}
    </Routes>
  );
}

export default SetupRoutes;
