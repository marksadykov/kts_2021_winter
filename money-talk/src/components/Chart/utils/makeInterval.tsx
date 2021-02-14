import * as React from 'react';

const makeInterval = () => {
    const today = new Date();
    const prev = today.setDate(today.getDate() - 4);
    const currentToday = {
      year: today.getFullYear(),
      month: today.getMonth() + 1,
      day: today.getDate(),
      hours: today.getHours(),
    };
    // const currentPrev = {
    //     year: prev.getFullYear(),
    //     month: prev.getMonth() + 1,
    //     day: prev.getDate(),
    //     hours: prev.getHours(),
    // };

    console.log(prev);

    const endZeroMonth = (currentToday.month < 10) ? '0' : '';
    const startZeroMonth = (currentToday.month < 10) ? '0' : '';

    const end = `${currentToday.year}-${endZeroMonth}${currentToday.month}-${currentToday.day}T0${currentToday.hours}%3A00%3A00Z`;
    const start = `${currentToday.year}-0${currentToday.month}-${currentToday.day}T0${currentToday.hours-4}%3A00%3A00Z`;

    return [start, end];
}

export default makeInterval;
