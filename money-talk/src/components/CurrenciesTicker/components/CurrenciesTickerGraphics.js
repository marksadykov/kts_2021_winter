import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from "axios";
import {apiUrls} from "../../../config/apiUrls";
import {useLocal} from "../../../utils/useLocal";
import {CurrenciesTickerStore} from "../../../store/CurennciesTickerStore/CurrenciesTickerStore";
import {useAsync} from "../../../utils/useAsync";
import {CurrenciesTickerGraphicsStore} from "../../../store/CurrenciesTickerGraphicsStore/CurrenciesTickerGraphicsStore";

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const Example = () => {
    const store = useLocal(() => new CurrenciesTickerGraphicsStore())

    useAsync(store.fetch, []);
    console.log(store.repos.map(data => data.prices))

    return (
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        );
}
export default Example
