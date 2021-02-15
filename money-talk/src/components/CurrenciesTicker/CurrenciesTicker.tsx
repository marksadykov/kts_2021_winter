import React, {useState} from "react";
import {
    ANDROID, FormItem,
    Group, Input, IOS, ModalPage,
    ModalPageHeader, ModalRoot,
    Panel, PanelHeaderButton, Slider, View,
    withAdaptivity,
    withPlatform
} from "@vkontakte/vkui";
import {Icon24Cancel, Icon24Done} from "@vkontakte/icons";


import CurrenciesTickerSearch from "./components/CurrenciesTickerSearch";
import CurrenciesTickerFilter from "./components/CurrenciesTickerFilter";


const CurrenciesTickerComponent = (props: { sizeX?: any; platform?: any; }) => {
    const [activeView, setActiveView] = React.useState('home');
    const [activePanel, setActivePanel] = useState('search')
    const [activeModal, setActiveModal] = useState<null | string>(null)
    const [filterSlider, setFilterSlider] = React.useState<any>(null);
    const goHeaderSearch = () => { setActivePanel('header-search') }
    const goHome = () => {setActivePanel('home')}
    const goSearch = () => { setActivePanel('home') }
    const hideModal = () => { setActiveModal(null) }

    const { platform } = props;

    console.log(platform)
    return (
        <View
            activePanel={activePanel}
            modal={
                <ModalRoot activeModal={activeModal}>
                    <ModalPage
                        id="filters"
                        onClose={hideModal}
                        header={
                            <ModalPageHeader
                                left={platform === ANDROID && <PanelHeaderButton onClick={hideModal}><Icon24Cancel /></PanelHeaderButton>}
                                right={<PanelHeaderButton onClick={hideModal}>{platform === IOS ? 'Готово' : <Icon24Done />}</PanelHeaderButton>}
                            >
                                Фильтры
                            </ModalPageHeader>
                        }
                    >
                        <Group>
                            <FormItem top="Simple 0, 10000]">
                                <Slider
                                    min={0}
                                    max={10000}
                                    value={Number(filterSlider)}
                                    onChange={value => setFilterSlider(value)}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    value={String(filterSlider)}
                                    onChange={e => setFilterSlider(e.target.value)}
                                    type="number"
                                />
                            </FormItem>
                        </Group>
                    </ModalPage>
                </ModalRoot>
            }
        >
            <Panel id="search">
                <CurrenciesTickerSearch
                    sizeX={props.sizeX}
                    goHeaderSearch={goHeaderSearch}
                    goHome={goHome}
                    platform={platform}
                    onFiltersClick={() => setActiveModal('filters')}
                    goSearch={goSearch}
                    hideModal={hideModal}
                    filterSlide={filterSlider}

                />
            </Panel>
            <Panel id="header-search">
                <CurrenciesTickerFilter
                    sizeX={props.sizeX}
                    onFiltersClick={() => setActiveModal('filters')}
                    goSearch={goSearch} platform={platform}
                    hideModal={hideModal}
                    filterSlide={filterSlider}
                />
            </Panel>
        </View>
    );
}

const CurrenciesTicker = withPlatform(withAdaptivity(CurrenciesTickerComponent, { sizeX: true }));

export default CurrenciesTicker;
