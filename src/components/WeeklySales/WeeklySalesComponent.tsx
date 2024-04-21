import React, { useEffect, useState } from "react";
import { Card, Table, Row, Col } from "react-bootstrap";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { useAppSelector } from "../../types/hooks";
import { RootState } from "../../store";
import { SalesEntity } from "../../types/sales-entity";
import "./weekly-sales.scss";

const WeeklySalesComponent = () => {
    const sales = useAppSelector((state: RootState) => state.product.sales);
    const [salesData, setSalesData] = useState<SalesEntity[]>(sales || []);
    useEffect(() => {
        if(sales) {
            setSalesData(sales);
        }
    }, [sales]);

    const sortByParams = (prop: string, key: string) => {
        let sortedData: SalesEntity[] = [];
        switch (prop) {
            case "weekEnding":
                sortedData = salesData.slice().sort((a, b) => {
                    const comp = a.weekEnding.localeCompare(b.weekEnding);
                    return key == "asc" ? comp : -1 * comp;
                });
                break;
            case "retailSales":
                sortedData = salesData.slice().sort((a, b) => {
                    const comp = a.retailSales - b.retailSales;
                    return key == "asc" ? comp : -1 * comp;
                });
                break;

            case "wholesaleSales":
                sortedData = salesData.slice().sort((a, b) => {
                    const comp = a.wholesaleSales - b.wholesaleSales;
                    return key == "asc" ? comp : -1 * comp;
                });
                break;

            case "unitsSold":
                sortedData = salesData.slice().sort((a, b) => {
                    const comp = a.unitsSold - b.unitsSold;
                    return key == "asc" ? comp : -1 * comp;
                });
                break;
            case "retailerMargin":
                sortedData = salesData.slice().sort((a, b) => {
                    const comp = a.retailerMargin - b.retailerMargin;
                    return key == "asc" ? comp : -1 * comp;
                });
                break;
            default:
                break;
        }

        setSalesData(sortedData);
    };

    return (
        <Card className="weekly-sales">
            <Table striped="columns">
                <thead>
                    <tr>
                        <th>
                            WEEK ENDING
                            <span onClick={() => sortByParams("weekEnding", "asc")}><SlArrowDown /> </span>
                            <span onClick={() => sortByParams("weekEnding", "desc")}><SlArrowUp /> </span>
                        </th>
                        <th>
                            RETAIL SALES
                            <span onClick={() => sortByParams("retailSales", "asc")}><SlArrowDown /> </span>
                            <span onClick={() => sortByParams("retailSales", "desc")}><SlArrowUp /> </span>
                        </th>
                        <th>
                            WHOLESALE SALES
                            <span onClick={() => sortByParams("wholesaleSales", "asc")}><SlArrowDown /> </span>
                            <span onClick={() => sortByParams("wholesaleSales", "desc")}><SlArrowUp /> </span>
                        </th>
                        <th>
                            UNITS SOLD
                            <span onClick={() => sortByParams("unitsSold", "asc")}><SlArrowDown /> </span>
                            <span onClick={() => sortByParams("unitsSold", "desc")}><SlArrowUp /> </span>
                        </th>
                        <th>
                            RETAILER MARGIN
                            <span onClick={() => sortByParams("retailerMargin", "asc")}><SlArrowDown /> </span>
                            <span onClick={() => sortByParams("retailerMargin", "desc")}><SlArrowUp /> </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    { salesData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.weekEnding}</td>
                            <td>{item.retailSales}</td>
                            <td>{item.wholesaleSales}</td>
                            <td>{item.unitsSold}</td>
                            <td>{item.retailerMargin}</td>
                        </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Card>
    )
};

export default WeeklySalesComponent;