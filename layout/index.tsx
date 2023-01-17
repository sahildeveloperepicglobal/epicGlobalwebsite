import React from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <React.Fragment>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
