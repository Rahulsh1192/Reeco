import React from "react";
import Header from "../features/Header/Header";
import { Outlet, Navigate } from "react-router-dom";

import auth from "./auth";

export const ProtectedRoutes = () => {
  return auth.isAuthenticated() ? (
    // return localStorage.getItem("token") != null ? (
    <>
      <Header></Header>
      <Outlet />
    </>
  ) : (
    <Navigate to="/orderlist" />
  );
};
