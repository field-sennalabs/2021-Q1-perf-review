import React from "react";
import { useRoutes } from "react-router-dom";
import { AppProvider } from "./lib/AppProvider";
import { client } from "./clients";
import { AuthenticationRoutes } from "./features/authentication/AuthenticationRoutes";

import "./App.css";

function App() {
  const routes = useRoutes([AuthenticationRoutes]);

  return <AppProvider client={client}>{routes}</AppProvider>;
}

export default App;
