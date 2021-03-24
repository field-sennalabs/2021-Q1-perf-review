import styled from "styled-components";
import { Link } from "react-router-dom";

import useAuthen from "../hooks/useAuthen";

function HomePage({ className }) {
  const token = useAuthen();

  return (
    <div className={className}>
      <div className="header">
        <h1>
          <b>Senna Blogs</b>
        </h1>

        {token && <Link to="/create">Create</Link>}
      </div>
    </div>
  );
}

const HomePageStyled = styled(HomePage)`
  > .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > a {
      padding: 10px 20px;
      background-color: #e7e7e7;
    }
  }
`;

export default HomePageStyled;
