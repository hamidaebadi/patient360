import React from "react";
import { useState } from "react";
import PatientCard from "./PatientCard";

const ActivePatient = () => {

    const severityColor = {
  OK: "bg-green-500",
  Attention: "bg-yellow-400",
  Danger: "bg-red-500",
};

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

    const [search, setSearch] = useState("");
  const [patients, setPatients] = useState(mockPatients);

  const handleMonitor = (id) => {
    setPatients((prev) =>
      prev.map((p) => (p.id === id ? { ...p, monitored: true } : p))
    );
  };

  const handleUnmonitor = (id) => {
    setPatients((prev) =>
      prev.map((p) => (p.id === id ? { ...p, monitored: false } : p))
    );
  };

  const handleViewDetails = (id) => {
    alert(`Viewing full details for patient ID: ${id}`);
  };

  const filtered = patients.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 rounded-2xl">
      {/* Search and Actions */}
      <div className="flex items-center justify-between mb-6">
        <input
          type="text"
          placeholder="Search patient..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 rounded-full bg-gray-800 text-white border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="ml-4 px-4 py-2 bg-purple-600 rounded-full hover:bg-purple-700 transition text-sm">
          + Add Patient
        </button>
      </div>

      {/* Patient Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto text-sm">
          <thead>
            <tr className="text-left bg-gray-800 text-gray-300">
              <th className="py-3 px-4">Patient ID</th>
              <th className="py-3 px-4">Full Name</th>
              <th className="py-3 px-4">Age</th>
              <th className="py-3 px-4">Condition</th>
              <th className="py-3 px-4">Monitoring</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="text-white divide-y divide-gray-800">
            {filtered.map((p) => (
              <tr key={p.id} className="hover:bg-gray-800 transition">
                <td className="py-3 px-4">{p.id}</td>
                <td className="py-3 px-4">{p.name}</td>
                <td className="py-3 px-4">{p.age}</td>
                <td className="py-3 px-4">
                  <span
                    className={`inline-block w-20 text-center py-1 rounded-full text-xs font-medium ${severityColor[p.severity]}`}
                  >
                    {p.severity}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`text-sm ${
                      p.monitored ? "text-green-400" : "text-gray-400"
                    }`}
                  >
                    {p.monitored ? "Active" : "Not Monitored"}
                  </span>
                </td>
                <td className="py-3 px-4 text-right space-x-2">
                  <button
                    onClick={() => handleViewDetails(p.id)}
                    className="bg-gray-700 px-3 py-1 rounded hover:bg-gray-600 text-sm"
                  >
                    View
                  </button>
                  {p.monitored ? (
                    <button
                      onClick={() => handleUnmonitor(p.id)}
                      className="bg-red-600 px-3 py-1 rounded hover:bg-red-500 text-sm"
                    >
                      Unmonitor
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMonitor(p.id)}
                      className="bg-green-600 px-3 py-1 rounded hover:bg-green-500 text-sm"
                    >
                      Monitor
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <div className="text-center text-gray-400 py-10">
            No patients found.
          </div>
        )}
      </div>
    </div>
  );
}

export default ActivePatient