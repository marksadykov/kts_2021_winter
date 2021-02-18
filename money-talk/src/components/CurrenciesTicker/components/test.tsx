import * as React from "react";
import {
    LineChart,
    XAxis,
    Tooltip,
    CartesianGrid,
    Line,
} from 'recharts';


const Test = (props: any) => {
    console.log(props.clearData)
    return <LineChart
        width={200}
        height={200}
        data={props.clearData}
    >
        <XAxis dataKey="date" tick={{ fill: '#818c99', fontSize: 13 }}/>
        <Tooltip wrapperStyle={{ fontSize: 13 }}/>
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="Доллары" stroke="#ff7300" yAxisId={0} />
        </LineChart>
}

export default Test;
