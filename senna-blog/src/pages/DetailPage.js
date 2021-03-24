import { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { useBlog } from "../hooks/useBlog";
import BlogInformation from "../components/BlogInformation";

function DetailPage({ className }) {
  let { slug } = useParams();
  const { data, getBlog } = useBlog(slug);

  useEffect(() => {
    getBlog();
  }, []);

  return (
    <div className={className}>
      <h1>
        <b>{data.title}</b>
      </h1>
      <BlogInformation
        heartCount={data.heartCount}
        owner={data.author?.name}
        createdAt={data.createdAt}
      />

      <div dangerouslySetInnerHTML={{ __html: data.content }} />
    </div>
  );
}

const DetailPageStyled = styled(DetailPage)``;

export default DetailPageStyled;
