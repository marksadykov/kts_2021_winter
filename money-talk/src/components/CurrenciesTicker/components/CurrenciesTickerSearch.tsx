import React, {useState} from "react";
import {
    Avatar,
    Footer,
    Group,
    PanelHeader, PanelHeaderBack,
    PanelHeaderButton,
    Search,
    SimpleCell,
    SizeType,
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

const CurrenciesTickerSearch = (props: { goHeaderSearch: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined; sizeX: SizeType; filterSlide?: any; platform?: any; goSearch?: any; onFiltersClick?: any; hideModal: any; goHome:any; setActiveView:any}) => {
    const [search, setSearch] = useState('')
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
                <PanelHeaderBack onClick={() => props.setActiveView('home')}  />}
                separator={sizeX === SizeType.REGULAR}
            >
                <Search
                    value={search}
                    onChange={onChange}
                    icon={<Icon24Filter />}
                    onIconClick={onFiltersClick}
                />
            </PanelHeader>
            {props.filterSlide === null &&
            <Group>
                {store.repos.filter(({name}) => name.toLowerCase().indexOf(search.toLowerCase()) > -1).map(data =>
                    <SimpleCell key={data.id}  before={ <Avatar size={40} src={data.logoUrl}/>}>
                        {data.name} {CurrenciesMathFloor(data.price)}
                    </SimpleCell>)
                }
                {store.repos.length === 0 && <Footer>Ничего не найдено</Footer>}
            </Group>
            }
            {props.filterSlide != null &&
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
            }

        </React.Fragment>
    );
}

export default observer(CurrenciesTickerSearch);
