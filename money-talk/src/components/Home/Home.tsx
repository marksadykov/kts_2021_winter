import * as React from 'react';
import {Card, CardScroll, CellButton, Group, Panel, PanelHeader, Root, View} from "@vkontakte/vkui";
import {useState} from "react";

import styles from './Home.module.scss';
import {ReactSVG} from "react-svg";
import iconExchange from './icons/exchange.svg'
import Change from "../Change";

const Home = () => {

    const [activeView, setActiveView] = useState('home');

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
