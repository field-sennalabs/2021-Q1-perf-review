import styled from "styled-components";

import BlogInformation from "./BlogInformation";

function Blog({ className, title, heartCount, owner, createdAt }) {
  return (
    <div className={className}>
      <h4>{title}</h4>
      <BlogInformation
        heartCount={heartCount}
        owner={owner}
        createdAt={createdAt}
      />
    </div>
  );
}

const BlogStyled = styled(Blog)`
  border: 1px solid #e8e8e8;
  padding: 8px;
  margin-bottom: 20px;
`;

export default BlogStyled;
