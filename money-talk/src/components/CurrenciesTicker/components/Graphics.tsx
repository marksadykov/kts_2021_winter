import * as React from "react";
import {
    AreaChart,
    XAxis,
    Tooltip,
    CartesianGrid,
    Line, Legend, YAxis, Area,
} from 'recharts';

const Graphics = (props: any) => {

    return (
        <div>
            {/*<LineChart
                width={400}
                height={200}
                data={props.clearData}
            >
                <XAxis dataKey="date" tick={{ fill: '#818c99', fontSize: 15 }}/>
                <Tooltip wrapperStyle={{ fontSize: 13 }}/>
                <CartesianGrid stroke="#f5f5f5" />
                <Line type="monotone" dataKey="Доллары" stroke="#ff7300" yAxisId={0} />
            </LineChart>*/}
            <AreaChart width={400} height={250} data={props.clearData}
                       margin={{ top: 10, right: 30, left: 20, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="date" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="Доллары" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>
        </div>
    )
}

export default Graphics;
