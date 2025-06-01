import React from "react";
import HeartRateChart from "./HeartRateChart";
import BloodPressureChart from "./BloodPressureChart";

const HealthTrendCharts = ({metric_type, data}) => {

    switch (metric_type) {
        case "heart_rate":
            return(
                <>
                <HeartRateChart data={data}/>
                </>
            )

        case "blood_pressure":
            return(
                <>
                <BloodPressureChart data={data}/>
                </>
            )
    
        default:
            return(
                <>
                Chart {metric_type} not available
                </>
            )
    }
}

export default HealthTrendCharts