import React from "react";
import styled from "styled-components";

function BlogListItem({ className, title, name, date, heartCount }) {
  function handleClickViewBlog() {
    // TODO: viwe blog
  }

  function handleClickSeeAllBlog() {
    // TODO: see all blog
  }

  return (
    <div className={className}>
      <a className="blog-title" onClick={handleClickViewBlog}>
        {title}
      </a>
      <div className="meta">
        <span className="heart">{heartCount}</span>
        <a className="name" onClick={handleClickSeeAllBlog}>
          {name}
        </a>
        <span>{date}</span>
      </div>
    </div>
  );
}

const StyledBlogListItem = styled(BlogListItem)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;

  .blog-title {
    font-size: 20px;
    font-weight: bold;
  }

  .meta {
    display: flex;
    column-gap: 8px;
    fons-size: 14px;
  }

  .heart:after,
  .name:after {
    content: " - ";
  }

  .name {
    text-decoration: none;
    font-weight: bold;
  }
`;

export { StyledBlogListItem as BlogListItem };
