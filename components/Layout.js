import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* Add footer or other common components if needed */}
    </>
  );
};

export default Layout;
