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
import makeInterval from "./utils/makeInterval";
import {useLocalStore} from "../../utils/useLocal";
import {useAsync} from "../../utils/useAsync";
import WorldStore from "../../store/worldStore";
import {observer} from "mobx-react-lite";

const MainChart = () => {

    const screenWidth = useWindowSize();
    const [start, end] = makeInterval();
    const store = useLocalStore(() => new WorldStore(start, end));

    useAsync(store.fetch, []);

    return (
        <div
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
                height={150}
                data={store.world}
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

export default observer(MainChart);
