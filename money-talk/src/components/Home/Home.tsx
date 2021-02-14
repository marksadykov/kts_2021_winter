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

import useData from "../../store/useData";

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
                                    <div style={{ paddingBottom: '66%' }}>
                                    </div>
                                </Card>
                                <Card>
                                    <div style={{ paddingBottom: '66%' }} />
                                </Card>
                                <Card>
                                    <div style={{ paddingBottom: '66%' }} />
                                </Card>
                                <Card>
                                    <div style={{ paddingBottom: '66%' }} />
                                </Card>
                            </CardScroll>
                        </Group>
                        <CardScroll size="m">
                            <Card>
                                <div style={{ paddingBottom: '42%' }} />
                            </Card>
                            <Card>
                                <div style={{ paddingBottom: '42%' }} />
                            </Card>
                            <Card>
                                <div style={{ paddingBottom: '42%' }} />
                            </Card>
                            <Card>
                                <div style={{ paddingBottom: '42%' }} />
                            </Card>
                        </CardScroll>
                        <CardScroll size="l">
                            <Card>
                                <div style={{ paddingBottom: '29%' }} />
                            </Card>
                            <Card>
                                <div style={{ paddingBottom: '29%' }} />
                            </Card>
                            <Card>
                                <div style={{ paddingBottom: '29%' }} />
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
                <View activePanel="card" id="graphic">
                    <Panel id="card">
                        <PanelHeader>lol</PanelHeader>
                    </Panel>
                </View>
            </Root>);

};

export default Home;
