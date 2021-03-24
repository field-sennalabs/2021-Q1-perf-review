import styled from "styled-components";
import { DateTime } from "luxon";

function Blog({ className, title, heartCount, owner, createdAt }) {
  return (
    <div className={className}>
      <h4>{title}</h4>
      <div className="information">
        <div>{heartCount}</div>
        <div>-</div>
        <div>{owner}</div>
        <div>-</div>
        <div>{DateTime.fromISO(createdAt).toRelative()}</div>
      </div>
    </div>
  );
}

const BlogStyled = styled(Blog)`
  border: 1px solid #e8e8e8;
  padding: 8px;
  margin-bottom: 20px;

  > .information {
    display: flex;

    > div:not(:last-child) {
      margin-right: 5px;
    }
  }
`;

export default BlogStyled;
