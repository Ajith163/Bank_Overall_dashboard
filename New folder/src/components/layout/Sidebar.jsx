import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showToggleButton, setShowToggleButton] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      if (width >= 1200) {
        setIsCollapsed(false);
        setShowToggleButton(false);
      } else if (width >= 1024 && width < 1200) {
        setIsCollapsed(true);
        setShowToggleButton(true);
      } else {
        setIsCollapsed(true);
        setShowToggleButton(true);
      }
    };
    
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigationItems = [
    {
      id: "dashboard",
      name: "Dashboard",
      path: "/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 3h7v7H3V3zm0 11h7v7H3v-7zm11-11h7v7h-7V3zm0 11h7v7h-7v-7z" />
        </svg>
      ),
      active: location.pathname === "/",
    },
    {
      id: "report",
      name: "Report",
      path: "/invoice-received",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      active: location.pathname === "/invoice-received",
    },
    {
      id: "add-invoice",
      name: "Add Invoice",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      ),
      active: location.pathname === "/add-invoice",
    },
    {
      id: "add-user",
      name: "Add User",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
          />
        </svg>
      ),
      active: location.pathname === "/add-user",
    },
    {
      id: "without-po",
      name: "Without PO",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ),
      active: location.pathname === "/without-po",
    },
    {
      id: "company",
      name: "Company",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      active: location.pathname === "/company",
    },
  ];

  return (
    <>
      <aside
        className={`bg-white shadow-lg rounded-r-lg flex flex-col absolute left-0 z-20 mb-5 transition-all duration-300
          ${isCollapsed ? "w-0 overflow-hidden" : "w-20"} `}
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        <nav className="flex flex-col justify-center space-y-1 h-full">
          {navigationItems.map((item) => (
            <div key={item.id}>
              <Link
                to={item.path}
                className={`w-full flex flex-col items-center py-2 px-1 rounded-lg transition-all duration-200 group ${
                  item.active
                    ? "text-white shadow-lg"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                }`}
                style={item.active ? { backgroundColor: "#13255B" } : {}}
              >
                <div
                  className={`mb-2 ${
                    item.active
                      ? "text-white"
                      : "text-gray-400 group-hover:text-gray-600"
                  }`}
                >
                  {item.icon}
                </div>
                <span
                  className={`text-[10px] font-medium text-center leading-tight ${
                    item.active
                      ? "text-white"
                      : "text-gray-600 group-hover:text-gray-800"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            </div>
          ))}
        </nav>
      </aside>

      {showToggleButton && (
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`fixed top-1/2 transform -translate-y-1/2 bg-[#13255B] text-white p-2 rounded-full shadow-lg transition-all duration-300 z-30
            ${isCollapsed ? "left-2" : "left-20"}`}
        >
          {isCollapsed ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
        </button>
      )}
    </>
  );
};

export default Sidebar;
