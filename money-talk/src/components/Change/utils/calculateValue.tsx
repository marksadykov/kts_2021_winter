import * as React from 'react';

const calculateValue = (firstValue: number, firstCountry: { country?: string; value: any; }, secondCountry: { country?: string; value: any; }) => {
    // ерво\доллар = 0.75 \1 => евро = 0.75 * доллар
    //
    // рубль\доллар = 65 \1 => доллар = рубль / 65
    //
    // евро = 0.75 * (рубль / 65)

    const secondValue = String(secondCountry.value * (firstValue / firstCountry.value));

    return (secondValue === 'NaN' ? '' : secondValue);
}

export default calculateValue;
