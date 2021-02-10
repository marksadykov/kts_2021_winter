import React, {useState} from "react";
import {
    Footer,
    Group,
    PanelHeader,
    PanelHeaderButton,
    Search,
    SimpleCell,
    SizeType
} from "@vkontakte/vkui";
import {Icon28AddOutline} from "@vkontakte/icons";

import ApiService from "../../../store/ApiService";
import Loading from "./Loading";
import Image from "./Image";
import ListCurrenciesTicker from "./ListCurrenciesTicker";

const CurrenciesTickerSearch = (props) => {
    const [search, setSearch] = useState('')
    const onChange = (e) =>  { setSearch(e.target.value); }
    const data = ApiService();

    /*const [pressButton, setPressButton] = useState('false')

    const handleClick = () => {
        setPressButton(!pressButton)
        console.log(pressButton)
    }*/

    if (data === null) {
        return <Loading/>
    }


    console.log(data.map(function (name) {
        return name.id
    }).filter(value => value.indexOf(search) > -1), '1')

    // console.log(data.filter(value => value.id === search).map(data => data.id))
    return (
        <React.Fragment>
            <PanelHeader
                left={<PanelHeaderButton onClick={props.goHeaderSearch}><Icon28AddOutline /></PanelHeaderButton>}
                separator={props.sizeX === SizeType.REGULAR}
            >
                Выбор тематики
            </PanelHeader>
            <Group>
                <Search
                    value={search}
                    onChange={onChange}
                    after={null}
                />
               {/* console.log(data.map(function (name) {
                       return name.id
                    }).filter(value => value.indexOf(search) > -1), '1')*/}
                    {/*!!! Как сделать строкой ниже, чтобы это работала также, как сверху !!! У меня не получается никак обработать нижний регистр. Выдает ошибку*/}
                {data.length > 0 && data.filter((value) => value.name.indexOf(search) > -1).map(data =>
                    <SimpleCell key={data.id}>
                        <Image response={data}/>
                        <ListCurrenciesTicker response={data} />
                    </SimpleCell>)
                }
                {data.length === 0 && <Footer>Ничего не найдено</Footer>}
            </Group>
        </React.Fragment>
    );
}

export default CurrenciesTickerSearch;
