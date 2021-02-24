import * as React from 'react';
import {Card, CardScroll, CellButton, Group, Panel, PanelHeader, platform, Root, View} from "@vkontakte/vkui";
import {useState} from "react";
import CurrenciesTicker from "../CurrenciesTicker/CurrenciesTicker";
import CurrenciesTickerGraphics from "../CurrenciesTicker/components/CurrenciesTickerGraphics";
import {Panels} from "../../utils";




const Home = () => {

    const [activeView, setActiveView] = useState('home');
    const [ticker, setTicker] = useState('')

    return (
            <Root activeView={activeView}>
                <View activePanel="card" id="home">
                    <Panel id="card">
                        <PanelHeader>Money Talk</PanelHeader>
                        <Group description="Внутри Group">
                            <CardScroll size="s">
                                <Card>
                                    <div style={{ paddingBottom: '66%' }}>
                                        <CellButton onClick={ () => setActiveView('lol') }>
                                            lol
                                        </CellButton>
                                    </div>
                                </Card>
                                <Card>
                                    <div style={{ paddingBottom: '66%' }}>
                                        <CellButton onClick={ () => setActiveView(Panels.currenciesTicker) }>
                                            Currencies Ticker Table
                                        </CellButton>
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
                    </Panel>
                </View>
                <View activePanel="card" id={Panels.currenciesTicker}>
                    <Panel id="card">
                        <CurrenciesTicker setActiveView={setActiveView} setTicker={setTicker}/>
                    </Panel>
                </View>
                <View activePanel="card" id="lol">
                    <Panel id="card">
                        <PanelHeader>lol</PanelHeader>
                    </Panel>
                </View>
                <View activePanel={Panels.info} id={Panels.info}>
                    <Panel id={Panels.info}>
                        <CurrenciesTickerGraphics setActiveView={setActiveView} ticker={ticker}/>
                    </Panel>
                </View>
            </Root>);

};

export default Home;
