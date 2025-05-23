import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({menuItmes, title}) => {

      return (
        <div className="fixed top-0 left-0 h-screen w-[20%] bg-gray-900 text-gray-300 flex flex-col p-4">
          {/* Logo Section */}
          <div className="flex justify-center p-10">
            <h4 className="font-extrabold uppercase">
              {title}
            </h4>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-6">
            {menuItmes.map((item) => 
            <div key={item.id}>
              <div className="text-xs uppercase text-gray-400 mb-2">
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