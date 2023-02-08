import React from 'react';
import CourseMenuWrapper from '../shared/courseMenu/CourseMenuWrapper';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <CourseMenuWrapper />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
