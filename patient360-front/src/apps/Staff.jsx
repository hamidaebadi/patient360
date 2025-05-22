import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Staff = () => {
    const menuItems = [{
        id: 1,
        headerText: "HeadText",
        linkTexts: ['Dashboard', 'Track']
    }]
    return(
        <>
        <div className="flex">
            
            <Sidebar menuItmes={menuItems}/>
        
            <div className="ml-[20%] w-[calc(100%-20%)] min-h-screen bg-gray-50">
            {/* Navbar fixed at the top of the content area */}
            <div className="fixed top-0 left-[20%] w-[calc(100%-20%)] z-10">
              <Navbar />
            </div>
            {/* Main content with margin-top to account for navbar height */}
            <div className="mt-[56px] p-6">
              Main View
            </div>
          </div>
        </div>
        </>
    )
}

export default Staff