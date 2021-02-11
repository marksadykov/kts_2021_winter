import * as React from 'react';
import {FormItem, Group, Header, Input} from "@vkontakte/vkui";
import Search from "../Search";

const countries = [
    {
        country: 'Russia',
        value: 65,
    },
    {
        country: 'USA',
        value: 1,
    }
]


const Change = () => {

    const [firstMoney, setFirstMoney] = React.useState('0');

    return (
        <Group header={<Header mode="secondary">Валюта 1</Header>}>
            <FormItem>
                <Input value={String(firstMoney)} onChange={e => setFirstMoney(e.target.value)} type="number"/>
            </FormItem>
            <Search />
        </Group>
    )
}

export default Change;
