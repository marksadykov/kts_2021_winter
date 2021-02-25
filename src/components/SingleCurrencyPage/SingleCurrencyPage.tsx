import * as React from 'react';
import {CardGrid, ContentCard, Group, PanelHeader, PanelHeaderBack, platform, SizeType, VKCOM} from "@vkontakte/vkui";

const SingleCurrencyPage = (props: {
    setActiveView: any;
    nameOfCurrency: any;
    date: any;
    developer: any;
    version: any;
    wideLogo: any;
    russianName: any;
    value: any;
    longLogo: any;
    history: any;
}) => {

    return (
        <>
            <PanelHeader
                left={
                <PanelHeaderBack onClick={() => props.setActiveView('home')}  />}>
                {props.nameOfCurrency}
            </PanelHeader>
            <Group>
                <CardGrid size="l">
                    <ContentCard
                        subtitle={'Первый выпуск: ' + props.date}
                        header={'Разработчик: ' + props.developer}
                        caption={'Последняя версия: ' + props.version}
                    />
                    <ContentCard
                        image={props.wideLogo}
                        subtitle={'1 '+ props.russianName}
                        header={props.value + ' Долларов США'}
                        maxHeight={150}
                    />
                    <ContentCard
                        image={props.longLogo}
                        header="История"
                        text={props.history}
                        caption="Материалы из Википедии"
                        maxHeight={500}
                    />
                </CardGrid>
            </Group>
        </>
    )
};

export default SingleCurrencyPage;
