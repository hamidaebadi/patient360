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
            {text: 'Active Patients', url:'active_patients'},
            {text: 'Health Trends', url:'health_trends'},
            {text: 'Symptom Tracker', url:'symptom_tracker'},
            {text: 'Patient Summaries', url: 'patient_summaries'}
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
        <div className="flex">
            
            <Sidebar menuObj={menuObj} title={title}/>
        
            <div className="ml-[20%] w-[calc(100%-20%)] min-h-screen bg-gray-50">
            {/* Navbar fixed at the top of the content area */}
            <div className="fixed top-0 left-[20%] w-[calc(100%-20%)] z-10">
              <Navbar />
            </div>
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