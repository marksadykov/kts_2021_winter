import * as React from "react";
import {useLocal} from "../../../utils/useLocal";
import {CurrenciesTickerGraphicsStore} from "../../../store/CurrenciesTickerGraphicsStore/CurrenciesTickerGraphicsStore";
import {useAsync} from "../../../utils/useAsync";

const PercentageInformationCurrencies = (props: { ticker: any; }) => {
    const store = useLocal(() => new CurrenciesTickerGraphicsStore(props.ticker))
    useAsync(store.fetch, []);
    const currentValue: any = store.repos.map(data => data.prices[data.prices.length - 2])
    const previousValue: any = store.repos.map(data => data.prices[data.prices.length - 3])
    const percentageValue = ((currentValue - previousValue) / previousValue) * 100
    const valueDollars = (currentValue - previousValue)

    return (
        <>
            {!isNaN(percentageValue) && Math.sign(percentageValue) === 1 &&
            <div style={{textAlign: 'center', marginTop: '20px', color: 'green'}}>{valueDollars.toFixed(3)} $
                ({percentageValue.toFixed(3)} %)</div>
            }
            {!isNaN(percentageValue) && Math.sign(percentageValue) === -1 &&
            <div style={{textAlign: 'center', marginTop: '20px', color: 'red'}}>{valueDollars.toFixed(3)} $
                ({percentageValue.toFixed(3)} %)</div>
            }
        </>
    )
}


export default PercentageInformationCurrencies;
