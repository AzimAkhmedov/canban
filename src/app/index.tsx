import { ToastContainer } from "react-toastify";
import { withProviders } from "./providers";
import "./styles/index.scss";
import Navigation from "../shared/ui/Navigation";
// import Navigation from "../shared/ui/Navigation";

const App = (children: React.ReactNode) => {
  return (
    <main className="app">
      <ToastContainer theme="dark" />
  
      {children}
    </main>
  );
};

export default withProviders(App);
