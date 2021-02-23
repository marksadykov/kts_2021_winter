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
import {useLocalStore} from "../../utils/useLocal";
import {useAsync} from "../../utils/useAsync";
import singleCurrencyStore from "../../store/singleCurrencyStore";

const Home = () => {

    const [activeView, setActiveView] = React.useState('home');

    const store = useLocalStore(() => new singleCurrencyStore(['BTC','ETH', 'LTC', 'XMR']));

    useAsync(store.fetch, []);

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
                                <SingleCurrency />
                            </Card>
                            <Card>
                            </Card>
                            <Card>
                            </Card>
                            <Card>
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
