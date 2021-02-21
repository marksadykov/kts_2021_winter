import * as React from 'react';

const changeHours = (currentDate: Date, hours: number) => {
    const date = new Date(currentDate.valueOf());
    date.setDate(date.getDate() - hours);
    return date;
}

const makeInterval = () => {
    const end = new Date();

    const start = changeHours(end, 4);

    // console.log(start, end);
    // console.log(start.toISOString(), end.toISOString());
    return [start.toISOString(), end.toISOString()];
}

export default makeInterval;
