import * as React from 'react';

import {
    Cell,
    Footer,
    Group,
    PanelHeader,
    PanelHeaderButton,
    Search,
} from "@vkontakte/vkui";
import {Icon28AddOutline} from "@vkontakte/icons";

const thematics = [
    {id: 3201, name: "Аренда автомобилей"},
    {id: 3273, name: "Автотовары"},
    {id: 3205, name: "Автосалон"},
    {id: 3282, name: "Автосервис"},
    {id: 3283, name: "Услуги для автовладельцев"},
    {id: 3284, name: "Велосипеды"},
    {id: 3285, name: "Мотоциклы и другая мототехника"},
    {id: 3286, name: "Водный транспорт"},
    {id: 3287, name: "Автопроизводитель"},
    {id: 3288, name: "Автомойка"},
    {id: 3117, name: "Автошкола"},
    {id: 3118, name: "Детский сад"},
    {id: 3119, name: "Гимназия"},
    {id: 3120, name: "Колледж"},
    {id: 3121, name: "Лицей"},
    {id: 3122, name: "Техникум"},
    {id: 3123, name: "Университет"},
    {id: 3124, name: "Школа"},
    {id: 3125, name: "Институт"},
    {id: 3126, name: "Обучающие курсы"},
    {id: 3276, name: "Дополнительное образование"},
    {id: 3275, name: "Тренинг, семинар"},
    {id: 3127, name: "Танцевальная школа"}
];



const SearchGroup = () => {

    const [search, setSearch] = React.useState('');

    const getThematics () {
        const searchThema = search.toLowerCase();
        return thematics.filter(({name}) => name.toLowerCase().indexOf(searchThema) > -1);
    }

    return (
        <>
            <PanelHeader
                right={
                    <PanelHeaderButton
                        // onClick={this.props.goHeaderSearch}
                    >
                        <Icon28AddOutline />
                    </PanelHeaderButton>
                }
                // separator={this.props.sizeX === SizeType.REGULAR}
            >
                Выбор тематики
            </PanelHeader>
            <Group>
                <Search value={search} onChange={ e => setSearch(e.target.value)} after={null}/>
                {thematics.length > 0 && thematics.map(item => <Cell key={item.id}>{item.name}</Cell>)}
                {thematics.length === 0 && <Footer>Ничего не найдено</Footer>}
            </Group>
        </>
    );
}

export default SearchGroup;
