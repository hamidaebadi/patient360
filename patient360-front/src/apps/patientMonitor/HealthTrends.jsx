import React from "react";
import { useState } from "react";
import MetricMultiSelect from "./MetricMultiselect";
const HealthTrends = () => {
    const [searchValue, setSearchValue] = useState('')
    const [selectedMetrics, setSelectedMetrics] = useState([]);


    const handleSearchField = (e) => {
        setSearchValue(e.target.value)
    }

    return(
        <>
            <div className="flex md:flex-col">
                <div className="flex md:flex-col">
                    <div className="w-full max-w-3xl mx-auto">
                        <input
                            type="text"
                            value={searchValue}
                            onChange={handleSearchField}
                            placeholder="Search patient"
                            className="w-full px-6 py-4 text-lg rounded-2xl border 
                            border-gray-300 shadow-sm focus:outline-none 
                            focus:ring-2 focus:ring-gray-500 focus:bg-gray-800
                             focus:border-gray-500 transition
                            bg-white text-white placeholder-gray-400"
                        />
                    </div>
                    <MetricMultiSelect 
                    selectedMetrics={selectedMetrics}
                    setSelectedMetrics={setSelectedMetrics}
                    />
                </div>
            </div>
        </>
    )
}

export default HealthTrends