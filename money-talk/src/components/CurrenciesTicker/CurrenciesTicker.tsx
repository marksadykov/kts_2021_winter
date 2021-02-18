import React, {useState} from "react";
import {
    ANDROID, FormItem,
    Group, Input, IOS, ModalPage,
    ModalPageHeader, ModalRoot,
    Panel, PanelHeader, PanelHeaderBack, PanelHeaderButton, SizeType, Slider, Textarea, View, VKCOM,
    withAdaptivity,
    withPlatform
} from "@vkontakte/vkui";
import {Icon24Cancel, Icon24Done} from "@vkontakte/icons";


import CurrenciesTickerSearch from "./components/CurrenciesTickerSearch";
import CurrenciesTickerFilter from "./components/CurrenciesTickerFilter";


const CurrenciesTickerComponent = (props: { sizeX?: any; platform?: any; setActiveView: any; setTicker: any;}) => {
    const [activePanel, setActivePanel] = useState('search')
    const [activeModal, setActiveModal] = useState<null | string>(null)
    const [filterSlider, setFilterSlider] = React.useState<any>(0);
    const goHeaderSearch = () => { setActivePanel('header-search') }
    /*const goHome = () => {setActivePanel('home')}
    const goSearch = () => { setActivePanel('home') }
    const hideModal = () => { setActiveModal(null) }*/

    const { platform } = props;

    console.log(platform)
    console.log(activeModal)
    console.log(filterSlider)
    return (
        <View activePanel={activePanel}>
            <Panel id="search">
                <PanelHeader
                    left={platform !== VKCOM &&
                    <PanelHeaderBack onClick={() => props.setActiveView('home')}  />}
                    separator={props.sizeX === SizeType.REGULAR}
                >
                    Currencies Ticker
                </PanelHeader>
                    <FormItem top="Simple 0, 10000">
                        <Slider
                            min={0}
                            max={10000}
                            value={Number(filterSlider)}
                            onChange={value => setFilterSlider(value)}
                        />
                    </FormItem>
                    <FormItem>
                        <Textarea
                            value={String(Math.floor(filterSlider))}
                            onChange={e => setFilterSlider(e.target.value)}
                        />
                    </FormItem>

                <CurrenciesTickerSearch
                    sizeX={props.sizeX}
                    goHeaderSearch={goHeaderSearch}
                    platform={platform}
                    onFiltersClick={() => setActiveModal('filters')}
                    filterSlide={filterSlider}
                    setActiveView={props.setActiveView}
                    setTicker={props.setTicker}

                />
            </Panel>
        </View>
    );
}

const CurrenciesTicker = withPlatform(withAdaptivity(CurrenciesTickerComponent, { sizeX: true }));

export default CurrenciesTicker;
