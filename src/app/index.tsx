import { withProviders } from "./providers";
import "./styles/index.scss";
import "./styles/Vars.scss";

const App = (children: React.ReactNode) => {
  return <main className="app">{children}</main>;
};

export default withProviders(App);
