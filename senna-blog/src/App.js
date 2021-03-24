import { BrowserRouter, Switch, Route } from "react-router-dom";

import AppLayout from "./components/AppLayout";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import useAuthen from "./hooks/useAuthen";

import "./App.css";

function App() {
  const { getToken } = useAuthen();

  return (
    <BrowserRouter>
      <AppLayout>
        <Header />
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/create">
            <CreatePage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
