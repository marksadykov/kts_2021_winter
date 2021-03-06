import React from "react";
import {
    Avatar,
    Footer,
    Group,
    PanelHeader,
    PanelHeaderBack,
    Search,
    SimpleCell,
    SizeType,
    VKCOM
} from "@vkontakte/vkui";
import {Icon24Filter} from "@vkontakte/icons";

import Loading from "./Loading";
import {useLocal} from "../../../utils";
import {CurrenciesTickerStore} from "../../../store/CurennciesTickerStore";
import {useAsync} from "../../../utils";
import {Meta} from "../../../utils";
import {observer} from "mobx-react-lite";
import CurrenciesMathFloor from "./utils/utils";


const CurrenciesTickerFilter = (props: { filterSlide?: any; platform?: any; sizeX?: any; goSearch?: any; onFiltersClick?: any; hideModal: any }) => {
    const [search, setSearch] = React.useState('')
    const onChange = (e: { target: { value: React.SetStateAction<string>; }; }) =>  { setSearch(e.target.value); }
    const { platform, sizeX, goSearch, onFiltersClick } = props;
    const store = useLocal(() => new CurrenciesTickerStore())

    useAsync(store.fetch, []);

    if (store.meta === Meta.loading) {
        return <Loading/>
    }

    return (
        <React.Fragment>
            <PanelHeader
                left={platform !== VKCOM &&
                <PanelHeaderBack onClick={goSearch} />}
                separator={sizeX === SizeType.REGULAR}
            >
                <Search
                    value={search}
                    onChange={onChange}
                    icon={<Icon24Filter />}
                    onIconClick={onFiltersClick}
                />
            </PanelHeader>
            <Group>
                {store.repos.length > 0 && store.repos.filter((value) => value.price > props.filterSlide).map(data =>
                    <SimpleCell
                        before={<Avatar size={40} src={data.logoUrl} />}
                        key={data.id}
                        onClick={goSearch}
                    >
                        {data.name} {CurrenciesMathFloor(data.price)}</SimpleCell>
                )
                }
                {store.repos.length === 0 && <Footer>Ничего не найдено</Footer>}
            </Group>

        </React.Fragment>
    );
}

export default observer(CurrenciesTickerFilter);
