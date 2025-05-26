import React from "react";
import Select from "react-select";

const metricOptions = [
  {
    label: "Vitals",
    options: [
      { value: "heart_rate", label: "Heart Rate" },
      { value: "blood_pressure", label: "Blood Pressure" },
      { value: "respiratory_rate", label: "Respiratory Rate" },
      { value: "body_temperature", label: "Body Temperature" },
      { value: "oxygen_saturation", label: "Oxygen Saturation" },
    ],
  },
  {
    label: "Lab Results",
    options: [
      { value: "glucose", label: "Blood Glucose" },
      { value: "cholesterol", label: "Cholesterol" },
      { value: "hba1c", label: "HbA1c" },
      { value: "creatinine", label: "Creatinine" },
    ],
  },
  {
    label: "Body Measurements",
    options: [
      { value: "weight", label: "Body Weight" },
      { value: "bmi", label: "BMI" },
      { value: "height", label: "Height" },
    ],
  },
]


const customStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused? "#1f2937":"#fff",
    borderRadius: "0.8rem",
    borderColor: state.isFocused ? "#3b82f6" : "#d1d5db", // blue-500 or gray-300
    boxShadow: state.isFocused ? "0 0 0 2px rgba(59, 130, 246, 0.5)" : "none",
    padding: "0.8rem 0.8rem",
    fontSize: "1rem",
    cursor: "text",
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? "#dbeafe" // blue-100
      : state.isFocused
      ? "#f3f4f6" // gray-100
      : "#fff",
    color: "#1f2937", // gray-800
    padding: "0.5rem 0.75rem",
    fontSize: state.isFocused? "1rem":"0.95rem",
    cursor: "pointer",
  }),
  multiValue: (base) => ({
    ...base,
    backgroundColor: "#e0f2fe", // blue-100
    color: "#0369a1", // blue-700
    borderRadius: "0.375rem",
    padding: "0 0.25rem",
    fontSize: "1.2rem",
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: "#0369a1", // blue-700
  }),
  multiValueRemove: (base) => ({
    ...base,
    color: "#0369a1",
    ":hover": {
      backgroundColor: "#bae6fd", // blue-200
      color: "#0c4a6e", // darker blue
    },
  }),
  menu: (base) => ({
    ...base,
    borderRadius: "0.5rem",
    marginTop: "0.25rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: 50,
  }),
  groupHeading: (base) => ({
    ...base,
    fontWeight: "bold",
    fontSize: "0.875rem",
    padding: "0.25rem 0.75rem",
    color: "#6b7280", // gray-500
  }),
};


const MetricMultiSelect = ({ selectedMetrics, setSelectedMetrics }) => {
  const handleChange = (selected) => {
    setSelectedMetrics(selected || []);
    console.log(selected)
  }

  return (
    <div className="w-full max-w-3xl mx-auto my-4 text-xl">
      <Select
        options={metricOptions}
        value={selectedMetrics}
        onChange={handleChange}
        isMulti
        closeMenuOnSelect={false}
        className="react-select-container"
        classNamePrefix="react-select"
        placeholder="Choose metrics..."
        styles={customStyles}
      />
    </div>
  )
}

export default MetricMultiSelect
