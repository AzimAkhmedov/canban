import { ReactNode } from "react";
import Navigation from "../ui/Navigation";
interface LayoutProps {
  children: string | JSX.Element | JSX.Element[] | ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navigation />
      <div className="container"> {children}</div>
    </div>
  );
};

export default Layout;
