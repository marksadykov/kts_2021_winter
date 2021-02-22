import * as React from "react";
import {
    PanelHeader,
    PanelHeaderBack,
    VKCOM,
    SizeType,
    withAdaptivity,
    withPlatform,
    Panel,
    FormItem, Slider, Textarea, View, Button
} from "@vkontakte/vkui";
import {useLocal} from "../../../utils/useLocal";
import {CurrenciesTickerGraphicsStore} from "../../../store/CurrenciesTickerGraphicsStore/CurrenciesTickerGraphicsStore";
import {useAsync} from "../../../utils/useAsync";
import Graphics from "./Graphics";
import InfoCurrenciesTicker from "./InfoCurrenciesTicker";
import PercentageInformationCurrencies from "./PercentageInformationCurrencies";

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
            for (let i = 0; i < 43; i+=3) {
                const current = {
                    date: String(value.timestamps[i]),
                    Доллары: Number(Math.floor(Number(value.prices[i]))),
                };
                console.log(current)
                clearData.push(current);
            }});
        return clearData;
    }


    return (
        <View activePanel='info'>
            <Panel id="info">
                <PanelHeader
                    left={props.platform !== VKCOM &&
                    <PanelHeaderBack onClick={() => props.setActiveView('home')} />}
                    separator={props.sizeX === SizeType.REGULAR}
                >
                    {props.ticker}
                </PanelHeader>
                <Button stretched mode="secondary" size="m" onClick={ () => setShow(!show)}>Показать график</Button>
                <PercentageInformationCurrencies ticker={props.ticker}/>
                <Graphics clearData={graphicsData()}/>
                <InfoCurrenciesTicker ticker={props.ticker}/>
            </Panel>
        </View>

    )
}

const CurrenciesTickerGraphics = withPlatform(withAdaptivity(CurrenciesTickerGraphicsComponent, { sizeX: true }));

export default CurrenciesTickerGraphics;
