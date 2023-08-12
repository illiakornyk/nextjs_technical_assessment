import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
  useStandardLayout?: boolean;
};

const Layout: React.FC<LayoutProps> = ({
  children,
  useStandardLayout = true,
}) => {
  if (useStandardLayout) {
    // Render the standard layout
    return (
      <>
        <header>header</header>
        <main>{children}</main>
        <footer>footer</footer>
      </>
    );
  } else {
    // Render a custom layout for specific pages
    return (
      <>
        {/* Custom layout */}
        {children}
      </>
    );
  }
};

export default Layout;
