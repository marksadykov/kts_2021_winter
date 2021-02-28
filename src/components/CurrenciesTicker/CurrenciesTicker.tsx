import * as React from "react";
import {
    FormItem,
    Panel,
    PanelHeader,
    PanelHeaderBack,
    SizeType,
    Slider,
    Textarea,
    View,
    VKCOM,
    withAdaptivity,
    withPlatform
} from "@vkontakte/vkui";


import CurrenciesTickerSearch from "./components/CurrenciesTickerSearch";
import {Panels} from "../../utils";


const CurrenciesTickerComponent = (props: { sizeX?: any; platform?: any; setActiveView: any; setTicker: any;}) => {
    const [activePanel, setActivePanel] = React.useState<string | any>(Panels.search);
    const [activeModal, setActiveModal] = React.useState<null | string>(null);
    const [filterSlider, setFilterSlider] = React.useState<HTMLTextAreaElement | any>(0);
    const goHeaderSearch = () => { setActivePanel('header-search') };

    const { platform } = props;

    return (
        <View activePanel={activePanel}>
            <Panel id="search">
                <PanelHeader
                    left={platform !== VKCOM &&
                    <PanelHeaderBack onClick={() => props.setActiveView(Panels.home)}  />}
                    separator={props.sizeX === SizeType.REGULAR}
                >
                    Currencies Ticker
                </PanelHeader>
                    <FormItem top="Filter 0 - 10000 $">
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
                            style={{ height:'45px'}}
                        />
                    </FormItem>

                <CurrenciesTickerSearch
                    sizeX={props.sizeX}
                    platform={platform}
                    onFiltersClick={() => setActiveModal(Panels.filters)}
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
