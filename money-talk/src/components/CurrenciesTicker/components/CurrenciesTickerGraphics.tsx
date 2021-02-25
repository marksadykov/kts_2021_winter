import * as React from "react";
import {
    PanelHeader,
    PanelHeaderBack,
    VKCOM,
    SizeType,
    withAdaptivity,
    withPlatform,
    Panel,
    View,
    Button
} from "@vkontakte/vkui";
import {Panels, useLocal} from "../../../utils";
import {CurrenciesTickerGraphicsStore} from "../../../store/CurrenciesTickerGraphicsStore";
import {useAsync} from "../../../utils";
import Graphics from "./Graphics";
import InfoCurrenciesTicker from "./InfoCurrenciesTicker";
import PercentageInformationCurrencies from "./PercentageInformationCurrencies";
import moment from "moment";
import {useState} from "react";
import {observer} from "mobx-react-lite";

const CurrenciesTickerGraphicsComponent = (props: { sizeX?: any; platform?: any; setActiveView: any; ticker: any}) => {
    const store = useLocal(() => new CurrenciesTickerGraphicsStore(props.ticker))
    const [show, setShow] = React.useState(false)
    useAsync(store.fetch, []);


    const clearData: {date: string, Доллары: number}[] = [
        {
            date: '',
            Доллары: 0,
        },
    ];

    const graphicsData = () => {
        store.repos.forEach((value) => {
            console.log(value.prices.length)
            for (let i = 0; i < value.prices.length; i++) {
                const current = {
                    date: moment(String(value.timestamps[i])).format('LL'),
                    Доллары: Number(Math.floor(Number(value.prices[i]))),
                };
                console.log(current)
                clearData.push(current);
            }});
        return clearData;
    }



    return (
        <View activePanel={Panels.info}>
            <Panel id={Panels.info}>
                <PanelHeader
                    left={props.platform !== VKCOM &&
                    <PanelHeaderBack onClick={() => props.setActiveView(Panels.home)} />}
                    separator={props.sizeX === SizeType.REGULAR}
                >
                    {props.ticker}
                </PanelHeader>
                <Button stretched mode="secondary" size="m" onClick={ () => setShow(!show)}>Обновить график</Button>
                <PercentageInformationCurrencies ticker={props.ticker}/>
                <Graphics clearData={graphicsData()}/>
                <InfoCurrenciesTicker ticker={props.ticker}/>
            </Panel>
        </View>

    )
}

const CurrenciesTickerGraphics = withPlatform(withAdaptivity(CurrenciesTickerGraphicsComponent, { sizeX: true }));

export default observer(CurrenciesTickerGraphics);
