import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({menuItmes}) => {

      return (
        <div className="fixed top-0 left-0 h-screen w-[20%] bg-gray-900 text-gray-300 flex flex-col p-4">
          {/* Logo Section */}
          <div className="flex justify-center">
            <h4 className="font-extrabold uppercase">
              Healthcare Personnel Monitoring
            </h4>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-2">
            {menuItmes.map((item) => 
            <div key={item.id}>
              <div className="text-xs uppercase text-gray-500 mb-2">
                {item.headerText}</div>

                {item.linkTexts.map((link) =>
                 <NavLink
                 key={link}
              to="/"
              className={({ isActive }) =>
                `flex items-center py-2 px-3 rounded text-gray-300 hover:bg-gray-700 hover:text-white ${
                  isActive ? 'bg-blue-600 text-white' : ''
                }`
              }
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7m-9-5v12m9-12l2 2m-2-2l-7 7-7-7" />
              </svg>
              {link}
            </NavLink>
                )}
           
            </div>
            )}
            {/* Overview Section */}
            
          </nav>
        </div>
 
    )
}

export default Sidebar