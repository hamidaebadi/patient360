import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";

const PatientMonitor = () => {
    const title = "Patient Monitoring"
    const menuObj = [{
        id: 1,
        headerText: "General",
        links: [
            {text: 'Dashboard', url:'dashboard'},
            {text: 'Alarms', url:'alarms'}
        ]
    },
    {
        id:2,
        headerText: "Monitoring",
        links: [
            {text: 'Patients', url:'patient_list'},
        ]
    },
    {
        id:3,
        headerText: "Personal Treatment Plans",
        links: [
            {text: 'All plans', url: 'all_plans'},
        ]
    },
    {
        id:4,
        headerText: "Settings",
        links: [
            {text: 'My Profile', url:'profile'},
            {text: 'Data & Privacy', url: 'data_privacy'}
        ]
    },
]
    return(
        <>
        <Navbar />
        <Sidebar menuObj={menuObj} title={title}/>
        <div className="flex">
            <div className="ml-[15%] w-[calc(100%-15%)] min-h-screen bg-gray-50">
            {/* Navbar fixed at the top of the content area */}
            {/* Main content with margin-top to account for navbar height */}
            <div className="mt-[56px] p-6">
              <Outlet />
            </div>
          </div>
        </div>
        </>
    )
}

export default PatientMonitor