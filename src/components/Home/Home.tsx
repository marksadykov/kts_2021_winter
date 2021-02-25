import * as React from 'react';
import {
    Card,
    CardGrid,
    CardScroll,
    CellButton,
    Group,
    Panel,
    PanelHeader,
    Root,
    View
} from "@vkontakte/vkui";

import styles from './Home.module.scss';
import {ReactSVG} from "react-svg";
import iconExchange from './icons/exchange.svg';
import iconIncrease from './icons/increase.png';
import Change from "../Change";
import Chart from "../Chart";
import SingleCurrency from "../SingleCurrency";

import {Panels} from "../../utils";
import CurrenciesTickerGraphics from "../CurrenciesTicker/components/CurrenciesTickerGraphics";
import CurrenciesTicker from "../CurrenciesTicker/CurrenciesTicker";
import SingleCurrencyPage from "../SingleCurrencyPage";
import { bitcoinHistory, ethereumHistory } from  '../TextMock/text';

const Home = () => {

    const [activeView, setActiveView] = React.useState('home');
    const [ticker, setTicker] = React.useState('')

    return (
        <Root activeView={activeView}>
            <View activePanel="card" id="home">
                <Panel id="card">
                    <PanelHeader>Money talk</PanelHeader>
                    <Group description="Опции">
                        <CardScroll size="s">
                            <Card>
                                <CellButton style={{ height: 150 }} onClick={ () => setActiveView('change') }>
                                    <ReactSVG
                                        src={iconExchange}
                                        className={styles.svgicon}
                                    />
                                </CellButton>
                            </Card>
                            <Card>
                                <CellButton style={{ height: 150 }} onClick={ () => setActiveView(Panels.currenciesTicker) }>
                                    <img
                                        src={iconIncrease}
                                        className={styles.svgicon}
                                    />
                                </CellButton>
                            </Card>
                            <Card>

                            </Card>
                        </CardScroll>
                    </Group>
                    <CardScroll size="s">
                        <Card>
                            <CellButton onClick={ () => setActiveView('bitcoin') }>
                                <SingleCurrency
                                    symbol="BTC"
                                    name="Bitcoin"
                                    logoUrl="https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg"
                                />
                            </CellButton>
                        </Card>
                        <Card>
                            <CellButton onClick={ () => setActiveView('ethereum') }>
                                <SingleCurrency
                                    symbol="ETH"
                                    name="Ethereum"
                                    logoUrl="https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/eth.svg"
                                />
                            </CellButton>
                        </Card>
                        <Card>
                            <SingleCurrency
                                symbol="LTC"
                                name="Litecoin"
                                logoUrl="https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/ltc.svg"
                            />
                        </Card>
                        <Card>
                            <SingleCurrency
                                symbol="XMR"
                                name="Monero"
                                logoUrl="https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/xmr.svg"
                            />
                        </Card>
                    </CardScroll>
                    <Group description="в Долларах">
                        <CardGrid size={"l"}>
                            <Card mode="shadow">
                                <Chart />
                            </Card>
                        </CardGrid>
                    </Group>
                </Panel>
            </View>
            <View activePanel="card" id="change">
                <Panel id="card">
                    <PanelHeader>Конвертер</PanelHeader>
                    <Change setActiveView={setActiveView} />
                </Panel>
            </View>
            <View activePanel="card" id={Panels.currenciesTicker}>
                <Panel id="card">
                    <CurrenciesTicker setActiveView={setActiveView} setTicker={setTicker}/>
                </Panel>
            </View>
            <View activePanel={Panels.info} id={Panels.info}>
                <Panel id={Panels.info}>
                    <CurrenciesTickerGraphics setActiveView={setActiveView} ticker={ticker}/>
                </Panel>
            </View>
            <View activePanel={'bitcoin'} id={'bitcoin'}>
                <Panel id={'bitcoin'}>
                    <SingleCurrencyPage
                        setActiveView={setActiveView}
                        nameOfCurrency="Bitcoin"
                        date="3 января 2009"
                        developer="Сатоси Накамото"
                        version="0.21.0 (15 января 2021)"
                        wideLogo="https://cdn21.img.ria.ru/images/151248/17/1512481729_0:122:3210:1928_1920x0_80_0_0_6302ec9a5e091a22bb71698a1c7869e7.jpg"
                        russianName="Биткоин"
                        value="49 513,30"
                        longLogo="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F908633080%2F960x0.jpg%3Ffit%3Dscale"
                        history={bitcoinHistory}
                    />
                </Panel>
            </View>
            <View activePanel={'ethereum'} id={'ethereum'}>
                <Panel id={'ethereum'}>
                    <SingleCurrencyPage
                        setActiveView={setActiveView}
                        nameOfCurrency="Ethereum"
                        date="30 июля 2015"
                        developer="Виталик Бутерин"
                        version="1.7.3 (21 ноября 2017)"
                        wideLogo="https://www.startupnedir.com/wp-content/uploads/2018/10/ethereum-1.png"
                        russianName="Эфириум"
                        value="1 586,51"
                        longLogo="https://www.financemagnates.com/wp-content/uploads/2020/12/Ethereum.jpg"
                        history={ethereumHistory}
                    />
                </Panel>
            </View>
        </Root>);
};

export default Home;
