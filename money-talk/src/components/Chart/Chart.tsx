import * as React from 'react';
import {
    LineChart,
    XAxis,
    Tooltip,
    CartesianGrid,
    Line,
} from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
    },
];

const MyChart = () => {

    return (
        <LineChart
            width={360}
            height={300}
            data={data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
            <XAxis dataKey="name" />
            <Tooltip />
            <CartesianGrid stroke="#f5f5f5" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
            <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
        </LineChart>
    );
}

export default MyChart;
