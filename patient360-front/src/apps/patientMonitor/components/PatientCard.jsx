import React from "react";
import { Link } from "react-router-dom";

const severityStyles = {
  OK: "bg-green-100 text-green-800",
  Attention: "bg-yellow-100 text-yellow-800",
  Danger: "bg-red-100 text-red-800",
};

const PatientCard = ({ patient, onRemove, onMonitor }) => {
  const { id, name, severity, profilePicture, isMonitored } = patient;

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
      {/* Profile info */}
      <div className="flex items-center space-x-4">
        <img
          src={profilePicture}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border"
        />
        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
          <span
            className={`text-sm font-medium px-2 py-1 rounded-full ${severityStyles[severity]}`}
          >
            {severity}
          </span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex items-center space-x-3">
        <Link
          to={`/patients/${id}`}
          className="text-blue-600 hover:underline text-sm"
        >
          View Details
        </Link>
        <button
          onClick={() => onRemove(id)}
          className="px-3 py-1 text-sm bg-red-100 text-red-600 rounded hover:bg-red-200"
        >
          Remove
        </button>
        <button
          onClick={() => onMonitor(id)}
          disabled={isMonitored}
          className={`px-3 py-1 text-sm rounded ${
            isMonitored
              ? "bg-gray-200 text-gray-600 cursor-not-allowed"
              : "bg-green-100 text-green-600 hover:bg-green-200"
          }`}
        >
          {isMonitored ? "Monitoring" : "Monitor"}
        </button>
      </div>
    </div>
  );
};

export default PatientCard;
