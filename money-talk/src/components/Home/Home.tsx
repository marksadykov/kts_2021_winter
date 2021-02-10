import * as React from 'react';
import {Card, CardScroll, CellButton, Group, Panel, PanelHeader, Root, View} from "@vkontakte/vkui";
import {useState} from "react";
import CurrenciesTicker from "../CurrenciesTicker/CurrenciesTicker";



const Home = () => {

    const [activeView, setActiveView] = useState('home');

    return (
            <Root activeView={activeView}>
                <View activePanel="card" id="home">
                    <Panel id="card">
                        <PanelHeader>CardScroll</PanelHeader>
                        <Group description="Внутри Group">
                            <CardScroll size="s">
                                <Card>
                                    <div style={{ paddingBottom: '66%' }}>
                                        <CellButton onClick={ () => setActiveView('currenciesTicker') }>
                                            Currencies Ticker
                                        </CellButton>
                                    </div>
                                </Card>
                                <Card>
                                    <div style={{ paddingBottom: '66%' }}>
                                        <CellButton onClick={ () => setActiveView('lol') }>
                                            lol
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
                <View activePanel="card" id="currenciesTicker">
                    <Panel id="card">
                        <CurrenciesTicker/>
                    </Panel>
                </View>
                <View activePanel="card" id="lol">
                    <Panel id="card">
                        <PanelHeader>lol</PanelHeader>
                    </Panel>
                </View>
            </Root>);

};

export default Home;
