import React from "react";
import hoist from "hoist-non-react-statics";
import { useAppClient } from "../../../../lib/AppProvider";

import RichTextEditor from "react-rte";

export function withBlogsCreatePage(Component) {
  function WithBlogsCreatePage(props) {
    const client = useAppClient();

    async function onSubmit(form) {
      try {
        await client.blogsClient.createBlog(form);
      } catch (error) {
        // TODO: handle error
      }
    }
    const pageProps = {
      ...props,
      onSubmit
    };

    return <Component {...pageProps} />;
  }

  hoist(WithBlogsCreatePage, Component);

  WithBlogsCreatePage.displayName = `WithBlogsCreatePage(
      ${Component.displayName ?? Component.name ?? "Component"})`;

  return WithBlogsCreatePage;
}
