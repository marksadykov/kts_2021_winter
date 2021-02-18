import * as React from "react";
import {
    PanelHeader,
    PanelHeaderBack,
    VKCOM,
    SizeType,
    withAdaptivity,
    withPlatform,
    Panel,
    FormItem, Slider, Textarea, View
} from "@vkontakte/vkui";
import {useLocal} from "../../../utils/useLocal";
import {CurrenciesTickerGraphicsStore} from "../../../store/CurrenciesTickerGraphicsStore/CurrenciesTickerGraphicsStore";
import {useAsync} from "../../../utils/useAsync";
import CurrenciesTickerSearch from "./CurrenciesTickerSearch";
import Test from "./test";
import {Meta} from "../../../utils/Meta";
import Loading from "./Loading";

const CurrenciesTickerGraphicsComponent = (props: { sizeX?: any; platform?: any; setActiveView: any; ticker: any}) => {
    const store = useLocal(() => new CurrenciesTickerGraphicsStore())
    const [timeToRender, setTimeToRender] = React.useState(0);
    useAsync(store.fetch, []);

    const clearData: {date: string, Доллары: number}[] = [
        {
            date: '',
            Доллары: 0,
        },
    ];


    React.useEffect(() => {
    store.repos.forEach((value) => {
    console.log('ssssss', value.prices, value.timestamps)
        for (let i = 0; i < 30; i+=5) {
            const current = {
                date: String(value.timestamps[i]),
                Доллары: Number(Math.floor(Number(value.prices[i]))),
            };
            clearData.push(current);
        }});
        console.log(clearData)
        clearData.length > 1 && clearData.shift();
        setTimeToRender(timeToRender => timeToRender + 1);
        }, [store]);


    return (
        <View activePanel='info'>
            <Panel id="info">
                <PanelHeader
                    left={props.platform !== VKCOM &&
                    <PanelHeaderBack onClick={() => props.setActiveView('home')}  />}
                    separator={props.sizeX === SizeType.REGULAR}
                >
                    {props.ticker}
                </PanelHeader>
                <Test clearData={clearData}/>
            </Panel>
        </View>

    )
}

const CurrenciesTickerGraphics = withPlatform(withAdaptivity(CurrenciesTickerGraphicsComponent, { sizeX: true }));

export default CurrenciesTickerGraphics;
