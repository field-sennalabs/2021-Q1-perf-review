import React from "react";
import styled from "styled-components";

import { BlogHeader } from "../../components/BlogHeader";
import { BlogList } from "../../components/BlogList";

function BlogsListPage({ blogs, isCreateable }) {
  return (
    <div>
      <BlogHeader title="Senna Blogs" isCreateable={isCreateable} />
      <div>
        <BlogList blogs={blogs} />
      </div>
    </div>
  );
}

const StyledBlogsListPage = styled(BlogsListPage)``;

export { StyledBlogsListPage as BlogsListPage };
