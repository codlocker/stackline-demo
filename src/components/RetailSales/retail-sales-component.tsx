import React from "react";
import { Card } from "react-bootstrap";
import { ChartLine } from "./line-chart";

/*
 * React functional component to generate sales chart.
 */
const RetailSalesComponent = () => {
    return (
        <Card className="retail-sales bg-white mb-4">
            <Card.Body>
                <Card.Title className="text-left display-6">Retail Sales</Card.Title>
                <ChartLine />
            </Card.Body>
            
        </Card>
    )
};

export default RetailSalesComponent;