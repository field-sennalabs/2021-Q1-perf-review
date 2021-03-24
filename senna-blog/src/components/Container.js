import styled from "styled-components";

function Container({ className, children }) {
  return <div className={className}>{children}</div>;
}

const ContainerStyled = styled(Container)`
  padding: 0 15px;
`;

export default ContainerStyled;
