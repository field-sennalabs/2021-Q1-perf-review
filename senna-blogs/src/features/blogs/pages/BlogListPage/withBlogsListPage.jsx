import React, { useEffect, useState } from "react";
import hoist from "hoist-non-react-statics";
import { useNavigate } from "react-router-dom";
import { timeAgo } from "../../../../utils";

import { useAppClient } from "../../../../lib/AppProvider";

export function withBlogsListPage(Component) {
  function WithBlogsListPage(props) {
    const client = useAppClient();
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
      getBlogs();

      return () => {
        setBlogs([]);
      };
    }, []);

    function getBlogs() {
      client.blogsClient.getBlogs().then(res => {
        const data = res.data.map(blog => ({
          id: blog.id,
          title: blog.title,
          heartCount: blog.heartCount,
          date: timeAgo(blog.createdAt),
          name: blog.author.name
        }));

        setBlogs(data);
      });
    }

    const pageProps = {
      ...props,
      blogs,
      isCreateable: true
    };

    return <Component {...pageProps} />;
  }

  hoist(WithBlogsListPage, Component);

  WithBlogsListPage.displayName = `WithBlogsListPage(
      ${Component.displayName ?? Component.name ?? "Component"})`;

  return WithBlogsListPage;
}
