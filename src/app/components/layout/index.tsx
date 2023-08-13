import Header from '@/components/header';
import classNames from 'classnames/bind';
import React from 'react';
import styles from './styles.module.scss';
import Footer from '@/components/footer';

let cx = classNames.bind(styles);

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
      <div className={cx('layout')}>
        <div className={cx('layout__wrapper')}>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
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
