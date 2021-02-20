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
import CurrenciesTickerSearch from "./CurrenciesTickerSearch";
import Test from "./test";
import {Meta} from "../../../utils/Meta";
import Loading from "./Loading";
import GraphicsCurrencies from "./test";

const CurrenciesTickerGraphicsComponent = (props: { sizeX?: any; platform?: any; setActiveView: any; ticker: any}) => {
    const store = useLocal(() => new CurrenciesTickerGraphicsStore(props.ticker))
    const [value, setValue] = React.useState(false)
    const [timeToRender, setTimeToRender] = React.useState(0);
    useAsync(store.fetch, []);

    const clearData: {date: string, Доллары: number}[] = [
        {
            date: '',
            Доллары: 0,
        },
    ];

    const graphicsTest = () => {
        store.repos.forEach((value) => {
//console.log('ssssss', value.prices, value.timestamps)
            for (let i = 0; i < 35; i+=5) {
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
                <Button onClick={ () => setValue(true)}>Показать график</Button>
                <GraphicsCurrencies clearData={graphicsTest()}/>
            </Panel>
        </View>

    )
}

const CurrenciesTickerGraphics = withPlatform(withAdaptivity(CurrenciesTickerGraphicsComponent, { sizeX: true }));

export default CurrenciesTickerGraphics;
