import { Link } from "react-router-dom";
import styled from "styled-components";

function Header({ className }) {
  return (
    <div className={className}>
      <Link to="/">Home</Link>
      <div>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
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
