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
import useData from "../../store/useData";
import makeInterval from "./utils/makeInterval";

const clearData: {date: string, Доллары: number}[] = [
    {
        date: 'n',
        Доллары: 0,
    },
];

const MainChart = () => {

    const [timeToRender, setTimeToRender] = React.useState(0);

    const screenWidth = useWindowSize();

    // const [start, end] = makeInterval();

    const data = useData('volume/history',
        // start,
        // end
        '2021-02-14T00%3A00%3A00Z',
        '2021-02-15T00%3A00%3A00Z'
    );

    React.useEffect(() => {
        data.forEach((item: {timestamp: string, volume: string}) => {
            const current = {
                date: String((item.timestamp) ? item.timestamp : 'n'),
                Доллары: Number((item.volume) ? item.volume : 0),
            };
            clearData.push(current);
        });
        console.log(data);
        clearData.length > 1 && clearData.shift();
        setTimeToRender(timeToRender => timeToRender + 1);
    }, [data]);

    return (
        <div
            key={timeToRender}
            className={styles.chartStyle}
        >
            <Title level="3" weight="bold" style={{
                marginBottom: 8,
                marginTop: 8,
                marginLeft: '5%',
                marginRight: '5%' }}
            >
                Общий объем всех криптоактивов
            </Title>
            <LineChart
                width={screenWidth.width-40}
                height={200}
                data={clearData}
            >
                <XAxis dataKey="date" tick={{ fill: '#818c99', fontSize: 13 }}/>
                <Tooltip wrapperStyle={{ fontSize: 13 }}/>
                <CartesianGrid stroke="#f5f5f5" />
                <Line type="monotone" dataKey="Доллары" stroke="#ff7300" yAxisId={0} />
                {/*<Line type="monotone" dataKey="Евро" stroke="#387908" yAxisId={1} />*/}
            </LineChart>
        </div>
    );
};

export default MainChart;
