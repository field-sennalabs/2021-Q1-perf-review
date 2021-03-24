import React from "react";
import styled from "styled-components";

import { BlogListItem } from "./BlogListItem";

function BlogList({ blogs }) {
  return (
    <div>
      {blogs.map(blog => (
        <BlogListItem key={blog.id} {...blog} />
      ))}
    </div>
  );
}

const StyledBlogList = styled(BlogList)``;

export { StyledBlogList as BlogList };
