// react imports
import { ReactNode } from "react";

// layout components
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
export default Layout;
