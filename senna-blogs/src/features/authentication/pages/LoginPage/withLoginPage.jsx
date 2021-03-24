import React from "react";
import hoist from "hoist-non-react-statics";

export function withLoginPage(Component) {
  function WithLoginPage(props) {
    const pageProps = {
      ...props
    };

    return <Component {...pageProps} />;
  }

  hoist(WithLoginPage, Component);

  WithLoginPage.displayName = `WithLoginPage(
      ${Component.displayName ?? Component.name ?? "Component"})`;

  return WithLoginPage;
}
