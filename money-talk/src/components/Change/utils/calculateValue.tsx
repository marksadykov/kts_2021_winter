import * as React from 'react';

const calculateValue = (firstValue: number, firstCountry: { country?: string; value: any; }, secondCountry: { country?: string; value: any; }) => {

    const secondValue = firstValue * ( firstCountry.value / secondCountry.value);

    if (isNaN(secondValue) || !isFinite(secondValue)) {
        return ' ';
    }
    
    return String(secondValue);
}

export default calculateValue;
