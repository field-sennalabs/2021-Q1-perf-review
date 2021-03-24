import { Link } from "react-router-dom";
import styled from "styled-components";

import { useAuthen } from "../hooks/useAuthen";

function Header({ className }) {
  const { token, logout } = useAuthen();

  return (
    <div className={className}>
      <Link to="/">Home</Link>
      {token ? (
        <div>
          <button type="button" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </div>
      )}
    </div>
  );
}

const HeaderStyled = styled(Header)`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;

  > div {
    > a {
      margin-left: 10px;
    }
  }
`;

export default HeaderStyled;
