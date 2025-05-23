import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const PatientMonitor = () => {
    const title = "Patient Monitoring"
    const menuItems = [{
        id: 1,
        headerText: "General",
        linkTexts: ['Dashboard', 'Alamrs']
    },
    {
        id:2,
        headerText: "Monitoring",
        linkTexts: ['Under Controls', 'Expert Analysis','Add New']
    },
    {
        id:3,
        headerText: "Personal Treatment Plans",
        linkTexts: ['All plans', 'Creat New']
    },
    {
        id:4,
        headerText: "Settings",
        linkTexts: ['My Profile', 'Data & Privacy']
    },
]
    return(
        <>
        <div className="flex">
            
            <Sidebar menuItmes={menuItems} title={title}/>
        
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

export default PatientMonitor