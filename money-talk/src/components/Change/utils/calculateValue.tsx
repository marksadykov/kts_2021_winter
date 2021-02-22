import * as React from 'react';

const calculateValue = (firstValue: number, firstCountry: { country?: string; value: any; }, secondCountry: { country?: string; value: any; }) => {

    const secondValue = String(firstValue * ( firstCountry.value / secondCountry.value));

    return (secondValue === 'NaN' ? '' : secondValue);
}

export default calculateValue;
