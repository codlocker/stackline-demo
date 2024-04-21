import { useState, useRef, ReactElement } from 'react';
import { useAppSelector } from "../../types/hooks";
import { RootState } from "../../store";
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // ADD THIS

export const ChartLine = (): ReactElement => {
    const ref = useRef();

    const retailSales: number[] = useAppSelector(
        (state: RootState) => state.product.sales.map(les => les.retailSales));

    const wholesaleSales: number[] = useAppSelector(
        (state: RootState) => state.product.sales.map(les => les.wholesaleSales));

    const weekEnding: string[] = useAppSelector(
        (state: RootState) =>
            state.product.sales.map(sale => {
                const date = new Date(sale.weekEnding);
                const month = date.toLocaleString('en-US', { month: 'short' });
                const year = date.getFullYear()
                return `${month}-${year}`;
            }
        ));
    
    const data = {
        labels: weekEnding,
        datasets: [
            {
                label: 'Retail Sales',
                data: retailSales,
                fill: false,
                borderColor: '#00ACFC'
            },
            {
                label: 'Wholesale Sales',
                data: wholesaleSales,
                fill: false,
                borderColor: '#939393',
            },
        ],
    };

    return <Line ref={ref} data={data} />
};