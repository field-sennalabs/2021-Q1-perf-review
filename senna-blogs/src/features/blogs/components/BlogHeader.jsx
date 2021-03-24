import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function BlogHeader({ className, title, isCreateable }) {
  const navigate = useNavigate();

  function handleClickCreateBlog() {
    navigate({ pathname: "/blogs/create" });
  }

  return (
    <div className={className}>
      <h1>{title}</h1>
      {isCreateable && (
        <div className="button-wrapper">
          <button onClick={handleClickCreateBlog}>Create</button>
        </div>
      )}
    </div>
  );
}

const StyledBlogHeader = styled(BlogHeader)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export { StyledBlogHeader as BlogHeader };
