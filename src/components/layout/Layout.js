import React from 'react';
import CourseMenu from '../shared/courseMenu/CourseMenu';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <CourseMenu />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
