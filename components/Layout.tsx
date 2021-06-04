import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
