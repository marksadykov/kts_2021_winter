import * as React from 'react';

const interval: number = 6;

const changeHours = (currentDate: Date, days: number) => {
    const date = new Date(currentDate.valueOf());
    date.setDate(date.getDate() - days);
    return date;
}

const makeInterval = () => {
    const end = new Date();
    const start = changeHours(end, interval);
    return [start.toISOString(), end.toISOString()];
}

export default makeInterval;
