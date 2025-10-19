import React from 'react';

const Header = () => {
  return (
    <header className="bg-white border-t-2 border-blue-500 shadow-sm h-16 flex items-center px-6">
      <div className="flex items-center space-x-6">
      <button className="p-1 text-gray-600 hover:text-gray-800 focus:outline-none transition-colors duration-200">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        <h1 className="text-xl font-bold text-gray-800">Logo</h1>
      </div>

      <div className="flex-1 flex justify-center px-8">
        <div className="relative w-full max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-600 placeholder-gray-400"
          />
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <div className="relative">
          <button className="p-1 text-gray-400 hover:text-gray-600 focus:outline-none transition-colors duration-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <span className="absolute -top-0.5 -right-0.5 h-3 w-3 bg-orange-500 rounded-full"></span>
        </div>

      <button className="p-1 text-gray-400 hover:text-gray-600 focus:outline-none transition-colors duration-200">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" strokeWidth={2} />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17h.01" />
          </svg>
        </button>

        <div className="w-8 h-8 dark-blue rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-white text-sm font-semibold">JA</span>
        </div>

       
      </div>
    </header>
  );
};

export default Header;
