import React from "react";
import { Card, Table } from "react-bootstrap";
import { useAppSelector } from "../../types/hooks";
import { RootState } from "../../store";
import { SalesEntity } from "../../types/sales-entity";

const WeeklySalesComponent = () => {
    const sales: SalesEntity[] = useAppSelector((state: RootState) => state.product.sales);
    console.log(sales)
    return (
        <Card className="weekly-sales">
            <Table striped="columns">
                <thead>
                    <tr>
                        <th>WEEK ENDING</th>
                        <th>RETAIL SALES</th>
                        <th>WHOLESALE SALES</th>
                        <th>UNITS SOLD</th>
                        <th>RETAILER MARGIN</th>
                    </tr>
                </thead>
                <tbody>
                    { sales.map((item, index) => (
                        <tr key={index}>
                            <td key={index}>{item.weekEnding}</td>
                            <td key={index}>{item.retailSales}</td>
                            <td key={index}>{item.wholesaleSales}</td>
                            <td key={index}>{item.unitsSold}</td>
                            <td key={index}>{item.retailerMargin}</td>
                        </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Card>
    )
};

export default WeeklySalesComponent;