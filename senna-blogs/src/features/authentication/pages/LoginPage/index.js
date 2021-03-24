import { withLoginPage } from "./withLoginPage";
import { LoginPage } from "./LoginPage";

const ConnectedLoginPage = withLoginPage(LoginPage);

export { ConnectedLoginPage as LoginPage };
