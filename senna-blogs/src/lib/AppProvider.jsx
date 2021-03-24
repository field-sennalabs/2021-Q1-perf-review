import React, { createContext, useContext } from "react";

const AppContext = createContext({
  client: null
});

export function AppProvider({ children, client }) {
  const value = {
    client
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppClient() {
  return useContext(AppContext).client;
}
