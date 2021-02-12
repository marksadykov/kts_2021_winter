import * as React from 'react';
import {
    LineChart,
    XAxis,
    Tooltip,
    CartesianGrid,
    Line,
} from 'recharts';
import useWindowSize from "../../utils/useWindowSize";

const data = [
    {
        date: 'Page A',
        Рубль: 4000,
        Евро: 2400,
    },
    {
        date: 'Page B',
        Рубль: 3000,
        Евро: 1398,
    },
    {
        date: 'Page C',
        Рубль: 2000,
        Евро: 9800,
    },
    {
        date: 'Page D',
        Рубль: 2780,
        Евро: 3908,
    },
    {
        date: 'Page E',
        Рубль: 1890,
        Евро: 4800,
    },
    {
        date: 'Page F',
        Рубль: 2390,
        Евро: 3800,
    },
    {
        date: '12.02',
        Рубль: 3490,
        Евро: 4300,
    },
];

const MainChart = () => {

    const screenWidth = useWindowSize();

    return (
        <LineChart
            width={screenWidth.width}
            height={300}
            data={data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
            <XAxis dataKey="date" />
            <Tooltip />
            <CartesianGrid stroke="#f5f5f5" />
            <Line type="monotone" dataKey="Рубль" stroke="#ff7300" yAxisId={0} />
            <Line type="monotone" dataKey="Евро" stroke="#387908" yAxisId={1} />
        </LineChart>
    );
}

export default MainChart;
