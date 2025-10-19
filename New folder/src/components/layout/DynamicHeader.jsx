import React from 'react';
import { useLocation } from 'react-router-dom';

const DynamicHeader = () => {
  const location = useLocation();

  const pageConfig = {
    '/': { breadcrumb: 'Dashboard', title: 'Dashboard', showCalendar: true },
    '/invoice-received': { breadcrumb: 'Dashboard > Invoice Received', title: 'Invoice Received', showCalendar: true },
    '/add-invoice': { breadcrumb: 'Dashboard > Add Invoice', title: 'Add Invoice', showCalendar: false },
    '/add-user': { breadcrumb: 'Dashboard > Add User', title: 'Add User', showCalendar: false },
    '/without-po': { breadcrumb: 'Dashboard > Without PO', title: 'Without PO', showCalendar: false },
    '/company': { breadcrumb: 'Dashboard > Company', title: 'Company', showCalendar: false }
  };

  const currentPage = pageConfig[location.pathname] || pageConfig['/'];

  const CalendarWidget = () => {
    const today = new Date();
    const currentWeek = getWeekDates(today);
    
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3">
        <div className="text-center">
          <h4 className="text-xs font-semibold text-gray-800 mb-2">
            {today.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </h4>
          
          <div className="grid grid-cols-7 gap-1 text-xs mb-1">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
              <div key={index} className="text-gray-500 font-medium">{day}</div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-1 text-xs">
            {currentWeek.map((date, index) => (
              <div 
                key={index} 
                className={`w-6 h-6 flex items-center justify-center rounded-full ${
                  date.toDateString() === today.toDateString()
                    ? 'dark-blue text-white font-bold' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {date.getDate()}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const getWeekDates = (date) => {
    const week = [];
    const startOfWeek = new Date(date);
    const day = startOfWeek.getDay();
    startOfWeek.setDate(startOfWeek.getDate() - day);
    
    for (let i = 0; i < 7; i++) {
      const weekDay = new Date(startOfWeek);
      weekDay.setDate(startOfWeek.getDate() + i);
      week.push(weekDay);
    }
    
    return week;
  };

  return (
    <div className="flex flex-col md:flex-row md:items-start md:justify-between space-y-4 md:space-y-0 mb-6">
      <div>
        <div className="text-xs sm:text-sm dynamic-header-clr mb-2 fnt-clr fs-12">{currentPage.breadcrumb}</div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 fnt-clr fs-22">{currentPage.title}</h1>
      </div>

      {currentPage.showCalendar && <CalendarWidget />}
    </div>
  );
};

export default DynamicHeader;
