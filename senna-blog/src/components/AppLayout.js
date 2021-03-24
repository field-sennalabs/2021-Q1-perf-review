import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import useAuthen from "../hooks/useAuthen";
import Container from "../components/Container";

function AppLayout({ children }) {
  const { history } = useHistory();
  const { getToken } = useAuthen();
  const token = getToken();

  useEffect(() => {
    if (!token) {
      history.push("/login");
    }
  }, [token]);

  return <Container>{children}</Container>;
}

export default AppLayout;
