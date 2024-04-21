import React from "react";
import { ChartLine } from "./LineChart";

const RetailSalesComponent = () => {
    return (
        <div className="retail-sales">
            <h6 className="text-left display-6">Retail Sales</h6>
            <ChartLine />
        </div>
    )
};

export default RetailSalesComponent;