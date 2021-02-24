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
import {Panels, useLocal} from "../../../utils";
import {CurrenciesTickerStore} from "../../../store/CurennciesTickerStore";
import {useAsync} from "../../../utils";
import {observer} from "mobx-react-lite";
import {Meta} from "../../../utils";
import Loading from "./Loading";
import CurrenciesMathFloor from "./utils/utils";


const CurrenciesTickerSearch = (props: { sizeX: SizeType; filterSlide?: any; platform?: any; goSearch?: any; onFiltersClick?: any; setActiveView:any; setTicker: any}) => {
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
                onIconClick={onFiltersClick}
            />
            <Group>
                {store.repos.filter(({name, price}) => name.toLowerCase().indexOf(search.toLowerCase()) > -1 && price > props.filterSlide).map(data =>
                    <List key={data.id} onClick={() => props.setTicker(data.id)} >
                    <SimpleCell before={<Avatar size={40} src={data.logoUrl}/>} onClick={ () => props.setActiveView(Panels.info)}>
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
