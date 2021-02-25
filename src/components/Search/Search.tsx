import * as React from 'react';
import {
    Cell,
    Footer,
    Group, Panel,
    Search, SizeType,
    View
} from "@vkontakte/vkui";

const getMoney = (search: string, money: {id: number, name: string, value:number}[]) => {
    const searchValue = search.toLowerCase();
    return money.filter(({name}) => name.toLowerCase().indexOf(searchValue) > -1);
}

const ChoseSearch = (props: { goHeaderSearch: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    sizeX: SizeType;
    platform: any;
    currentCountry: any;
    setActiveModal: any;
    listCurrency: any;
}) =>  {

    const [search, setSearch] = React.useState('');

    return (
        <>
            <Group>
                <Search value={search} onChange={(e: any) => {setSearch(e.target.value)}
                }
                after={null}/>
                {getMoney(search, props.listCurrency).length > 0 && getMoney(search, props.listCurrency).map((item: any) =>
                    <Cell onClick={ () => {
                            props.currentCountry({
                                country: item.name,
                                value: item.value
                            });
                            props.setActiveModal({
                                homeValue: null,
                                currentValue: ''
                            })
                        }
                    }
                    key={item.id}>{item.name}</Cell>
                )}
                {getMoney(search, props.listCurrency).length === 0 && <Footer>Ничего не найдено</Footer>}
            </Group>
        </>
    );
}


const SearchGroup = (props: {
    sizeX?: any;
    platform?: any;
    currentCountry: any;
    setActiveModal: any;
    listCurrency: any,
}) => {

    const [activePanel, setActivePanel] = React.useState('search');

    const { platform } = props;
    return (
        <View
            activePanel={activePanel}
        >
            <Panel id="search">
                <ChoseSearch currentCountry={props.currentCountry}
                              setActiveModal={props.setActiveModal}
                              sizeX={props.sizeX} goHeaderSearch={() => setActivePanel('header-search')}
                              listCurrency={props.listCurrency}
                              platform={platform} />
            </Panel>
        </View>
    );
}

export default SearchGroup;
