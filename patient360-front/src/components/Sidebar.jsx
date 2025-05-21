import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return(
        <div className="fixed top-0 left-0 
        h-screen w-[250px] bg-white border-r border-gray-600 flex flex-col p-4">
             {/* Logo Section */}
          <div className="flex justify-center basis-1/10">
            <h3 className="font-serif font-bold uppercase text-shadow-lg">Patient360</h3>
          </div>

           {/* User Info and Logout Section */}
          <div className="flex items-center justify-between basis-1/8">
            <div>
              <p className="text-sm font-semibold text-gray-800">Antoni Hakkara</p>
              <p className="text-xs text-gray-500">CEO</p>
            </div>
            <NavLink
              to="/logout"
              className="bg-gray-500 text-white text-xs px-2 py-1 rounded hover:bg-gray-600"
            >
              Logout
            </NavLink>
          </div>


          {/* Navigation Links as Buttons */}
          <nav className="flex flex-col space-y-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block text-center py-2 px-4 rounded text-gray-700 border border-gray-300 hover:bg-blue-500 hover:text-white ${
                  isActive ? 'bg-blue-500 text-white border-blue-500' : ''
                }`
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/add-user"
              className={({ isActive }) =>
                `block text-center py-2 px-4 rounded text-gray-700 border border-gray-300 hover:bg-blue-500 hover:text-white ${
                  isActive ? 'bg-blue-500 text-white border-blue-500' : ''
                }`
              }
            >
              Add User
            </NavLink>
            <NavLink
              to="/add-patient"
              className={({ isActive }) =>
                `block text-center py-2 px-4 rounded text-gray-700 border border-gray-300 hover:bg-blue-500 hover:text-white ${
                  isActive ? 'bg-blue-500 text-white border-blue-500' : ''
                }`
              }
            >
              Add Patient
            </NavLink>
          </nav>

          
        </div>
    )
}

export default Sidebar