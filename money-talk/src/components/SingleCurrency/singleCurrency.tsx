import * as React from 'react';
import {observer} from 'mobx-react-lite';
import {Avatar, Banner} from "@vkontakte/vkui";

// import { useAsync } from '../../utils/useAsync';
// import { useLocalStore } from '../../utils/useLocal';

const singleCurrency = () => {

    // const store = useLocalStore(() => new CurrencyStore());
    //
    // useAsync(() => store.fetch(), []);

    return (

        <Banner
            style={{
                margin: 0,
                padding: 0,
            }}
            before={
                <Avatar size={70}
                        mode="image"
                        src="https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg"
                />
            }
            header="BTC"
            subheader="Bitcoin"
        />
    )
}

export default observer(singleCurrency);
