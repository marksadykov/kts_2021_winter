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

import ApiService from "../../../store/ApiService";
import Loading from "./Loading";
import CurrenciesMathFloor from "../../../utils/utils";


const CurrenciesTickerFilter = (props) => {
    const [search, setSearch] = React.useState('')
    const onChange = (e) =>  { setSearch(e.target.value); }
    const data = ApiService();
    const { platform, sizeX, goSearch, onFiltersClick } = props;

    if (data === null) {
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
                {data.length > 0 && data.filter((value) => value.price > props.filterSlide).map(data =>
                    <SimpleCell
                        before={<Avatar size={40} src={data.logo_url} />}
                        key={data.id}
                        onClick={goSearch}
                    >
                        {data.name} {CurrenciesMathFloor(data.price)}</SimpleCell>
                    )
                }
                {data.length === 0 && <Footer>Ничего не найдено</Footer>}
            </Group>
        </React.Fragment>
    );
}

export default CurrenciesTickerFilter;
