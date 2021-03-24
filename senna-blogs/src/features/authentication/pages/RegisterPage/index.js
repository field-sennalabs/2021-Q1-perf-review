import { withRegisterPage } from "./withRegisterPage";
import { RegisterPage } from "./RegisterPage";

const ConnectedRegisterPage = withRegisterPage(RegisterPage);

export { ConnectedRegisterPage as RegisterPage };
