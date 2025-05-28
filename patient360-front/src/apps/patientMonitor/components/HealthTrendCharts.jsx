import React from "react";
import HeartRateChart from "./HeartRateChart";

const HealthTrendCharts = ({metric_type, data}) => {

    switch (metric_type) {
        case "heart_rate":
            return(
                <>
                <HeartRateChart data={data}/>
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