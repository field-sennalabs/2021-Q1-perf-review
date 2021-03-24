import React from "react";
import { Outlet } from "react-router-dom";

import { BlogsListPage } from "./pages/BlogListPage";
import { BlogsCreatePage } from "./pages/BlogsCreatePage";

export const BlogsRoutes = {
  path: "/blogs",
  element: <Outlet />,
  children: [
    { path: "/", element: <BlogsListPage /> },
    { path: "/create", element: <BlogsCreatePage /> }
  ]
};
