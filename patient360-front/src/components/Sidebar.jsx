import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ menuObj, title }) => {

  return (
    <div className="fixed top-0 left-0 h-screen bg-white flex flex-col p-4">
      {/* Logo Section */}
      <div className="flex justify-center p-10">
        <h4 className="font-extrabold uppercase">
          {title}
        </h4>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col">
        {menuObj.map((item) =>
          <div key={item.id}>
            {item.links.map((link) =>
              <NavLink
                key={link.text}
                to={link.url}
                className={({ isActive }) =>
                  `flex items-center p-4 rounded text-gray-400 hover:bg-gray-700 hover:text-white
                            ${isActive ? 'bg-gray-200 text-gray-800 font-semibold rounded-lg' : ''
                  }`
                }
              >
                {link.text}
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