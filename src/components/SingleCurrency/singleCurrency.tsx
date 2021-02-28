import * as React from 'react';
import {observer} from 'mobx-react-lite';
import {Avatar, Banner} from "@vkontakte/vkui";

const SingleCurrency = (props: {
    symbol: string;
    name: string;
    logoUrl: string;
}) => {

    return (

        <Banner
            style={{
                margin: 0,
                padding: 0,
            }}
            before={
                <Avatar size={40}
                        mode="image"
                        src={props.logoUrl}
                />
            }
            header={props.symbol}
            subheader={props.name}
        />
    )
};

export default observer(SingleCurrency);
