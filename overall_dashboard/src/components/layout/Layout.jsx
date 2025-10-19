import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col relative" style={{backgroundColor: '#EDF0F4'}}>
      <Header />
      
      <Sidebar />
      
      <main className="flex-1 overflow-x-hidden overflow-y-auto" style={{backgroundColor: '#EDF0F4'}}>
        <div className="container mx-auto px-6 py-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
