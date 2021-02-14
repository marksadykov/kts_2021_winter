import * as React from 'react';

const changeHours = (currentDate: Date, hours: number) => {
    const date = new Date(currentDate.valueOf());
    date.setDate(date.getHours() - hours);
    return date;
}

const makeInterval = () => {
    const end = new Date();

    const start = changeHours(end, 4);

    console.log(start, end);
    return [start.toISOString(), end.toISOString()];
}

export default makeInterval;
