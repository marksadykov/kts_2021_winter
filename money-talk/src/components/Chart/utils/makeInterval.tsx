import * as React from 'react';

const makeInterval = () => {
    const today = new Date();
    const currentToday = {
      year: today.getFullYear(),
      month: today.getMonth() + 1,
      day: today.getDate(),
      hours: today.getHours(),
    };

    const end = `${currentToday.year}-0${currentToday.month}-${currentToday.day}T0${currentToday.hours}%3A00%3A00Z`;

    const start = `${currentToday.year}-0${currentToday.month}-${currentToday.day}T0${currentToday.hours-4}%3A00%3A00Z`;

    return [start, end];
}

export default makeInterval;
