import React from "react";
import { useState } from "react";
import MetricMultiSelect from "./components/MetricMultiselect";
import PatientSelect from "./components/PatientSelect";
import HealthTrendCharts from "./components/HealthTrendCharts";

const HealthTrends = () => {
    const [selectedMetrics, setSelectedMetrics] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState(null)

    const mockPatients = [
    {
        id: "p1",
        name: "John Doe",
        severity: "OK",
        profilePicture: "/avatars/john.jpg",
        isMonitored: true,
    },
    {
        id: "p2",
        name: "Alice Smith",
        severity: "Attention",
        profilePicture: "/avatars/alice.jpg",
        isMonitored: false,
    },
    {
        id: "p3",
        name: "Bob Brown",
        severity: "Danger",
        profilePicture: "/avatars/bob.jpg",
        isMonitored: false,
    },
    {
        id: "p4",
        name: "John Doe",
        severity: "OK",
        profilePicture: "/avatars/john.jpg",
        isMonitored: true,
    },
    {
        id: "p5",
        name: "Alice Smith",
        severity: "Attention",
        profilePicture: "/avatars/alice.jpg",
        isMonitored: false,
    },
    {
        id: "p6",
        name: "Bob Brown",
        severity: "Danger",
        profilePicture: "/avatars/bob.jpg",
        isMonitored: false,
    },
    {
        id: "p7",
        name: "John Doe",
        severity: "OK",
        profilePicture: "/avatars/john.jpg",
        isMonitored: true,
    },
    {
        id: "p8",
        name: "Alice Smith",
        severity: "Attention",
        profilePicture: "/avatars/alice.jpg",
        isMonitored: false,
    },
    {
        id: "p9",
        name: "Bob Brown",
        severity: "Danger",
        profilePicture: "/avatars/bob.jpg",
        isMonitored: false,
    },
    {
        id: "p10",
        name: "John Doe",
        severity: "OK",
        profilePicture: "/avatars/john.jpg",
        isMonitored: true,
    },
    {
        id: "p11",
        name: "Alice Smith",
        severity: "Attention",
        profilePicture: "/avatars/alice.jpg",
        isMonitored: false,
    },
    {
        id: "p12",
        name: "Bob Brown",
        severity: "Danger",
        profilePicture: "/avatars/bob.jpg",
        isMonitored: false,
    },
    ];
    const heartRateData = [
      { time: '00:00', bpm: 72 },
      { time: '01:00', bpm: 70 },
      { time: '02:00', bpm: 68 },
      { time: '03:00', bpm: 67 },
      { time: '04:00', bpm: 65 },
      { time: '05:00', bpm: 66 },
      { time: '06:00', bpm: 70 },
      { time: '07:00', bpm: 74 },
      { time: '08:00', bpm: 78 },
      { time: '09:00', bpm: 80 },
      { time: '10:00', bpm: 76 },
      { time: '11:00', bpm: 74 },
      { time: '12:00', bpm: 72 },
      { time: '13:00', bpm: 75 },
      { time: '14:00', bpm: 73 },
      { time: '15:00', bpm: 71 },
      { time: '16:00', bpm: 70 },
      { time: '17:00', bpm: 72 },
      { time: '18:00', bpm: 75 },
      { time: '19:00', bpm: 77 },
      { time: '20:00', bpm: 74 },
      { time: '21:00', bpm: 72 },
      { time: '22:00', bpm: 70 },
      { time: '23:00', bpm: 68 },
        ]

    const bloodPressureData = [
  {
    "timestamp": "2025-05-18T08:00:00Z",
    "systolic": 128,
    "diastolic": 71
  },
 
  {
    "timestamp": "2025-05-19T08:00:00Z",
    "systolic": 114,
    "diastolic": 80
  },
 
  {
    "timestamp": "2025-05-20T08:00:00Z",
    "systolic": 117,
    "diastolic": 80
  },
 
  {
    "timestamp": "2025-05-21T08:00:00Z",
    "systolic": 115,
    "diastolic": 89
  },

  {
    "timestamp": "2025-05-22T08:00:00Z",
    "systolic": 130,
    "diastolic": 71
  },

  {
    "timestamp": "2025-05-23T08:00:00Z",
    "systolic": 138,
    "diastolic": 88
  },

  {
    "timestamp": "2025-05-24T08:00:00Z",
    "systolic": 115,
    "diastolic": 86
  },

]

    return(
        <>
            <div className="flex md:flex-col content-evenly">
                <div className="flex md:flex-col 
                ">
                   <PatientSelect
                   patientOptions={mockPatients}
                   selectedPatient={selectedPatient}
                   setSelectedPatient={setSelectedPatient}
                   />
                    <MetricMultiSelect 
                    selectedMetrics={selectedMetrics}
                    setSelectedMetrics={setSelectedMetrics}
                    />
                </div>

                <div className="flex md:flex-wrap">
  
                    {
                        selectedPatient === null &&
                        <div>No patient Selected</div>
                        
                    }

                    {
                        selectedMetrics.length > 0 && selectedPatient !== null
                        ?
                        selectedMetrics.map(
                            metric => <HealthTrendCharts 
                            metric_type={metric.value} 
                            data={bloodPressureData}/>)
                        :
                        <div>Choose at least one patient and one chart</div>
                    }
                </div>
            </div>
        </>
    )
}

export default HealthTrends