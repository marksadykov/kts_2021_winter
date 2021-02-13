import * as React from 'react';
import {
    LineChart,
    XAxis,
    Tooltip,
    CartesianGrid,
    Line,
} from 'recharts';
import useWindowSize from "../../utils/useWindowSize";
import styles from './Chart.module.scss';
import {Title} from "@vkontakte/vkui";

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
        Рубль: 2000,
        Евро: 9800,
    },
    {
        date: 'Page E',
        Рубль: 2000,
        Евро: 9800,
    },
];

const MainChart = () => {

    const screenWidth = useWindowSize();

    return (
        <div className={styles.chartStyle}>
            <Title level="3" weight="bold" style={{
                marginBottom: 8,
                marginTop: 8,
                marginLeft: '5%',
                marginRight: '5%' }}
            >
                Динамика рубля и евро
            </Title>
            <LineChart
                width={screenWidth.width-40}
                height={300}
                data={data}
            >
                <XAxis dataKey="date" tick={{ fill: '#818c99', fontSize: 13 }}/>
                <Tooltip wrapperStyle={{ fontSize: 13 }}/>
                <CartesianGrid stroke="#f5f5f5" />
                <Line type="monotone" dataKey="Рубль" stroke="#ff7300" yAxisId={0} />
                <Line type="monotone" dataKey="Евро" stroke="#387908" yAxisId={1} />
            </LineChart>
        </div>
    );
};

export default MainChart;
