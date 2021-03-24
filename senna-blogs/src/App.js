import React from "react";
import { useRoutes } from "react-router-dom";
import { AppProvider } from "./lib/AppProvider";
import { client } from "./clients";
import { AuthenticationRoutes } from "./features/authentication/AuthenticationRoutes";
import { BlogsRoutes } from "./features/blogs/BlogsRoutes";

import "./App.css";

function App() {
  const routes = useRoutes([AuthenticationRoutes, BlogsRoutes]);

  return <AppProvider client={client}>{routes}</AppProvider>;
}

export default App;
