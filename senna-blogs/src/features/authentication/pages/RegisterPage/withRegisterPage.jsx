import React from "react";
import hoist from "hoist-non-react-statics";
import { useAppClient } from "../../../../lib/AppProvider";

export function withRegisterPage(Component) {
  function WithRegisterPage(props) {
    const client = useAppClient();

    async function onSubmit(form) {
      try {
        await client.authClient.register(form);
        console.log("Success!");
      } catch (error) {
        // handle error
        console.log(error);
      }
    }

    const pageProps = {
      ...props,
      onSubmit
    };

    return <Component {...pageProps} />;
  }

  hoist(WithRegisterPage, Component);

  WithRegisterPage.displayName = `WithRegisterPage(
      ${Component.displayName ?? Component.name ?? "Component"})`;

  return WithRegisterPage;
}
