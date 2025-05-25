import React from "react";
import { useState } from "react";
import PatientCard from "./PatientCard";

const ActivePatient = () => {


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


    const [searchTerm, setSearchTerm] = useState("");
    const [patients, setPatients] = useState(mockPatients);

    const handleRemove = (id) => {
        setPatients((prev) => prev.filter((p) => p.id !== id));
    };

    const handleMonitor = (id) => {
        setPatients((prev) =>
        prev.map((p) =>
            p.id === id ? { ...p, isMonitored: true } : p
        )
        );
    };

    const filteredPatients = patients.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="flex">
     
      {/* Patient Cards List */}
      <div className="pt-20 px-4 pb-6 space-y-4 overflow-y-auto h-full 
       w-full">
        {filteredPatients.length > 0 ? (
          filteredPatients.map((patient) => (
            <PatientCard
              key={patient.id}
              patient={patient}
              onRemove={handleRemove}
              onMonitor={handleMonitor}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 mt-10">No patients found.</p>
        )}
      </div>
    </div>
  )
}

export default ActivePatient