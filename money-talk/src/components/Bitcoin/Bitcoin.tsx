import * as React from 'react';
import {observer} from 'mobx-react-lite';
import {Avatar, Banner, Button, Group, Header, Panel, PanelHeader, View} from "@vkontakte/vkui";

// import { useAsync } from '../../utils/useAsync';
// import { useLocalStore } from '../../utils/useLocal';

const Bitcoin = () => {

    // const store = useLocalStore(() => new CurrencyStore());
    //
    // useAsync(() => store.fetch(), []);

    return (

        <Banner
            before={<Avatar mode="image" src="https://sun9-63.userapi.com/yOEQYPHrNHjZEoanbqPb65HPl5iojmiLgLzfGA/W3geVMMt8TI.jpg" />}
            header="Баста в Ледовом"
            subheader="Большой концерт"
            asideMode="dismiss"
            actions={<Button>Подробнее</Button>}
        />
    )
}

export default observer(Bitcoin);
