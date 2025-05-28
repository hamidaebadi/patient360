import React from "react";
import Select from "react-select"

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
    singleValue: (base) => ({
        ...base,
        backgroundColor: "#1f2937", // gray-800
        color: "#FFFFFF", // white
        borderRadius: "0.375rem",
        padding: "0.3rem",
        fontSize: "1.1rem",
    }),
    valueLabel: (base) => ({
        ...base,
        color: "#FFFFFF", // blue-700
    }),
    menu: (base) => ({
        ...base,
        borderRadius: "0.5rem",
        marginTop: "0.25rem",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        zIndex: 50,
    }),
    
    input:(base) => ({
        ...base,
        color:"white"
    })
    };

const PatientSelect = ({
    patientOptions, 
    selectedPatient, 
    setSelectedPatient
}) => {
    const handleChange = (selected) => setSelectedPatient(selected || '')

    return(
        <>
         <div className="w-full max-w-3xl mx-auto my-4 text-xl">
              <Select
                options={patientOptions.map(patient => ({value: patient.id, label:patient.name }))}
                value={selectedPatient}
                onChange={handleChange}
                closeMenuOnSelect={true}
                className="react-select-container"
                classNamePrefix="react-select"
                placeholder="Select patient..."
                styles={customStyles}
              />
            </div>
        </>
    )
}

export default PatientSelect