import * as React from 'react';
import {observer} from 'mobx-react-lite';
import {Avatar, Banner} from "@vkontakte/vkui";

import { useAsync } from '../../utils/useAsync';
import { useLocalStore } from '../../utils/useLocal';
import singleCurrencyStore from "../../store/singleCurrencyStore";

const SingleCurrency = (props: {
    symbol: string;
    name: string;
    logoUrl: string;
}) => {
    // const store = useLocalStore(() => new singleCurrencyStore([props.symbol]));
    //
    // useAsync(() => store.fetch(), []);
    //
    // React.useEffect(
    //     () => {
    //         console.log(store.currency);
    //     },
    //     [store.currency],
    // );

    return (

        <Banner
            style={{
                margin: 0,
                padding: 0,
            }}
            before={
                <Avatar size={50}
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
