import React, {useState} from "react";
import {
    Avatar,
    Footer,
    Group, List, Panel,
    PanelHeader, PanelHeaderBack,
    PanelHeaderButton,
    Search,
    SimpleCell,
    SizeType, View,
    VKCOM
} from "@vkontakte/vkui";
import {Icon24Filter, Icon28AddOutline} from "@vkontakte/icons";
import {useLocal} from "../../../utils/useLocal";
import {CurrenciesTickerStore} from "../../../store/CurennciesTickerStore/CurrenciesTickerStore";
import {useAsync} from "../../../utils/useAsync";
import {observer} from "mobx-react-lite";
import CurrenciesMathFloor from "../../../utils/utils";
import {Meta} from "../../../utils/Meta";
import Loading from "./Loading";
import Example from "./CurrenciesTickerGraphics";
import CurrenciesTicker from "../CurrenciesTicker";
import PercentageInformationCurrencies from "./PercentageInformationCurrencies";

const CurrenciesTickerSearch = (props: { goHeaderSearch: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined; sizeX: SizeType; filterSlide?: any; platform?: any; goSearch?: any; onFiltersClick?: any; setActiveView:any; setTicker: any}) => {
    const [search, setSearch] = useState('')
    const onChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setSearch(e.target.value);
    }
    const {onFiltersClick} = props;
    const store = useLocal(() => new CurrenciesTickerStore())

    useAsync(store.fetch, []);

    if (store.meta === Meta.loading) {
        return <Loading/>
    }


    return (
        <React.Fragment>
            <Search
                value={search}
                onChange={onChange}
                icon={<Icon24Filter/>}
                onIconClick={onFiltersClick}
            />
            <Group>
                {store.repos.filter(({name, price}) => name.toLowerCase().indexOf(search.toLowerCase()) > -1 && price > props.filterSlide).map(data =>
                    <List key={data.id} onClick={() => props.setTicker(data.id)} >
                    <SimpleCell before={<Avatar size={40} src={data.logoUrl}/>} onClick={ () => props.setActiveView('info')}>
                        {data.name} {CurrenciesMathFloor(data.price)}
                    </SimpleCell>
                    </List>)
                }
                {store.repos.length === 0 && <Footer>Ничего не найдено</Footer>}
            </Group>
        </React.Fragment>
    );
}

export default observer(CurrenciesTickerSearch);
