import React from "react";
import hoist from "hoist-non-react-statics";
import { useAppClient } from "../../../../lib/AppProvider";

export function withLoginPage(Component) {
  function WithLoginPage(props) {
    const client = useAppClient();

    async function onSubmit(form) {
      try {
        await client.authClient.login(form);
      } catch (error) {
        // handle error
        // console.lgo(error);
      }
    }

    const pageProps = {
      ...props,
      onSubmit
    };

    return <Component {...pageProps} />;
  }

  hoist(WithLoginPage, Component);

  WithLoginPage.displayName = `WithLoginPage(
      ${Component.displayName ?? Component.name ?? "Component"})`;

  return WithLoginPage;
}
