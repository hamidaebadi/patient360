import React, { useState } from "react";
import Card from "../../../components/Card";
import { CardContent } from "../../../components/Card";
import { PencilIcon } from "lucide-react";

const PatientProfileCard = ({ patient }) => {
  const [activeTab, setActiveTab] = useState("vitals");

  const tabs = [
    { id: "vitals", label: "Vitals" },
    { id: "history", label: "Visit History" },
    { id: "notes", label: "Doctor's Notes" },
    { id: "attachments", label: "Attachments" }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Left Sidebar */}
      <aside className="lg:col-span-1 bg-white p-4 rounded-2xl shadow-md sticky top-4 h-fit">
        <div className="flex flex-col items-center gap-4">
          <img
            src={patient.photoUrl || "/default-avatar.png"}
            alt="Patient Avatar"
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
          />

          <div className="space-y-1">
            <h2 className="text-xl font-semibold text-gray-800">{patient.full_name}</h2>
            <p className="text-sm text-gray-500">Age: {patient.age} | {patient.gender}</p>
            <p className="text-sm text-gray-600">
              Status: <span className={`font-semibold ${patient.status === 'Critical' ? 'text-red-600' : 'text-green-600'}`}>{patient.status}</span>
            </p>
            <p className="text-sm text-gray-600">
              Risk Score: <span className="font-semibold">{(patient.risk_score * 100).toFixed(0)}%</span>
            </p>
            <p className="text-sm text-gray-600">Doctor: {patient.assigned_doctor_name}</p>
          </div>

          <button className="inline-flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-100 transition">
            <PencilIcon className="w-4 h-4" /> Edit Profile
          </button>
        </div>
      </aside>
    </div>
  );
};

export default PatientProfileCard;
