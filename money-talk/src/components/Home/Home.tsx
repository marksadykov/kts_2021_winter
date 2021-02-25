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
import iconExchange from './icons/exchange.svg'
import Change from "../Change";
import Chart from "../Chart";
import SingleCurrency from "../SingleCurrency";

const Home = () => {

    const [activeView, setActiveView] = React.useState('home');

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

                                </Card>
                                <Card>
                                </Card>
                                <Card>
                                </Card>
                                <Card>
                                </Card>
                                <Card>
                                </Card>
                            </CardScroll>
                        </Group>
                        <CardScroll size="s">
                            <Card>
                                <SingleCurrency
                                    symbol="BTC"
                                    name="Bitcoin"
                                    logoUrl="https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg"
                                />
                            </Card>
                            <Card>
                                <SingleCurrency
                                    symbol="ETH"
                                    name="Ethereum"
                                    logoUrl="https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/eth.svg"
                                />
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
                        <CardScroll size="l">
                            <Card>
                                <div>l</div>
                            </Card>
                            <Card>
                            </Card>
                            <Card>
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
            </Root>);
};

export default Home;
