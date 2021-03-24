import React from "react";
import { Outlet } from "react-router-dom";

import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";

export const AuthenticationRoutes = {
  path: "/auth",
  element: <Outlet />,
  children: [
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <RegisterPage /> }
  ]
};
