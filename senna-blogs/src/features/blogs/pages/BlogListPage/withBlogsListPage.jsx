import React from "react";
import hoist from "hoist-non-react-statics";
import { useAppClient } from "../../../../lib/AppProvider";

export function withBlogsListPage(Component) {
  function WithBlogsListPage(props) {
    const client = useAppClient();

    const pageProps = {
      ...props
    };

    return <Component {...pageProps} />;
  }

  hoist(WithBlogsListPage, Component);

  WithBlogsListPage.displayName = `WithBlogsListPage(
      ${Component.displayName ?? Component.name ?? "Component"})`;

  return WithBlogsListPage;
}
