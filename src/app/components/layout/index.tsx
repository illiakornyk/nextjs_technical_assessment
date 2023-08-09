import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <header>Header</header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
};

export default Layout;
