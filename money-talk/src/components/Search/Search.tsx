import * as React from 'react';
import {
    Cell,
    Footer,
    Group, Panel,
    Search, SizeType,
    View
} from "@vkontakte/vkui";

const money = [
    {id: 1, name: "Рубль", value: 65.75},
    {id: 2, name: "Доллар", value: 1.0},
    {id: 3, name: "Евро", value: 0.75},
];

const getMoney = (search: string) => {
    const searchValue = search.toLowerCase();
    return money.filter(({name}) => name.toLowerCase().indexOf(searchValue) > -1);
}

const SimpleSearch = (props: { goHeaderSearch: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined; sizeX: SizeType; platform: any;
    currentCountry: any;
    activeModal: any;}) =>  {

    const [search, setSearch] = React.useState('');

    return (
        <>
            <Group>
                <Search value={search} onChange={(e: any) => {
                        setSearch(e.target.value);
                        props.currentCountry(e.target.value);
                        props.activeModal({
                            homeValue: null,
                            currentValue: ''
                        })
                    }
                }
                after={null}/>
                {getMoney(search).length > 0 && getMoney(search).map((item: any) => <Cell key={item.id}>{item.name}</Cell>)}
                {getMoney(search).length === 0 && <Footer>Ничего не найдено</Footer>}
            </Group>
        </>
    );
}


const SearchExample = (props: { sizeX?: any; platform?: any; currentCountry: any; activeModal: any;}) => {

    const [activePanel, setActivePanel] = React.useState('search');

    const { platform } = props;
    return (
        <View
            activePanel={activePanel}
        >
            <Panel id="search">
                <SimpleSearch currentCountry={props.currentCountry}
                              activeModal={props.activeModal}
                              sizeX={props.sizeX} goHeaderSearch={() => setActivePanel('header-search')} platform={platform} />
            </Panel>
        </View>
    );
}

export default SearchExample;
